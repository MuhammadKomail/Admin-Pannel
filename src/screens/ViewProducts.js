import { Grid, Container, Typography } from '@mui/material';
import React, { useState } from 'react'
// import Cards from '../components/Cards'
import { useNavigate } from "react-router";
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from '@mui/material/Modal';
import EditProduct from './EditProduct'
import Loader from '../components/Loader'

const ViewProducts = () => {
  const [cardDisplay, setCardDisplay] = useState([])



  axios.get('https://surkhab.herokuapp.com/cards/')
    .then(res => setCardDisplay(res.data))

  function deleteEntry(id) {
    console.log(id)
    axios.delete('https://surkhab.herokuapp.com/cards/' + id)
      .then(res => {setCardDisplay(res.data)})
      window. location. reload()
  }

  let navigate = useNavigate();

  const navigateTUpload = () => {
    navigate("/Upload")
  }
  const navigateTEdit = () => {
    navigate("/edit")
  }
  const editEntry = (data) => {
    console.log(data)
    navigate("/edit", { state: data._id })
  }
  // ==================================================
  React.useEffect(() => {
    const token = localStorage.getItem('AdminToken')
    const id = localStorage.getItem('AdminId')
    if (token && id) {
    } else {
      navigate('/')
    }
  }, [])
  // ==================================================
  return (
    <>
      <Container maxWidth="lg">
        <Typography m={2} style={{ color: "gray", fontSize: 25 }}>Products</Typography>
        <div className="center">{cardDisplay.length == 0 ? <Loader /> : null}</div>
        {cardDisplay.map(productlist => {
          return (
            <Box sx={{ border: "2px solid black", borderRadius: 20, padding: 5, marginBottom: 10 }} key={productlist._id}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} xl={3}>
                  <div className='rightView'>
                    <Carousel infiniteLoop useKeyboardArrows autoPlay >
                      <div>
                        <img alt="img" src={productlist.imageUrl1} className="imageViewProduct" />
                      </div>
                      <div>
                        <img alt="img" src={productlist.imageUrl2} className="imageViewProduct" />
                      </div>
                    </Carousel>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} xl={5}>
                  <div className='leftView'>
                    <div className='leftViewFirst'>
                      {productlist.title == null ? null : `${productlist.title} `}<hr />
                    </div>
                    <div className='leftViewSecond'>
                      {productlist.fabric == "" ? null : `Fabric: ${productlist.fabric}`}
                    </div>
                    <div className='leftViewThird'>
                      <b> Details:</b> <br />
                      {productlist.description}<hr />
                    </div>
                    <div className='leftViewFourth'>
                      {productlist.discountPrice == null ? `PKR ${productlist.orignalPrice}` : <strike>PKR {productlist.orignalPrice}</strike>}

                    </div>
                    {productlist.discountPrice == null ? null : <div className='leftViewFifth'>As low as</div>}
                    <div className='leftViewSixth'>
                      {productlist.discountPrice == null ? null : <div className='leftViewSixthFirst'>{productlist.discountPrice}</div>}
                      <div className='leftViewSixthSecond'>Availability: {productlist.availability}</div><hr />
                      <div className='leftViewSixthSecond'>Quantity: {productlist.quantity}</div><hr />
                      <div className='leftViewSixthSecond'>{productlist.category == "" ? null : `Category: ${productlist.category}`}</div><hr />
                      <div className='leftViewSixthSecond'>{productlist.subCategory == "" ? null : `Sub Category: ${productlist.subCategory}`}</div><hr />
                      <div className='leftViewSixthSecond'>{productlist.brand == "" ? null : `Brand: ${productlist.brand} `}</div>
                      <div className='leftViewSixthSecond'>{productlist.skuNumber == "" ? null : `Sku Number: ${productlist.skuNumber} `}</div><hr />
                      <div className='leftViewSixthSecond'>{productlist.weddingWear == "" ? null : `Wedding Wear: ${productlist.weddingWear} `}</div>
                      <div className='leftViewSixthSecond'>{!(productlist.newArrival) ? null : `New Arrival: ${productlist.newArrival} `}</div>
                      <div className='leftViewSixthSecond'>{productlist.collections == "" ? null : `Collections: ${productlist.collections} `}</div>
                    </div>
                    <div className='leftViewSeven'>
                      <Button className='leftViewSevenBtn' sx={{ marginTop: 5 }} variant="contained" onClick={() => editEntry(productlist)} >Edit</Button>
                      <Button className='leftViewSevenBtn' sx={{ marginTop: 5, marginLeft: 2, backgrounfColor: "red" }} onClick={() => deleteEntry(productlist._id)} variant="contained" color="error">Delete</Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          )
        })}
      </Container>
    </>
  )
}

export default ViewProducts