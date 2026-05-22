import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProgressBar } from '@/components/ui/progress';
import { Clock, BookOpen, TrendingUp } from 'lucide-react';
import { Course } from '@/types';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const levelColors = {
    Beginner: 'success',
    Intermediate: 'warning',
    Advanced: 'default',
  } as const;

  return (
    <Link href={`/courses/${course.id}`}>
      <Card hover className="h-full cursor-pointer group">
        <div className="relative h-48 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge variant={levelColors[course.level]} className="mb-2">
              {course.level}
            </Badge>
            <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
              {course.title}
            </h3>
          </div>
        </div>
        
        <CardContent className="pt-4">
          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          </div>
          
          {course.progress !== undefined && course.progress > 0 && (
            <ProgressBar value={course.progress} showLabel />
          )}
          
          {!course.progress || course.progress === 0 ? (
            <div className="flex items-center gap-1.5 text-xs text-violet-400 mt-2">
              <TrendingUp className="w-4 h-4" />
              <span>Start learning</span>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
}
