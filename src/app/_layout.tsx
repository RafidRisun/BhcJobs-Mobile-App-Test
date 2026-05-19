import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';

export default function RootLayout() {

  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    'SegoeUI': require('@/assets/fonts/segoeui.ttf'),
    'SegoeUI-Bold': require('@/assets/fonts/segoeui-Bold.ttf'),
    'SegoeUI-Italic': require('@/assets/fonts/segoeui-Italic.ttf'),
    'SegoeUI-BoldItalic': require('@/assets/fonts/segoeui-Italic-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  return <Stack screenOptions={{
    headerShown: false,
  }}/>;
}
