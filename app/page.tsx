"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Brain, Users, Shield, Trophy, Play, Settings } from 'lucide-react';
import GameInterface from '@/components/GameInterface';
import Leaderboard from '@/components/Leaderboard';
import UserProfile from '@/components/UserProfile';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'game' | 'leaderboard' | 'profile'>('home');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Load user data from localStorage
    const savedUser = localStorage.getItem('healthTriviaUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name: 'Health Explorer',
        totalScore: 0,
        gamesPlayed: 0,
        easyUnlocked: true,
        intermediateUnlocked: false,
        difficultUnlocked: false,
        achievements: [],
        createdAt: new Date().toISOString()
      };
      setUser(newUser);
      localStorage.setItem('healthTriviaUser', JSON.stringify(newUser));
    }
  }, []);

  const updateUser = (updatedUser: any) => {
    setUser(updatedUser);
    localStorage.setItem('healthTriviaUser', JSON.stringify(updatedUser));
  };

  if (currentScreen === 'game') {
    return <GameInterface user={user} updateUser={updateUser} onBack={() => setCurrentScreen('home')} />;
  }

  if (currentScreen === 'leaderboard') {
    return <Leaderboard onBack={() => setCurrentScreen('home')} />;
  }

  if (currentScreen === 'profile') {
    return <UserProfile user={user} updateUser={updateUser} onBack={() => setCurrentScreen('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Health Trivia Challenge
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test your knowledge on personal health, mental wellness, and reproductive health. 
            Earn health tokens and climb the leaderboard!
          </p>
        </div>

        {/* User Stats */}
        {user && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Trophy className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Total Score</p>
                <p className="text-2xl font-bold text-yellow-600">{user.totalScore}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Play className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Games Played</p>
                <p className="text-2xl font-bold text-blue-600">{user.gamesPlayed}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Shield className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Achievements</p>
                <p className="text-2xl font-bold text-green-600">{user.achievements.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Settings className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Level Progress</p>
                <p className="text-2xl font-bold text-purple-600">
                  {user.difficultUnlocked ? 'Expert' : user.intermediateUnlocked ? 'Advanced' : 'Beginner'}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Game Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Personal Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                Nutrition, exercise, and general wellness topics
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-pink-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Reproductive Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                Sexual health and reproductive wellness
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 text-purple-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Mental Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                Mental wellness and psychological health
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Stress Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                Coping strategies and stress reduction
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Difficulty Levels */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Choose Your Challenge Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border-2 border-green-200 rounded-lg bg-green-50">
                <Badge variant="secondary" className="mb-2 bg-green-100 text-green-700">Easy</Badge>
                <p className="text-sm text-gray-600 mb-2">10 Health Tokens per correct answer</p>
                <p className="text-xs text-gray-500">Basic health knowledge</p>
              </div>
              
              <div className={`text-center p-4 border-2 rounded-lg ${
                user?.intermediateUnlocked 
                  ? 'border-orange-200 bg-orange-50' 
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}>
                <Badge variant="secondary" className="mb-2 bg-orange-100 text-orange-700">Intermediate</Badge>
                <p className="text-sm text-gray-600 mb-2">20 Health Tokens per correct answer</p>
                <p className="text-xs text-gray-500">
                  {user?.intermediateUnlocked ? 'Moderate difficulty' : 'Unlock by scoring 100+ points'}
                </p>
              </div>
              
              <div className={`text-center p-4 border-2 rounded-lg ${
                user?.difficultUnlocked 
                  ? 'border-red-200 bg-red-50' 
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}>
                <Badge variant="secondary" className="mb-2 bg-red-100 text-red-700">Difficult</Badge>
                <p className="text-sm text-gray-600 mb-2">30 Health Tokens per correct answer</p>
                <p className="text-xs text-gray-500">
                  {user?.difficultUnlocked ? 'Expert level questions' : 'Unlock by scoring 300+ points'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
            onClick={() => setCurrentScreen('game')}
          >
            <Play className="h-5 w-5 mr-2" />
            Start Game
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setCurrentScreen('leaderboard')}
          >
            <Trophy className="h-5 w-5 mr-2" />
            Leaderboard
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setCurrentScreen('profile')}
          >
            <Settings className="h-5 w-5 mr-2" />
            Profile
          </Button>
        </div>
      </div>
    </div>
  );
}