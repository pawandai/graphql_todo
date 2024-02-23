import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('max-w-7xl mx-auto p-8', className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
