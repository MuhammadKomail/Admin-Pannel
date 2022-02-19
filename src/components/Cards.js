import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function Cards(props)
{ 
    const {id ,description, Name, onClick} = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
         
      <CardMedia
        component="img"
        height="140"
        image={id}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button  onClick = {onClick} variant="contained" color="success" size="small">Edit</Button>
        <Button variant="contained" color="error" size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
