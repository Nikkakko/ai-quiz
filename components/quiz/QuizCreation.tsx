'use client';
import { FC, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { useForm } from 'react-hook-form';
import { quizCreationSchema } from '@/schemas/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { BookOpen, CopyCheck } from 'lucide-react';
import { Separator } from '../ui/separator';

interface QuizCreationProps {}

type Input = z.infer<typeof quizCreationSchema>;

const QuizCreation: FC<QuizCreationProps> = ({}) => {
  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      amount: 3,
      topic: '',
      type: 'open_ended',
    },
  });

  const onSubmit = (data: Input) => {
    console.log(data);
  };

  form.watch();
  return (
    <div className='m-auto min-h-screen flex items-center justify-center container max-w-md '>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Quiz Creation</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='topic'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter a topic' {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter a topic for your quiz
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='amount'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questionss</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter an amount'
                        {...field}
                        type='number'
                        min={1}
                        max={10}
                        onChange={e => {
                          form.setValue('amount', parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter a topic for your quiz
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex justify-between'>
                <Button
                  type='button'
                  className='w-1/2 rounded-none rounded-l-lg'
                  variant={
                    form.getValues('type') === 'mcq' ? 'default' : 'secondary'
                  }
                  onClick={() => {
                    form.setValue('type', 'mcq');
                  }}
                >
                  <CopyCheck className='w-4 h-4 mr-2' />
                  Multiple Choice
                </Button>
                <Separator orientation='vertical' />

                <Button
                  type='button'
                  className='w-1/2 rounded-none rounded-r-lg'
                  variant={
                    form.getValues('type') === 'open_ended'
                      ? 'default'
                      : 'secondary'
                  }
                  onClick={() => {
                    form.setValue('type', 'open_ended');
                  }}
                >
                  <BookOpen className='w-4 h-4 mr-2' />
                  Open Ended
                </Button>
              </div>
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCreation;
