'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProgressBar } from '@/components/ui/progress';

// Mock data for dashboard
const userStats = {
  name: 'Азамат',
  level: 'Баштапкы',
  totalCourses: 3,
  completedLessons: 12,
  totalLessons: 45,
  hoursSpent: 24,
  streak: 7,
};

const ongoingCourses = [
  {
    id: 1,
    title: 'Frontend Development',
    progress: 65,
    nextLesson: 'React Hooks - useState жана useEffect',
    image: '🎨',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 2,
    title: 'Backend Development',
    progress: 30,
    nextLesson: 'Node.js жана Express негиздери',
    image: '⚙️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Fullstack Project',
    progress: 10,
    nextLesson: 'Database дизайны жана модельдер',
    image: '🚀',
    color: 'from-violet-500 to-purple-500',
  },
];

const recentActivity = [
  { id: 1, type: 'lesson', title: 'React Components', date: '2 саат мурун', completed: true },
  { id: 2, type: 'quiz', title: 'JavaScript Basics Quiz', date: '5 саат мурун', completed: true },
  { id: 3, type: 'lesson', title: 'CSS Flexbox', date: '1 күн мурун', completed: false },
  { id: 4, type: 'project', title: 'Portfolio Project', date: '2 күн мурун', completed: false },
];

const achievements = [
  { id: 1, title: 'Биринчи кадам', description: 'Биринчи сабакты аяктады', icon: '🎯', unlocked: true },
  { id: 2, title: 'Күнүмдүк', description: '7 күндүк streak', icon: '🔥', unlocked: true },
  { id: 3, title: 'Тез окуучу', description: '1 саатта 5 сабак', icon: '⚡', unlocked: false },
  { id: 4, title: 'Мастер', description: 'Бардык курсту аяктады', icon: '👑', unlocked: false },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-zinc-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-sm text-zinc-400">Кош келиңиз, {userStats.name}!</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                <span className="text-amber-500">🔥</span>
                <span className="text-sm font-medium">{userStats.streak} күн</span>
              </div>
              <Link href="/profile">
                <Button variant="outline" size="sm">
                  Профиль
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 border-violet-800/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400">{userStats.totalCourses}</div>
                <div className="text-sm text-zinc-400 mt-1">Курстар</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-800/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{userStats.completedLessons}/{userStats.totalLessons}</div>
                <div className="text-sm text-zinc-400 mt-1">Сабактар</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-800/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{userStats.hoursSpent}</div>
                <div className="text-sm text-zinc-400 mt-1">Саат</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-emerald-800/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{userStats.level}</div>
                <div className="text-sm text-zinc-400 mt-1">Деңгээл</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ongoing Courses */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Активдүү курстар</h2>
                <Link href="/courses">
                  <Button variant="ghost" size="sm">Баарын көрүү →</Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {ongoingCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    <Card hover className="group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl shadow-lg`}>
                            {course.image}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-400 transition-colors">
                              {course.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="secondary" size="sm">
                                {course.progress}% аяктады
                              </Badge>
                              <span className="text-xs text-zinc-400">
                                Кийинки: {course.nextLesson}
                              </span>
                            </div>
                            <ProgressBar value={course.progress} />
                          </div>
                          <Link href={`/courses/${course.id}`}>
                            <Button size="sm" className="shrink-0">
                              Улантуу
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4">Акыркы активдүүлүк</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y divide-zinc-800/50">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="flex items-center justify-between p-4 hover:bg-zinc-900/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${activity.completed ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                          <div>
                            <div className="font-medium capitalize">{activity.title}</div>
                            <div className="text-xs text-zinc-400">{activity.date}</div>
                          </div>
                        </div>
                        <Badge variant={activity.completed ? 'default' : 'secondary'} size="sm">
                          {activity.completed ? '✓ Аяктады' : 'Жараян'}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4">Тез аракеттер</h2>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <Link href="/courses" className="block">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      📚 Курстарды көрүү
                    </Button>
                  </Link>
                  <Link href="/practice" className="block">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      💻 Практика
                    </Button>
                  </Link>
                  <Link href="/quizzes" className="block">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      📝 Тесттер
                    </Button>
                  </Link>
                  <Link href="/certificate" className="block">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      🏆 Сертификат
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Жетишкендиктер</h2>
                <Link href="/achievements">
                  <Button variant="ghost" size="sm">Баарын көрүү →</Button>
                </Link>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className={`p-3 rounded-xl text-center transition-all ${
                          achievement.unlocked
                            ? 'bg-gradient-to-br from-violet-900/30 to-purple-900/30 border border-violet-800/30'
                            : 'bg-zinc-900/30 border border-zinc-800/30 opacity-50'
                        }`}
                      >
                        <div className="text-2xl mb-1">{achievement.icon}</div>
                        <div className="text-xs font-medium">{achievement.title}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Daily Goal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold mb-4">Күнүмдүк максат</h2>
              <Card className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border-violet-800/30">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-violet-400 mb-2">2/3</div>
                    <div className="text-sm text-zinc-400">Бүгүнкү сабактар</div>
                  </div>
                  <ProgressBar value={66} showLabel />
                  <div className="mt-4 text-xs text-zinc-400 text-center">
                    Дагы 1 сабак калды! 🔥
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
