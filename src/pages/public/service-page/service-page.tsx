import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import layout from '../../../components/layout';
import { Carousel } from '@trendyol-js/react-carousel';
import './service-page.scss';
import Waterbird from '../../../arttemp/Waterbird.JPG';
import Cat from '../../../arttemp/IMG_0721.JPG';
import LesserWhiteToothedShrew from '../../../arttemp/IMG_E0842.JPG';
import BlackWhiteTiger from '../../../arttemp/IMG_0917.JPG';

const ServicePage = () => {

  return (
    <div className="service">
    <Carousel show={1.5} slide={1} swiping={true}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} className = "features">
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  className = "featureImage" />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
    </Carousel>

    <ImageList >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
    </div>
  );
};

export default layout(ServicePage)({ pageName: 'Service' });
/*
const itemData = [
  {
    img: 'Waterbird',
    title: 'Water Birds',
    author: '@AncientMoon',
  },
];
*/

const itemData = [
  {
    img: Waterbird,
    title: 'Water Birds',
    author: '@AncientMoon',
  },
  {
    img: Cat,
    title: 'Cat',
    author: '@AncientMoon',
  },
  {
    img: LesserWhiteToothedShrew,
    title: 'lesser white-toothed shrew',
    author: '@AncientMoon',
  },
  {
    img: BlackWhiteTiger,
    title: 'Black White Tiger',
    author: '@AncientMoon',
  },
];
