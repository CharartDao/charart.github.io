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
    								<Carousel className={'exampleCarousel1'}
    									swiping={true}
    									dynamic={true}
    									show={1}
    									slide={1}
    									transition={0.5}
    								>
    									{features.map((props, idx) => (
    										<Asset key={props.id} {...props} />
    									))}
    								</Carousel>
    				)}
    </div>
  );
};

export default layout(ServicePage)({ pageName: 'Service' });

