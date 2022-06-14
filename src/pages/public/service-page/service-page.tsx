import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import layout from '../../../components/layout';
import Asset from '../../../components/asset';
import './service-page.scss';
import Waterbird from '../../../arttemp/Waterbird.JPG';
import Cat from '../../../arttemp/IMG_0721.JPG';
import LesserWhiteToothedShrew from '../../../arttemp/IMG_E0842.JPG';
import BlackWhiteTiger from '../../../arttemp/IMG_0917.JPG';

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
    <ImageList sx={{ width: 500, height: 450 }}>
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
  );
};

export default layout(NFTPage)({ pageName: 'Service' });

