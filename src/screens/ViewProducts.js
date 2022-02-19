import { Grid , Container, Typography } from '@mui/material';
import React from 'react'
import Cards from '../components/Cards'
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard';


const products = [
  { id: 1, description: 'Snow', Name: 'Jon' },
  { id: 2, description: 'Lannister', Name: 'Cersei' },
  { id: 3, description: 'Lannister', Name: 'Jaime' },
  { id: 4, description: 'Stark', Name: 'Arya' },
  { id: 5, description: 'Targaryen', Name: 'Daisy'  },
  { id: 6, description: 'Melisandre', Name: 'Danil' },
  { id: 7, description: 'Clifford', Name: 'Ferrara' },
  { id: 8, description: 'Frances', Name: 'Rossini' },
  { id: 9, description: 'Roxie', Name: 'Harvey' },
];



const ViewProducts = () => {
  let navigate = useNavigate();

  const navigateTUpload =()=>{
    navigate("/Upload")
  }

  return (
   <>
   <Container maxWidth="lg">
   <Typography m={2} style={{ color: "gray", fontSize: 25 }}>Products</Typography>

    <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
{products.map(productlist => {
  const{id,description,Name} = productlist;
  return(   
    <Grid item xs={12} sm={6} md={4} >
       
    <Cards onClick={navigateTUpload} id={id} description={description} Name={Name}/>
      </Grid>
  )
})}
</Grid>


</Container>
 </>
  )
}

export default ViewProducts