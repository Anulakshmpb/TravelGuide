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
import './Restaurant.css';

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
    title: "Jubilee",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/11/ed/54/c-section.jpg?w=1400&h=800&s=1",
    description: "It has been 23 years now since Jubilee started its journey, conquering minds Jubilee Restaurant has exotic cuisine from all parts of the world.",
    expandedContent: "Served at the most hygienic way, Jubilee Restaurant will treat you with unforgettable hospitality...",
    rating: 4.8,
  },
  {
    title: "Wilton Restaurant",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/09/b1/f0/wilton-restaurant.jpg?w=1100&h=600&s=1",
    description: "Wilton is the biggest restaurant in Wayanad with around 320 covers. We carry the legacy of running Sulthan Bathery's best and most delicious restaurant for the last two decades.",
    expandedContent: "Our chefs use traditional methods to create authentic dishes...",
    rating: 4.8,
  },
  
  {
    title: "Udupi Restaurant",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/fa/d4/f5/from-outside.jpg?w=1600&h=900&s=1",
    description: "Fresh seafood prepared with Mediterranean flavors.",
    expandedContent: "We source our ingredients daily from local fishermen...",
    rating: 4.8,
  },
  {
    title: "Sanchari By Chef Pillai",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/e1/6f/15/discover-a-world-of-flavors.jpg?w=1100&h=600&s=1", 
    description: "Sanchari by Chef Pillai will feature a diverse menu offering traditional Kerala cuisine, as well as Arabic ,North Indian and Chines dishes at heart of Wayanad.",
    expandedContent: "Specializing in traditional Alpine dishes...",
    rating: 4.8,
  },
  {
    title: "Beycho Wayanad Restaurant & Cafe",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/d4/84/90/beycho-wayanad-restaurant.jpg?w=1400&h=800&s=1",
    description: "Modern twists on classic grill favorites.",
    expandedContent: "Our dry-aged steaks are aged for 28 days minimum...",
    rating: 4.8,
  },
  {
    title: "Thoufeeque Hotel & Restaurant",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ae/3b/15/thoufeeque-hotel-restaurant.jpg?w=600&h=400&s=1",
    description: "Plant-based cuisine that delights the senses.",
    expandedContent: "All our ingredients are locally sourced organic produce...",
    rating: 4.8,
  }
];


export default function RestaurantCards() {
  const [expandedStates, setExpandedStates] = React.useState(
    cardData.map(() => false)
  );
//    const navigate = useNavigate();
  const handleExpandClick = (index) => {
    const newStates = [...expandedStates];
    newStates[index] = !newStates[index];
    setExpandedStates(newStates);
  };
  return (
  
    <div style={{ position: 'relative' }}>
      {/* <Button className='restbtn add' 
        variant="contained" 
        color="primary" 
        startIcon={<AddIcon />} 
        // onClick={handleAddRestClick}
        style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 1 }}
      >
        Add
      </Button> */}
    <CardContainer>
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
              <Rating>
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
            <Typography variant="body2" color="text.secondary">
              {card.description}
              <span 
                style={{color: 'blue', cursor: 'pointer', marginLeft: '4px'}}
                onClick={() => handleExpandClick(index)}
              >Read more
              </span>
            </Typography>
            </CardContent >
          <Collapse in={expandedStates[index]} timeout="auto" unmountOnExit>
            <CardContent sx={{ padding: '0px' }}>
              <Typography  variant="body2" color="text.secondary" paragraph style={{ margin: '0 15px' }}>
                {card.expandedContent}
              </Typography>
            </CardContent>
          </Collapse>
          <Button className='restbtn m-20'variant="contained" startIcon={<TipsAndUpdatesIcon />} style={{margin:'20px'}} >
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
