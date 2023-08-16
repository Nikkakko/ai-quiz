'use client';
import { FC } from 'react';
import { Button } from './ui/button';
import { signIn, signOut } from 'next-auth/react';

interface SignInButtonProps {
  text: string;
}

const SignInButton: FC<SignInButtonProps> = ({ text }) => {
  const handleSignIn = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/' });
  };
  return <Button onClick={handleSignIn}>{text}</Button>;
};

export default SignInButton;
