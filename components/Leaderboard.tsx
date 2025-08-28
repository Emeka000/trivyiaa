"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Trophy, Medal, Award, Crown } from 'lucide-react';

interface LeaderboardEntry {
  playerName: string;
  score: number;
  difficulty: 'easy' | 'intermediate' | 'difficult';
  correctAnswers: number;
  date: string;
}

interface LeaderboardProps {
  onBack: () => void;
}

export default function Leaderboard({ onBack }: LeaderboardProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const savedLeaderboard = localStorage.getItem('healthTriviaLeaderboard');
    if (savedLeaderboard) {
      const parsed = JSON.parse(savedLeaderboard);
      // Sort by score descending
      parsed.sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.score - a.score);
      setLeaderboard(parsed);
    }
  }, []);

  const filterByDifficulty = (difficulty: string) => {
    if (difficulty === 'all') return leaderboard;
    return leaderboard.filter(entry => entry.difficulty === difficulty);
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 1:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 2:
        return <Award className="h-6 w-6 text-orange-500" />;
      default:
        return <span className="text-lg font-bold text-gray-500">#{index + 1}</span>;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-orange-100 text-orange-700';
      case 'difficult':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const LeaderboardList = ({ entries }: { entries: LeaderboardEntry[] }) => (
    <div className="space-y-3">
      {entries.length === 0 ? (
        <div className="text-center py-12">
          <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No scores recorded yet</p>
          <p className="text-sm text-gray-400">Play some games to see the leaderboard!</p>
        </div>
      ) : (
        entries.slice(0, 50).map((entry, index) => (
          <Card key={index} className={`${index < 3 ? 'border-2 border-yellow-200 bg-yellow-50' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10">
                    {getRankIcon(index)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{entry.playerName}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>{entry.correctAnswers}/10 correct</span>
                      <span>•</span>
                      <span>{formatDate(entry.date)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Badge className={getDifficultyColor(entry.difficulty)}>
                    {entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)}
                  </Badge>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">{entry.score}</p>
                    <p className="text-xs text-gray-500">Health Tokens</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );

  const getStats = () => {
    const totalGames = leaderboard.length;
    const highestScore = leaderboard.length > 0 ? leaderboard[0].score : 0;
    const averageScore = totalGames > 0 
      ? Math.round(leaderboard.reduce((sum, entry) => sum + entry.score, 0) / totalGames)
      : 0;
    const perfectGames = leaderboard.filter(entry => entry.correctAnswers === 10).length;
    
    return { totalGames, highestScore, averageScore, perfectGames };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Leaderboard
              </h1>
            </div>
            <p className="text-gray-600">Top Health Trivia Champions</p>
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{stats.totalGames}</p>
              <p className="text-sm text-gray-600">Total Games</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-yellow-600">{stats.highestScore}</p>
              <p className="text-sm text-gray-600">High Score</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{stats.averageScore}</p>
              <p className="text-sm text-gray-600">Average Score</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-purple-600">{stats.perfectGames}</p>
              <p className="text-sm text-gray-600">Perfect Games</p>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard Tabs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Time</TabsTrigger>
                <TabsTrigger value="easy">Easy</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="difficult">Difficult</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <LeaderboardList entries={filterByDifficulty('all')} />
              </TabsContent>
              
              <TabsContent value="easy" className="mt-6">
                <LeaderboardList entries={filterByDifficulty('easy')} />
              </TabsContent>
              
              <TabsContent value="intermediate" className="mt-6">
                <LeaderboardList entries={filterByDifficulty('intermediate')} />
              </TabsContent>
              
              <TabsContent value="difficult" className="mt-6">
                <LeaderboardList entries={filterByDifficulty('difficult')} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Achievement Legends */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-center">Achievement Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <h3 className="font-semibold text-yellow-600">1st Place</h3>
                <p className="text-sm text-gray-600">Crown Champion</p>
              </div>
              <div className="p-4">
                <Medal className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-600">2nd Place</h3>
                <p className="text-sm text-gray-600">Silver Medal</p>
              </div>
              <div className="p-4">
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-orange-600">3rd Place</h3>
                <p className="text-sm text-gray-600">Bronze Award</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}