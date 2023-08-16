import SignInButton from '@/components/SignInButton';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getAuthSession();

  if (session?.user) {
    return redirect('/dashboard');
  }
  return (
    <main className='flex items-center justify-center  min-h-screen m-auto container '>
      <Card className='p-4 flex flex-col gap-4'>
        <CardTitle>Welcome to Ai-Quiz</CardTitle>
        <CardDescription className='max-w-md'>
          Ai-Quiz is a quiz app that uses AI to generate questions and answers.
          You can also create your own quizzes and share them with your friends.
        </CardDescription>
        <CardContent className='p-0 '>
          <SignInButton text='Sign in with Google' />
        </CardContent>
      </Card>
    </main>
  );
}
