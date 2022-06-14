import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import layout from '../../../components/layout';
import Asset from '../../../components/asset';
import './nft-page.scss';
import Waterbird from '../../../arttemp/Waterbird.JPG';
import Cat from '../../../arttemp/IMG_0721.JPG';
import LesserWhiteToothedShrew from '../../../arttemp/IMG_E0842.JPG';
import BlackWhiteTiger from '../../../arttemp/IMG_0917.JPG';

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


const NFTPage: React.FC = () => {

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

  return (
    <ImageList cols={columns}
  >
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
  </ImageList>  );
};

export default layout(NFTPage)({ pageName: 'NFT' });

