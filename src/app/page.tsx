import { HomeAesthetics } from '@/components/partials/home/aesthetics/home-aesthetics';
import { HomeBeauty } from '@/components/partials/home/beauty/beauty';
import { HomeHealth } from '@/components/partials/home/health/health';
import { HomeInitial } from '@/components/partials/home/initial/home-initial';
import { HomeLocation } from '@/components/partials/home/location/location';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <HomeInitial />
      <HomeAesthetics />
      <HomeBeauty />
      <HomeHealth />
      <HomeLocation />
    </Box>
  );
}
