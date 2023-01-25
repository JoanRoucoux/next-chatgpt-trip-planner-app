import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';

interface MyAppType extends AppProps {
  emotionCache?: EmotionCache;
}

export default MyAppType;
