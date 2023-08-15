import React from 'react';
import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/nextauth';
import QuizCreation from '@/components/quiz/QuizCreation';

export const metadata = {
  title: 'Quiz | Ai-Quiz',
};

const QuizPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect('/');
  }
  return <QuizCreation />;
};

export default QuizPage;
