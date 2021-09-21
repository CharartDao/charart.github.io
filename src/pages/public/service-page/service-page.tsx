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
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';


const ServicePage = () => {
	//return <Redirect to="/react-carousel/docs/installation" />;
	const [features, setFeatures] = useState([
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
	]);

	const [added, setAdded] = useState(false);
	const [addedCount, setAddedCount] = useState(1);
	const [extraItems, setExtraItems] = useState([]);
	const addItems = () => {
		if (addedCount > 2) {
			return [];
		}

		const newItems = [...Array(20)].map((_, id) => {
			const attr = {
				id,
				title: id.toString(),
				imageUrl: 'img/undraw_docusaurus_react.svg',
			    author: '@AncientMoon',
				description: 'img/undraw_docusaurus_react.svg',
			};
			return <Asset id={attr.id} imageUrl={attr.imageUrl} title={attr.title} description={attr.description} />;
		});

/*
		if (addedCount == 1) {
			setExtraItems(newItems.slice(8, 11));
		} else if (addedCount == 2) {
			setExtraItems(newItems.slice(11, 15));
		}
*/
		setAdded(true);
		setAddedCount(addedCount + 1);
		return newItems;
	};

  return (
    <div className="service">
    				{features && features.length && (
    					<section className={'features'}>
    						<div className="container">
    							<div className="row">
    								<Carousel className={'exampleCarousel1'}
    									swiping={true}
    									dynamic={true}
    									show={2}
    									slide={2}
    									transition={0.5}
    								>
    									{features.map((props, idx) => (
    										<Asset key={props.id} {...props} />
    									))}
    								</Carousel>
    							</div>
    						</div>
    					</section>
    				)}

    <ImageList >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            className={'exampleCarousel1'}
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
