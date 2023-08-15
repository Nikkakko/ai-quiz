'use client';
import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { History } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HistoryCardProps {}

const HistoryCard: FC<HistoryCardProps> = ({}) => {
  const router = useRouter();
  return (
    <Card
      className='hover:cursor-pointer hover:opacity-75'
      onClick={() => router.push('/history')}
    >
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='text-2xl font-bold'>History</CardTitle>
        <History size={28} strokeWidth={2.5} />
      </CardHeader>

      <CardContent>
        <CardDescription className='text-sm text-muted-foreground'>
          View past quiz attempts
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default HistoryCard;
