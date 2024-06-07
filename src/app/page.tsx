import { HomeAesthetics } from '@/components/partials/home/aesthetics/home-aesthetics';
import { HomeInitial } from '@/components/partials/home/initial/home-initial';
import { Box } from '@mui/material';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.9,
  maximumScale: 1.9,
  userScalable: false,
  minimumScale: 1.9,
};

export default function Home() {
  return (
    <Box>
      <HomeInitial />
      <HomeAesthetics />
    </Box>
  );
}
