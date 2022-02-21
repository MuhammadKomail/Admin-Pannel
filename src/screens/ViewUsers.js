import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography, Grid } from '@mui/material';
import axios from 'axios';


const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: '_id', headerName: 'id', width: 50 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 150,
  }
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 190,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];



export default function ViewUsers() {
  const [userData, setUserData] = React.useState()

  axios.get('http://localhost:5000/')
    .then(res => setUserData(res.data))



    const rows =  (!userData ? [{id:"Loading",firstName:"Loading",lastName:"Loading",email:"Loading",password:"Loading"}] : userData)
  // [
    // { id: 1, lastName: userData == null ? 'Loading...' : (userData[counter].lastName), firstName: userData == null ? 'Loading...' : (userData[counter].firstName), Email: userData == null ? 'Loading...' : (userData[counter].email) },
  // ];

  return (
    <Container>
      <Grid m={2}>
        <Typography my={2} style={{ color: "gray", fontSize: 28 }}>Users</Typography>
      </Grid>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Container>
  );
}
