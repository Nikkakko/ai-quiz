import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface HotTopicsCardProps {}

const HotTopicsCard: FC<HotTopicsCardProps> = ({}) => {
  return (
    <Card className='col-span-4'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it!
        </CardDescription>
      </CardHeader>

      <CardContent className='pl-2'>world cloud</CardContent>
    </Card>
  );
};

export default HotTopicsCard;
