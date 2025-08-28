"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  User, 
  Trophy, 
  Play, 
  Target, 
  Award, 
  Calendar,
  Edit,
  Check,
  X
} from 'lucide-react';

interface UserProfileProps {
  user: any;
  updateUser: (user: any) => void;
  onBack: () => void;
}

export default function UserProfile({ user, updateUser, onBack }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Loading user profile...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSaveName = () => {
    if (editName.trim()) {
      updateUser({ ...user, name: editName.trim() });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditName(user.name);
    setIsEditing(false);
  };

  const getAchievementInfo = (achievement: string) => {
    const achievements: { [key: string]: { name: string; description: string; icon: string } } = {
      first_game: {
        name: 'First Steps',
        description: 'Completed your first health trivia game',
        icon: '🎯'
      },
      perfect_game: {
        name: 'Perfect Score',
        description: 'Answered all 10 questions correctly in one game',
        icon: '🎯'
      },
      high_scorer: {
        name: 'High Scorer',
        description: 'Reached 500 total health tokens',
        icon: '🏆'
      },
      consistent_player: {
        name: 'Consistent Player',
        description: 'Played 10 games',
        icon: '🎮'
      },
      knowledge_seeker: {
        name: 'Knowledge Seeker',
        description: 'Played on all difficulty levels',
        icon: '📚'
      }
    };

    return achievements[achievement] || {
      name: achievement.replace('_', ' ').toUpperCase(),
      description: 'Special achievement unlocked',
      icon: '🏅'
    };
  };

  const calculateAccuracy = () => {
    if (user.gamesPlayed === 0) return 0;
    // Assuming average performance, this could be enhanced with actual tracking
    return Math.round((user.totalScore / (user.gamesPlayed * 30)) * 100); // Max 30 points per game (difficult)
  };

  const getLevelProgress = () => {
    let currentLevel = 'Beginner';
    let progress = 0;
    let nextMilestone = 100;

    if (user.totalScore >= 300) {
      currentLevel = 'Expert';
      progress = Math.min(100, (user.totalScore / 1000) * 100);
      nextMilestone = 1000;
    } else if (user.totalScore >= 100) {
      currentLevel = 'Advanced';
      progress = ((user.totalScore - 100) / 200) * 100;
      nextMilestone = 300;
    } else {
      currentLevel = 'Beginner';
      progress = (user.totalScore / 100) * 100;
      nextMilestone = 100;
    }

    return { currentLevel, progress, nextMilestone };
  };

  const levelInfo = getLevelProgress();

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
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {isEditing ? (
                      <div className="flex items-center space-x-2">
                        <Input
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="text-xl font-bold"
                          onKeyPress={(e) => e.key === 'Enter' && handleSaveName()}
                        />
                        <Button size="sm" onClick={handleSaveName}>
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <Button size="sm" variant="ghost" onClick={() => setIsEditing(true)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Joined {new Date(user.createdAt).toLocaleDateString()}
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">
                      {levelInfo.currentLevel}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Statistics */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                    Game Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{user.totalScore}</p>
                      <p className="text-sm text-gray-600">Total Health Tokens</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{user.gamesPlayed}</p>
                      <p className="text-sm text-gray-600">Games Played</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{calculateAccuracy()}%</p>
                      <p className="text-sm text-gray-600">Average Accuracy</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">{user.achievements.length}</p>
                      <p className="text-sm text-gray-600">Achievements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-green-500" />
                    Level Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{levelInfo.currentLevel}</span>
                      <span className="text-sm text-gray-600">
                        {user.totalScore} / {levelInfo.nextMilestone} tokens
                      </span>
                    </div>
                    <Progress value={levelInfo.progress} className="w-full" />
                    <p className="text-sm text-gray-600">
                      {levelInfo.nextMilestone - user.totalScore} more tokens to next level
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Difficulty Unlocks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Play className="h-5 w-5 mr-2 text-blue-500" />
                    Difficulty Levels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-700">Easy</p>
                        <p className="text-sm text-green-600">10 tokens per correct answer</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Unlocked</Badge>
                    </div>
                    
                    <div className={`flex items-center justify-between p-3 rounded-lg ${
                      user.intermediateUnlocked 
                        ? 'bg-orange-50' 
                        : 'bg-gray-50 opacity-60'
                    }`}>
                      <div>
                        <p className={`font-medium ${
                          user.intermediateUnlocked ? 'text-orange-700' : 'text-gray-500'
                        }`}>Intermediate</p>
                        <p className={`text-sm ${
                          user.intermediateUnlocked ? 'text-orange-600' : 'text-gray-500'
                        }`}>20 tokens per correct answer</p>
                      </div>
                      <Badge className={
                        user.intermediateUnlocked 
                          ? 'bg-orange-100 text-orange-700' 
                          : 'bg-gray-100 text-gray-500'
                      }>
                        {user.intermediateUnlocked ? 'Unlocked' : 'Locked'}
                      </Badge>
                    </div>
                    
                    <div className={`flex items-center justify-between p-3 rounded-lg ${
                      user.difficultUnlocked 
                        ? 'bg-red-50' 
                        : 'bg-gray-50 opacity-60'
                    }`}>
                      <div>
                        <p className={`font-medium ${
                          user.difficultUnlocked ? 'text-red-700' : 'text-gray-500'
                        }`}>Difficult</p>
                        <p className={`text-sm ${
                          user.difficultUnlocked ? 'text-red-600' : 'text-gray-500'
                        }`}>30 tokens per correct answer</p>
                      </div>
                      <Badge className={
                        user.difficultUnlocked 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-gray-100 text-gray-500'
                      }>
                        {user.difficultUnlocked ? 'Unlocked' : 'Locked'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-500" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {user.achievements.length === 0 ? (
                    <div className="text-center py-8">
                      <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No achievements yet</p>
                      <p className="text-sm text-gray-400">Play games to unlock achievements!</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {user.achievements.map((achievement: string, index: number) => {
                        const info = getAchievementInfo(achievement);
                        return (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                            <div className="text-2xl">{info.icon}</div>
                            <div>
                              <p className="font-medium text-purple-700">{info.name}</p>
                              <p className="text-sm text-purple-600">{info.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Achievements */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-sm text-gray-600">Upcoming Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {!user.achievements.includes('perfect_game') && (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
                        <div className="text-2xl">🎯</div>
                        <div>
                          <p className="font-medium text-gray-600">Perfect Score</p>
                          <p className="text-sm text-gray-500">Get all 10 questions correct</p>
                        </div>
                      </div>
                    )}
                    
                    {user.totalScore < 500 && (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
                        <div className="text-2xl">🏆</div>
                        <div>
                          <p className="font-medium text-gray-600">High Scorer</p>
                          <p className="text-sm text-gray-500">Reach 500 total tokens</p>
                        </div>
                      </div>
                    )}
                    
                    {user.gamesPlayed < 10 && (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
                        <div className="text-2xl">🎮</div>
                        <div>
                          <p className="font-medium text-gray-600">Consistent Player</p>
                          <p className="text-sm text-gray-500">Play 10 games</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}