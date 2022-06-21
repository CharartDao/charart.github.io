import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import layout from '../../../components/layout';
import { Grid, Typography } from '@mui/material';
import { AccountCircle, EmojiSymbols, Palette, SelfImprovementRounded } from '@mui/icons-material';
import { initReactI18next, useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ABOUT, DIGITALART, PHYSICALART } from '../../../routes/public';
import FooterDefaultComponent from '../../../components/default-footer';
//import Asset from '../../../components/asset';
import './digital-art-page.scss';
import Waterbird from '../../../arttemp/Waterbird.JPG';
import Cat from '../../../arttemp/IMG_0721.JPG';
import LesserWhiteToothedShrew from '../../../arttemp/IMG_E0842.JPG';
import BlackWhiteTiger from '../../../arttemp/IMG_0917.JPG';

const DigitalArtPage: React.FC = () => {

  const { t } = useTranslation();
  const history = useHistory();

    const itemData = [
      {
        id: 1,
        imageUrl: Waterbird,
        title: 'Water Birds',
        author: '@AncientMoon',
        description: 'img/undraw_docusaurus_react.svg',
      },
      {
        id: 2,
        imageUrl: Cat,
        title: 'Cat',
        author: '@AncientMoon',
        description: 'img/undraw_docusaurus_react.svg',
      },
      {
        id: 3,
        imageUrl: LesserWhiteToothedShrew,
        title: 'lesser white-toothed shrew',
        author: '@AncientMoon',
        description: 'img/undraw_docusaurus_react.svg',
      },
      {
        id: 4,
        imageUrl: BlackWhiteTiger,
        title: 'Black White Tiger',
        author: '@AncientMoon',
        description: 'img/undraw_docusaurus_react.svg',
      },
	];

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  };
  
  const getColumns = (width:any) => {
    if (width < breakpoints.sm) {
        return 2
    } else if (width < breakpoints.md) {
        return 3
    } else if (width < breakpoints.lg) {
        return 6
    } else if (width < breakpoints.xl) {
        return 7
    } else {
        return 8
    }
  }

  const [columns, setColumns] = useState(getColumns(window.innerWidth))
  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth))
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="page-digital-art">
    <div className="container">
    <article>
        <h1 className="title" text-align="center">{t('digitalArtPage.make.title')}</h1>
        <ImageList cols={columns}>
      {itemData.map((item) => (
        <ImageListItem key={item.imageUrl}>
          <img
            src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
              ))}
        </ImageList> 
        <p className="subtitle">{t('digitalArtPage.make.text')}</p>
      </article>

      <article>
        <h1 className="title" text-align="center" >{t('digitalArtPage.buy.title')}</h1>
        <ImageList cols={columns}>
      {itemData.map((item) => (
        <ImageListItem key={item.imageUrl}>
          <img
            src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
              ))}
        </ImageList> 
        <p className="subtitle">{t('digitalArtPage.buy.text')}</p>
      </article>
      <FooterDefaultComponent />
      <div></div>
    </div>
  </div> );
};

export default layout(DigitalArtPage)({ pageName: 'digitalArt' });

