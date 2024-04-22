import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Pricing.css'

export default function Pricing() {
  return (
   <div className='pricin'>
    <h1 className='secondaryText1'>Our Pricing</h1>
    <h2 className='secondaryText2'>Our Plans are So Good, You’ll Want to Hug Us (but please don’t).</h2>

    <div className='p-img'>
      <ImageList sx={{ width: 600, height: 300 }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
   </div>
  );
}

const itemData = [
  {
    img: './offer1.png',
    title: 'Bed',
  },
  {
    img:'./offer2.png',
    title: 'Kitchen',
  },
  {
    img: './offer3.png',
    title: 'Sink',
  },
  {
    img: './offer1.png',
    title: 'Books',
  },
  {
    img: './offer2.png',
    title: 'Chairs',
  },
  {
    img: './offer3.png',
    title: 'Candle',
  },
  {
    img: './offer1.png',
    title: 'Laptop',
  },
  {
    img: './offer2.png',
    title: 'Doors',
  },
  {
    img: './offer3.png',
    title: 'Coffee',
  }
];
