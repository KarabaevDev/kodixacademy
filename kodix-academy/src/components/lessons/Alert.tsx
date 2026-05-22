import React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2, XCircle, Info } from 'lucide-react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
}

export function Alert({ children, variant = 'info', title }: AlertProps) {
  const variants = {
    info: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      icon: Info,
      iconColor: 'text-cyan-400',
      titleColor: 'text-cyan-300',
    },
    success: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      icon: CheckCircle2,
      iconColor: 'text-emerald-400',
      titleColor: 'text-emerald-300',
    },
    warning: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      icon: AlertCircle,
      iconColor: 'text-amber-400',
      titleColor: 'text-amber-300',
    },
    error: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      icon: XCircle,
      iconColor: 'text-red-400',
      titleColor: 'text-red-300',
    },
  };

  const style = variants[variant];
  const Icon = style.icon;

  return (
    <div className={cn(
      'my-6 rounded-xl border p-4',
      style.bg,
      style.border
    )}>
      <div className="flex gap-3">
        <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', style.iconColor)} />
        <div>
          {title && (
            <h4 className={cn('font-semibold mb-1', style.titleColor)}>
              {title}
            </h4>
          )}
          <div className="text-zinc-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
