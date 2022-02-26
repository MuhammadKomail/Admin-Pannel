import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Loader from '../components/Loader'
import NoDataFound from '../components/NoDataFound'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CartListData } from './CartListData';
import { useNavigate } from 'react-router-dom';


function TablePaginationActions() {

  const [loading, setLoading] = React.useState(true)
  const [formData, setFormData] = React.useState([])
  const [cardData, setCardData] = React.useState([]);
  const [statusValue, setStatusValue] = React.useState('')
  const [id, setid] = React.useState()
  React.useEffect(() => {
    axios.get('http://localhost:5000/formData/get')
      .then(res => {
        setLoading(false)
        setFormData(res.data)
      })
  }, [formData])

  React.useEffect(() => {
    axios.get('http://localhost:5000/cards/')
      .then(res => {
        setCardData(res.data)
        setLoading(false)
      })

  }, [cardData])
  React.useEffect(() => {
    axios.get('http://localhost:5000/formData/get')
      .then(res => {
        setLoading(false)
        setFormData(res.data)
      })
  }, [])

  React.useEffect(() => {
    axios.get('http://localhost:5000/cards/')
      .then(res => {
        setCardData(res.data)
        setLoading(false)
      })
  }, [])

  function deleteEntry(id) {
    // console.log(id)
    axios.delete('http://localhost:5000/deleteformData/' + id)
      .then(res => { setFormData(res.data) })
    window.location.reload()
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Navigate = useNavigate()

  function submitStatus() {
    console.log(id)
    console.log(statusValue)
    axios.post('http://localhost:5000/update/formData/' + id, { status: statusValue })
      .then(res => {
        window.location.reload()
      })
  }

  return (
    <>
      {loading ? <Loader /> : formData && formData.length !== 0 ? formData.map((e, i) => {
        return (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell>Order #</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Province</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone #</TableCell>
                    <TableCell>Order Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Edit Status</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{e.firstName}  {e.lastName}</TableCell>
                    <TableCell>{e.Country}</TableCell>
                    <TableCell>{e.City}</TableCell>
                    <TableCell>{e.Province}</TableCell>
                    <TableCell>{e.Address}</TableCell>
                    <TableCell>0{e.Phone}</TableCell>
                    <TableCell>{e.orderAmount}</TableCell>
                    <TableCell>{e.status}</TableCell>
                    <TableCell><Button onClick={() => {
                      handleOpen()
                      setid(e._id)
                    }} variant="contained">Edit</Button></TableCell>
                    <TableCell><Button onClick={() => deleteEntry(e._id)} color="error" variant="contained" sx={{ backgrounfColor: "red" }}>Delete</Button></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {e.idOfItemAndQuantity[0].map((element, index) => <CartListData key={index} id={element.id} qty={element.qty} allData={cardData} />)}
            {/* {console.log(cardData)} */}

          </>
        )
      }) : <NoDataFound />}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label className='main'>
            <p className='emailAddress'>Status</p>

            <select
              onChange={(e) => setStatusValue(e.target.value)} value={statusValue}
              id="status"
              name="Status"
              className='emailAddressInput'
            >
              <option value="" disabled selected>
                Status
              </option>
              <option value={'In Progress'}>In Progress</option>
              <option value={'Accepted'}>Accepted</option>
              <option value={'Delivered'}>Delivered</option>
            </select>
          </label>
          <Button variant="contained" sx={{ marginLeft: 10 }} onClick={submitStatus}>Save</Button>
        </Box>
      </Modal>
    </>
  );
}
export default TablePaginationActions