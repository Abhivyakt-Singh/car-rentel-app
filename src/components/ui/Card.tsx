import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isHoverable?: boolean;
}

export const Card = ({ className, isHoverable = false, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200',
        isHoverable && 'transition-all duration-200 hover:shadow-md hover:-translate-y-1',
        className
      )}
      {...props}
    />
  );
};

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('p-4 border-b border-gray-100', className)} {...props} />;
};

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h3 className={cn('text-lg font-semibold text-gray-900', className)} {...props} />;
};

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn('text-sm text-gray-500 mt-1', className)} {...props} />;
};

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('p-4', className)} {...props} />;
};

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('p-4 border-t border-gray-100', className)} {...props} />;
};