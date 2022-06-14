import React from 'react';
import { Switch, Route as PublicRoute } from 'react-router-dom';
import {
  LANDING,
  ART_DETAIL_PAGE,
  ABOUT,
  NFT,
} from './public';

import LandingPage from '../pages/public/landing-page/landing-page';
import ArtDetailPage from '../pages/public/art-detail-page/art-detail-page';
import AboutPage from '../pages/public/about-page/about-page';
import ServicePage from '../pages/public/nft-page/nft-page';
import nftPage from '../pages/public/nft-page/nft-page';

const Route: React.FC = () => {
  return (
    <Switch>
      {/* Public PAGES */}
      <PublicRoute path={ABOUT} component={AboutPage} />
      <PublicRoute path={NFT} component={nftPage} />
      <PublicRoute path={ART_DETAIL_PAGE} component={ArtDetailPage} />
      <PublicRoute path={LANDING} component={LandingPage} />
    </Switch>
  );
};

export default Route;