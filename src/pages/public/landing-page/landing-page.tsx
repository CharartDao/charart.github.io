import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { EmojiSymbols, Palette, TravelExplore } from '@mui/icons-material';
import { initReactI18next, useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import './landing-page.scss';
import { ABOUT, DIGITALART, PHYSICALART } from '../../../routes/public';
import FooterDefaultComponent from '../../../components/default-footer';
import logo192 from '../../../logobw.svg';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    document.body.classList.add('bg-primary-color');

    return () => {

      document.body.classList.remove('bg-primary-color');
    };
  });

  return (
    <div className="page-landing">
      <div className="container">
        <header>
          <img className="logo" src={logo192} />
          <Grid container className="grid-menu-1">
            <Grid
              xs={6}
              item
              className="menu-item"
              onClick={() => {
                history.push(DIGITALART);
              }}
            >
              <EmojiSymbols className="icon" fontSize="large" color="action"/>
              <br />
              <Typography className="item-title" variant="body2" gutterBottom>
                {t('landingPage.digitalArt')}
              </Typography>
            </Grid>
            <Grid
              xs={6}
              item
              className="menu-item"
              onClick={() => {
                history.push(PHYSICALART);
              }}
            >
              <Palette className="icon" fontSize="large"/>
              <br />
              <Typography className="item-title" variant="body2" gutterBottom>
                {t('landingPage.physicalArt')}
              </Typography>
            </Grid>
          </Grid>
        </header>

        <article>
          <img className="logo-small-screen" src={logo192} />
          <h1 className="title">{t('landingPage.title')}</h1>
          <p className="subtitle">{t('landingPage.subtitle')}</p>
          <Grid container className="grid-menu">
            <Grid
              xs={6}
              item
              className="menu-item"
              onClick={() => {
                history.push(DIGITALART);
              }}
            >
              <EmojiSymbols className="icon" fontSize="large" color="action"/>
              <br />
              <Typography className="item-title" variant="body2" gutterBottom>
                {t('landingPage.digitalArt')}
              </Typography>
            </Grid>
            <Grid
              xs={6}
              item
              className="menu-item"
              onClick={() => {
                history.push(PHYSICALART);
              }}
            >
              <Palette className="icon" fontSize="large"/>
              <br />
              <Typography className="item-title" variant="body2" gutterBottom>
                {t('landingPage.physicalArt')}
              </Typography>
            </Grid>
          </Grid>
        </article>
        <FooterDefaultComponent />
        <div></div>
      </div>
    </div>
  );
};

export default (): JSX.Element => {
  return <LandingPage />;
};
