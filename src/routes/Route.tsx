import React from 'react';
import { Switch, Route as PublicRoute } from 'react-router-dom';
import {
  LANDING,
  ART_DETAIL_PAGE,
  ABOUT,
  DIGITALART,
  PHYSICALART,
  SOUND_WAVE
} from './public';

import LandingPage from '../pages/public/landing-page/landing-page';
import ArtDetailPage from '../pages/public/art-detail-page/art-detail-page';
import AboutPage from '../pages/public/about-page/about-page';
import DigitalArtPage from '../pages/public/digital-art-page/digital-art-page';
import PhysicalArtPage from '../pages/public/physical-art-page/physical-art-page';
import SoundWavePage from '../pages/public/digital-art-page/sound-wave-page/sound-wave-page';

const Route: React.FC = () => {
  return (
    <Switch>
      {/* Public PAGES */}
      <PublicRoute path={ABOUT} component={AboutPage} />
      <PublicRoute path={DIGITALART} component={DigitalArtPage} />
      <PublicRoute path={PHYSICALART} component={PhysicalArtPage} />
      <PublicRoute path={ART_DETAIL_PAGE} component={ArtDetailPage} />
      <PublicRoute path={LANDING} component={LandingPage} />
      <PublicRoute path={SOUND_WAVE} component={SoundWavePage} />
    </Switch>
  );
};

export default Route;