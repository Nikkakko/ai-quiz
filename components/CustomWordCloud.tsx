'use client';
import { useTheme } from 'next-themes';
import { FC } from 'react';
import WordCloud from 'react-d3-cloud';

const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
  { text: 'trojan', value: 10000 },
  { text: 'NextJs', value: 16 },
];

interface CustomWordCloudProps {}

const CustomWordCloud: FC<CustomWordCloudProps> = ({}) => {
  const theme = useTheme();

  const fontSizeMapper = (word: { value: number }) =>
    Math.log2(word.value) * 5 + 10;

  return (
    <>
      <WordCloud
        data={data}
        fill={theme.theme === 'dark' ? '#fff' : '#000'}
        fontSize={fontSizeMapper}
        height={550}
        padding={10}
        rotate={0}
      />
    </>
  );
};

export default CustomWordCloud;
