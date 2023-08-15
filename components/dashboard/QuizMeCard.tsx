'use client';
import { FC } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from '../ui/card';
import { BrainCircuit } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface QuizMeCardProps {}

const QuizMeCard: FC<QuizMeCardProps> = ({}) => {
  const router = useRouter();
  return (
    <Card
      className='hover:cursor-pointer hover:opacity-75'
      onClick={() => router.push('/quiz')}
    >
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='text-2xl font-bold'>Quiz Me</CardTitle>
        <BrainCircuit size={28} strokeWidth={2.5} />
      </CardHeader>

      <CardContent>
        <CardDescription className='text-sm text-muted-foreground'>
          Challenge yourself with a quiz on the topics you've learned.
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default QuizMeCard;
