"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Heart, Award, CheckCircle, XCircle } from 'lucide-react';
import { healthQuestions } from '@/lib/questions';
import type { Question } from '@/lib/questions';

interface GameInterfaceProps {
  user: any;
  updateUser: (user: any) => void;
  onBack: () => void;
}

export default function GameInterface({ user, updateUser, onBack }: GameInterfaceProps) {
  const [gameState, setGameState] = useState<'difficulty' | 'playing' | 'result'>('difficulty');
  const [difficulty, setDifficulty] = useState<'easy' | 'intermediate' | 'difficult'>('easy');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0 && !showResult) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer('');
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameState, showResult]);

  const getQuestionsByDifficulty = (diff: string) => {
    // Get user's previously used questions
    const savedUsedIds = localStorage.getItem(`usedQuestions_${user.id}`);
    const previouslyUsed = savedUsedIds ? new Set(JSON.parse(savedUsedIds)) : new Set();
    
    // Filter questions by difficulty and exclude used ones
    const availableQuestions = healthQuestions.filter(q => 
      q.difficulty === diff && !previouslyUsed.has(q.id)
    );
    
    // If we've used most questions, reset and start fresh
    if (availableQuestions.length < 10) {
      localStorage.removeItem(`usedQuestions_${user.id}`);
      return healthQuestions.filter(q => q.difficulty === diff);
    }
    
    return availableQuestions;
  };

  const startGame = (selectedDifficulty: 'easy' | 'intermediate' | 'difficult') => {
    const questions = getQuestionsByDifficulty(selectedDifficulty);
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    
    setDifficulty(selectedDifficulty);
    setCurrentQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setGameState('playing');
    setTimeLeft(30);
    setUsedQuestionIds(new Set());
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (isCorrect) {
      const points = difficulty === 'easy' ? 10 : difficulty === 'intermediate' ? 20 : 30;
      setScore(score + points);
      setCorrectAnswers(correctAnswers + 1);
    }

    // Add question to used set
    const newUsedIds = new Set(usedQuestionIds);
    newUsedIds.add(currentQuestion.id);
    setUsedQuestionIds(newUsedIds);

    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setTimeLeft(30);
      } else {
        endGame();
      }
    }, 2000);
  };

  const endGame = () => {
    // Save used questions
    const savedUsedIds = localStorage.getItem(`usedQuestions_${user.id}`);
    const previouslyUsed = savedUsedIds ? new Set(JSON.parse(savedUsedIds)) : new Set();
    const allUsedIds = new Set([...previouslyUsed, ...usedQuestionIds]);
    localStorage.setItem(`usedQuestions_${user.id}`, JSON.stringify([...allUsedIds]));

    // Update user stats
    const updatedUser = {
      ...user,
      totalScore: user.totalScore + score,
      gamesPlayed: user.gamesPlayed + 1,
      intermediateUnlocked: user.totalScore + score >= 100,
      difficultUnlocked: user.totalScore + score >= 300
    };

    // Add achievements
    if (!user.achievements.includes('first_game') && user.gamesPlayed === 0) {
      updatedUser.achievements.push('first_game');
    }
    if (correctAnswers === 10 && !user.achievements.includes('perfect_game')) {
      updatedUser.achievements.push('perfect_game');
    }
    if (updatedUser.totalScore >= 500 && !user.achievements.includes('high_scorer')) {
      updatedUser.achievements.push('high_scorer');
    }

    updateUser(updatedUser);

    // Save to leaderboard
    const leaderboard = JSON.parse(localStorage.getItem('healthTriviaLeaderboard') || '[]');
    leaderboard.push({
      playerName: user.name,
      score: score,
      difficulty: difficulty,
      correctAnswers: correctAnswers,
      date: new Date().toISOString()
    });
    
    // Keep top 50 scores
    leaderboard.sort((a: any, b: any) => b.score - a.score);
    localStorage.setItem('healthTriviaLeaderboard', JSON.stringify(leaderboard.slice(0, 50)));

    setGameState('result');
  };

  if (gameState === 'difficulty') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Select Difficulty Level</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => startGame('easy')}
                  className="w-full p-6 h-auto flex flex-col items-center justify-center bg-green-500 hover:bg-green-600"
                >
                  <Badge variant="secondary" className="mb-2 bg-green-100 text-green-700">Easy</Badge>
                  <p className="text-sm">10 Health Tokens per correct answer</p>
                  <p className="text-xs opacity-80">Basic health knowledge</p>
                </Button>

                <Button
                  onClick={() => startGame('intermediate')}
                  disabled={!user.intermediateUnlocked}
                  className="w-full p-6 h-auto flex flex-col items-center justify-center bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
                >
                  <Badge variant="secondary" className="mb-2 bg-orange-100 text-orange-700">Intermediate</Badge>
                  <p className="text-sm">20 Health Tokens per correct answer</p>
                  <p className="text-xs opacity-80">
                    {user.intermediateUnlocked ? 'Moderate difficulty' : 'Unlock with 100+ total points'}
                  </p>
                </Button>

                <Button
                  onClick={() => startGame('difficult')}
                  disabled={!user.difficultUnlocked}
                  className="w-full p-6 h-auto flex flex-col items-center justify-center bg-red-500 hover:bg-red-600 disabled:opacity-50"
                >
                  <Badge variant="secondary" className="mb-2 bg-red-100 text-red-700">Difficult</Badge>
                  <p className="text-sm">30 Health Tokens per correct answer</p>
                  <p className="text-xs opacity-80">
                    {user.difficultUnlocked ? 'Expert level questions' : 'Unlock with 300+ total points'}
                  </p>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'result') {
    const percentage = (correctAnswers / currentQuestions.length) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Game Complete!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-6xl">
                  {percentage >= 80 ? '🏆' : percentage >= 60 ? '🥈' : percentage >= 40 ? '🥉' : '📚'}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-green-600">{score}</p>
                    <p className="text-sm text-gray-600">Health Tokens Earned</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">{correctAnswers}/10</p>
                    <p className="text-sm text-gray-600">Correct Answers</p>
                  </div>
                </div>

                <Progress value={percentage} className="w-full" />
                <p className="text-lg">{percentage}% Accuracy</p>

                <div className="space-y-2">
                  <Button 
                    onClick={() => setGameState('difficulty')}
                    className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  >
                    Play Again
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={onBack}
                    className="w-full"
                  >
                    Back to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span className={`font-mono ${timeLeft <= 10 ? 'text-red-500' : ''}`}>
                {timeLeft}s
              </span>
            </div>
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-1 text-red-500" />
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </span>
            <Badge variant="secondary" className={
              difficulty === 'easy' ? 'bg-green-100 text-green-700' :
              difficulty === 'intermediate' ? 'bg-orange-100 text-orange-700' :
              'bg-red-100 text-red-700'
            }>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Badge>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        {/* Question */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="outline">
                {currentQuestion.category}
              </Badge>
              <Badge variant="secondary">
                {difficulty === 'easy' ? '10' : difficulty === 'intermediate' ? '20' : '30'} tokens
              </Badge>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.correctAnswer;
                const shouldShowResult = showResult;
                
                let buttonClass = "w-full p-4 text-left border-2 transition-all duration-200 ";
                
                if (shouldShowResult) {
                  if (isCorrect) {
                    buttonClass += "border-green-500 bg-green-50 text-green-700";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-50 text-red-700";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                  }
                } else {
                  buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                }

                return (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswer(option)}
                    disabled={showResult}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {shouldShowResult && (
                        <span>
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : isSelected ? (
                            <XCircle className="h-5 w-5 text-red-600" />
                          ) : null}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}