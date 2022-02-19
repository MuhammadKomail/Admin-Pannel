import { Container, Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PieChart } from 'react-minimal-pie-chart';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

import ViewOrders from './ViewOrders';

const data = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
];

const pdata = [
  {
      name: 'MongoDb',
      student: 11,
      fees: 120
  },
  {
      name: 'Javascript',
      student: 15,
      fees: 12
  },
  {
      name: 'PHP',
      student: 5,
      fees: 10
  },
  {
      name: 'Java',
      student: 10,
      fees: 5
  },
  {
      name: 'C#',
      student: 9,
      fees: 4
  },
  {name: 'C++',
        student: 10,
        fees: 8
    },
];

const Dashboard = () => {
  return (
<Container>
  <Grid container spacing={2}>
<Grid item sm={6} md={3}>

    <Card sx={{  bgcolor: '#52b69a' }}>
      <CardContent>
        <Typography  style={{color:"white",fontSize:16}} gutterBottom >
Total Sales Amount        </Typography>
        <Typography variant="h5" component="div" style={{color:"white"}}>
            56
   </Typography>
      </CardContent>
    </Card>
 
</Grid>

<Grid item sm={6} md={3}>

    <Card sx={{  bgcolor: '#34a0a4' }}>
      <CardContent>
        <Typography  style={{color:"white",fontSize:16}} gutterBottom >
Total Orders
</Typography>
        <Typography variant="h5" component="div" style={{color:"white"}}>
          56
        </Typography>
      </CardContent>
    </Card>
 
</Grid>

<Grid item sm={6} md={3}>

    <Card style={{backgroundColor: "#168aad"}}>
      <CardContent>
        <Typography  style={{color:"white",fontSize:16}} gutterBottom >
Total Products
        </Typography>
        <Typography variant="h5" component="div" style={{color:"white"}}>
      56  </Typography>
      </CardContent>
    </Card>
</Grid>

<Grid item sm={6} md={3}>

    <Card sx={{ bgcolor: '#1a759f' }}>
      <CardContent>
        <Typography  style={{color:"white",fontSize:16}} gutterBottom >
Total Users        </Typography>
        <Typography variant="h5" component="div" style={{color:"white"}}>
          56
        </Typography>
      </CardContent>
    </Card>
 
</Grid>

  </Grid>

  <Grid py={3} container spacing={2}>
    <Grid  item md={8}>
    <ResponsiveContainer width="100%" >
                <LineChart data={pdata} >
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="student"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="fees"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>


    </Grid>
    <Grid item md={4}><PieChart
  data={[
    { title: 'One', value: 10, color: '#adb5bd' },
    { title: 'Two', value: 15, color: '#6c757d' },
    { title: 'Three', value: 20, color: '#ced4da' },
  ]}
/>;
  
        </Grid>
  </Grid>
  <Grid py={3} container>
<ViewOrders/>
</Grid>
</Container>
    )
}

export default Dashboard