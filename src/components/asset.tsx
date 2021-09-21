import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './asset.scss';

type Props = {
  id?: number;
  imageUrl?: string;
  title?: string;
  author?: string;
  description?: string;
};

const Asset: React.FC<Props> = (props) => {

	return (
        <ImageListItem key={props.id} className={'asset'}>
          <img
            src={`${props.imageUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${props.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={props.title}
            loading="lazy"
            className={'assetImage'} />
          <ImageListItemBar
            title={props.title}
            subtitle={<span>by: {props.author}</span>}
            position="below"
          />
        </ImageListItem>
	);
}

export default Asset;

/*
		<div className={'asset'}>
			{props && (
				<div className="text--center">
					<img className={'assetImage'} src={props?.imageUrl} alt={'image'} />
				</div>
			)}
			<h3>{props?.title}</h3>
			<p>{props?.description}</p>
		</div>
*/