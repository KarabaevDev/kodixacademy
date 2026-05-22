'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import { QuizQuestion } from '@/types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    const isCorrect = index === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
      onComplete?.(score);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-8 text-center"
      >
        <div className="mb-6">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h3>
          <p className="text-zinc-400">You scored {score} out of {questions.length}</p>
        </div>
        
        <div className="mb-6">
          <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            {percentage}%
          </div>
        </div>
        
        <button
          onClick={handleRestart}
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-medium hover:from-violet-700 hover:to-indigo-700 transition-all"
        >
          Try Again
        </button>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-zinc-400">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span className="text-sm text-violet-400 font-medium">Score: {score}</span>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="mb-6"
      >
        <h3 className="text-lg font-semibold text-white mb-4">{question.question}</h3>
        
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let buttonStyle = 'border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50';
            
            if (answered) {
              if (index === question.correctAnswer) {
                buttonStyle = 'border-emerald-500 bg-emerald-500/20 text-emerald-300';
              } else if (index === selectedAnswer) {
                buttonStyle = 'border-red-500 bg-red-500/20 text-red-300';
              }
            } else if (selectedAnswer === index) {
              buttonStyle = 'border-violet-500 bg-violet-500/20';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={cn(
                  'w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex justify-between items-center',
                  buttonStyle
                )}
              >
                <span className="text-zinc-200">{option}</span>
                {answered && index === question.correctAnswer && (
                  <Check className="w-5 h-5 text-emerald-400" />
                )}
                {answered && index === selectedAnswer && index !== question.correctAnswer && (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence>
        {answered && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={handleNext}
            className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-medium hover:from-violet-700 hover:to-indigo-700 transition-all"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
