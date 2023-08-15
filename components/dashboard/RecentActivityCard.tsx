import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Link from 'next/link';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';

interface RecentActivityCardProps {}

const RecentActivityCard: FC<RecentActivityCardProps> = async ({}) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect('/');
  }
  return (
    <Card className='col-span-4 lg:col-span-3'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>
          <Link href='/history'>Recent Activity</Link>
        </CardTitle>
        <CardDescription>You have played a total of 7 quizzes.</CardDescription>
      </CardHeader>
      <CardContent className='max-h-[580px] overflow-scroll'>
        History Component
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
