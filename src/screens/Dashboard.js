import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import jwt from 'jsonwebtoken'
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
import { useNavigate } from 'react-router'
import ViewOrders from './ViewOrders';




const Dashboard = () => {
  const Navigate = useNavigate()
  // ==================================================
  useEffect(() => {
    const token = localStorage.getItem('AdminToken')
    const id = localStorage.getItem('AdminId')
    if (token && id) {
    } else {
      Navigate('/')
    }
  }, [])
  // ==================================================

  
  // ==================================================
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={6} md={3}>

          <Card sx={{ bgcolor: '#52b69a' }}>
            <CardContent>
              <Typography style={{ color: "white", fontSize: 16 }} gutterBottom >
                Total Sales Amount        </Typography>
              <Typography variant="h5" component="div" style={{ color: "white" }}>
                56
              </Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item sm={6} md={3}>

          <Card sx={{ bgcolor: '#34a0a4' }}>
            <CardContent>
              <Typography style={{ color: "white", fontSize: 16 }} gutterBottom >
                Total Orders
              </Typography>
              <Typography variant="h5" component="div" style={{ color: "white" }}>
                56
              </Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid item sm={6} md={3}>

          <Card style={{ backgroundColor: "#168aad" }}>
            <CardContent>
              <Typography style={{ color: "white", fontSize: 16 }} gutterBottom >
                Total Products
              </Typography>
              <Typography variant="h5" component="div" style={{ color: "white" }}>
                56  </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={6} md={3}>

          <Card sx={{ bgcolor: '#1a759f' }}>
            <CardContent>
              <Typography style={{ color: "white", fontSize: 16 }} gutterBottom >
                Total Users        </Typography>
              <Typography variant="h5" component="div" style={{ color: "white" }}>
                56
              </Typography>
            </CardContent>
          </Card>

        </Grid>

      </Grid>

      <Grid py={3} container spacing={2}>
        <Grid item md={8}>
          <ResponsiveContainer width="100%" >
            <LineChart>
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
        <ViewOrders />
      </Grid>
    </Container>
  )
}

export default Dashboard