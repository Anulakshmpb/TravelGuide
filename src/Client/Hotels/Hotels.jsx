import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useNavigate } from 'react-router-dom';
import './Hotels.css'

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const CardContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px',
  padding: '16px',
  margin: '25px'
});
const StyledCard = styled(Card)({
  width: '280px',
  flex: '0 0 auto', 
});
const Rating = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
});
const Price = styled('div')({
  fontWeight: 'bold',
  margin: '5px 0',
});
const StyledButton = styled(Button)({
  position: 'absolute',
  top: '16px',
  right: '16px',
  zIndex: 1,
});

const cardData = [
  {
    title: "Vistara Resort",
    image: "https://pix8.agoda.net/hotelImages/1196095/-1/47873d27adbf93fabce9f16d3825164e.jpg?ce=0&s=600x",
    description: "Get your trip off to a great start with a stay at this property, which offers car park free of charge. Conveniently situated in the Ambalavayal",
    expandedContent: "Served at the most hygienic way, Jubilee Restaurant will treat you with unforgettable hospitality...",
    rating: 4.8,
    price: "$199/night",
  },
  {
    title: "The Hosteller Wayanad, Vythiri",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/688177701.jpg?k=60c9cd426b56a7b2d592a5ba781bffcbb648e7b7a2c5502052cf0bb7b82bb62e&o=&s=600x",
    description: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms.",
    expandedContent: "  Conveniently situated in the Pookode part of Wayanad, this property puts you close to attractions and interesting dining options.This 3-star property features restaurant to make your stay more indulgent and memorable.",
    rating: 4.8,
    price: "$199/night",
  },
  
  {
    title: "Crystal Kuruva Nature Resort & Spa",
    image: "https://pix8.agoda.net/hotelImages/38364818/-1/177be3f9c76e164dc3f31dc5b860517b.png?ce=0&s=600x",
    description: "The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please.",
    expandedContent: "Conveniently situated in the Pulpally part of Wayanad, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous WILTON HOTEL & RESTAURANT. Massage, restaurant and steamroom are among the special facilities that will enhance your stay with on-site convenience.",
    rating: 4.8,
    price: "$199/night",
  },
  {
    title: "Vythiri Village Resort",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/183045985.jpg?k=78dbb8aa80bdd4e657de872f6acf4112f7c2fc2c5aff9b04afad7c9a71d62e05&o=&s=600x", 
    description: "Escape to Vythiri Village Resort, Wayanad for a peaceful solo retreat. Enjoy breathtaking views, modern comforts, and exceptional service.",
    expandedContent: " Indulge in fine dining, rejuvenate with Ayurveda therapy, and explore Wayanad's natural attractions.Experience luxury, relaxation, and a picturesque escape.",
    rating: 4.8,
    price: "$199/night",
  },
  {
    title: "The Sanihara Resort",
    image: "https://pix8.agoda.net/hotelImages/33092747/-1/ae984057b4ad73ccef846436d226102c.jpg?ce=0&s=600x",
    description: "Nestled amidst the lush greenery of Pookode, Wayanad, The Sanihara Resort is a serene retreat ideal for solo travelers seeking tranquility.",
    expandedContent: "Located near the picturesque Pookode Lake and Lakkidi View Point, it offers an inviting blend of comfort and convenience. Spacious rooms feature complimentary WiFi, air conditioning, and select units provide calming courtyard or outdoor views. Guests can unwind by the well-maintained pool, stay active at the gym, or explore the area effortlessly with shuttle services. A diverse breakfast menu, indoor games, and a kids' park further enhance the experience, making it perfect for peaceful getaways.",
    rating: 4.8,
    price: "$199/night",
  },
  {
    title: "Contour Island resort and spa",
    image: "https://pix8.agoda.net/hotelImages/6600317/-1/7e3d4b18b8e4a4ed3fd26e7f8f1c11c7.jpg?ca=9&ce=1&s=600x",
    description: "Experience tranquility at Contour Island Resort and Spa, located in the lush landscapes of Wayanad, Varadoor.",
    expandedContent: "Ideal for solo travelers, this peaceful retreat offers breathtaking views of rolling hills and proximity to the stunning Banasura Sagar Dam. Enjoy a refreshing swim in the pool or savor a delicious breakfast takeaway service. Each room features a well-appointed workspace and a flat-screen television, with select rooms offering captivating city or serene lake views. Embrace the rich biodiversity and serene atmosphere, perfect for unwinding or exploring the picturesque surroundings. Your ideal solo getaway awaits at Contour Island Resort and Spa.",
    rating: 4.8,
    price: "$199/night",
  }
];

export default function RestaurantCards() {
  const [expandedStates, setExpandedStates] = React.useState(
    cardData.map(() => false)
  );
  const navigate = useNavigate();
  const handleExpandClick = (index) => {
    const newStates = [...expandedStates];
    newStates[index] = !newStates[index];
    setExpandedStates(newStates);
  };
  const handleAddHotelClick = () => {
    navigate('/newhotel'); 
  };
  return (
    <div style={{ position: 'relative' }}>
       {/* <Button className='hotelbtn add'
        variant="contained" 
        color="primary" 
        startIcon={<AddIcon />} 
        onClick={handleAddHotelClick}
        style={{ position: 'absolute', top: '16px', right: '16px' }}
      >
        Add
      </Button> */}
    <CardContainer >
      {cardData.map((card, index) => (
        <Card key={index} sx={{ 
          maxWidth: 345,
          minWidth: 300,
          flex: '1 0 auto',
          marginLeft:'20px'
        }} className='cardcontainer'>
          <CardHeader
            title={card.title}
             action={
              <Rating className='hotel-rating'>
                <svg className="icon" viewBox="0 0 20 20" style={{ width: '25px', height: '25px', marginRight: '4px', color:'yellowgreen' }}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 1.98a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.98a1 1 0 00-1.176 0l-2.8 1.98c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                {card.rating}
              </Rating>
            }
            ></CardHeader>
          <CardMedia
            component="img"
            height="194"
            image={card.image}
            alt={card.title}
          />
          <CardContent sx={{ padding: '10px' }}>
            <Price sx={{ paddingBottom: '5px' }}>{card.price}</Price>
            <Typography variant="body2" color="text.secondary">
              {card.description}
              <span 
                style={{color: 'blue', cursor: 'pointer', marginLeft: '4px'}}
                onClick={() => handleExpandClick(index)}
              >Read more
              </span>
              
            </Typography>
          </CardContent>
          <Collapse in={expandedStates[index]} timeout="auto" unmountOnExit>
            <CardContent sx={{ padding: '0px' }}>
              <Typography  variant="body2" color="text.secondary"paragraph style={{ marginLeft: '10px' }}>
                {card.expandedContent}
              </Typography>
            </CardContent>
          </Collapse>
          <Button className='hotelbtn m-20'variant="contained" startIcon={<TipsAndUpdatesIcon/>} style={{margin:'20px'}}>
               Update
              </Button>
              <Button className='dlt'variant="contained" startIcon={<DeleteIcon />} style={{marginLeft:'20px'}}>
               Delete
              </Button>
        </Card>
      ))}
    </CardContainer>
    </div>
  );
}
