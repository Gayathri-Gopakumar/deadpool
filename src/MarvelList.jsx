import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const MarvelList = () => {
  return (
    <div className='bg-dark mt-5'>
     <ImageList  sx={{
          width: '80%',        // Set the width to 80% of the parent container
          maxWidth: 800,       // Set a maximum width (in pixels)
          margin: '0 auto',    // Center the ImageList with auto margins on left and right
          height: 450,         // Maintain the height as per your requirement
        }}
        cols={3}
        gap={5}>
      <ImageListItem key="Subheader" cols={3} >
        <ListSubheader component="div"><h1 className='text-dark mt-5 text-center'>MARVEL LEGACIES</h1></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img style={{height:'auto',width:'100%'}}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
}
const itemData = [
    {
      img: 'https://rukminim2.flixcart.com/image/850/1000/jfu03gw0/poster/q/t/m/medium-marvel-black-panther-poster-posters-for-home-and-office-original-imaf47gafgymgcxf.jpeg?q=90&crop=false',
      title: 'BLACK PANTHER',
      author: '@Ryan Coogler',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://i.etsystatic.com/23402008/r/il/6afcc5/3629125899/il_570xN.3629125899_gn3f.jpg',
      title: 'IRON MAN',
      author: '@Jon Favreau',
    },
    {
      img: 'https://i.pinimg.com/originals/91/13/79/911379ee2a1bc5388414ec692aea80d7.jpg',
      title: 'DOCTOR STRANGE',
      author: '@Scott Derrickson',
    },
    {
      img: 'https://ew.com/thmb/LuI_TvU9ZDWzngUAPeH-udeMFAg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/antman-poster-3bc36707b7664306a5a34d705343c55f.jpg',
      title: 'ANT MAN',
      author: '@Peyton Reed',
      cols: 2,
    },
    {
      img: 'https://i.pinimg.com/736x/e3/84/fb/e384fb9592cbd1b8c6f0f23cfcdc7a7c.jpg',
      title: 'AVENGERS',
      author: '@Joss Whedon',
      cols: 2,
    },
    {
      img: 'https://i.pinimg.com/736x/5f/f0/af/5ff0af99c2c5c4f79ba306da9153c8ac.jpg',
      title: 'THOR',
      author: '@Kenneth Branagh',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://m.media-amazon.com/images/I/81lxKU40BvL.jpg',
      title: 'GUARDIANS OF GALAXY',
      author: '@James Gunn',
    },
    {
      img: 'https://i.pinimg.com/736x/13/b0/96/13b0962771c7112e1325386c268f9703.jpg',
      title: 'AMAZING SPIDERMAN',
      author: '@Marc Webb',
    },
    {
      img: 'https://images-cdn.ubuy.co.in/634cff8dee61a027615ddfa2-posters-usa-marvel-captain-america-the.jpg',
      title: 'CAPTAIN AMERICA',
      author: '@Joe Johnston',
      rows: 2,
      cols: 2,
    },
   
  ];

export default MarvelList