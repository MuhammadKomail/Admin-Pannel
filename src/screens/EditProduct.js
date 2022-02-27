import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Upload = () => {

    const theme = createTheme();
    const location = useLocation()
    const Navigate = useNavigate()

    console.log(location.state)

    function setTitle(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            title: value
        });
    }
    function setDescription(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            description: value
        });
    }
    function setOrignalPrice(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            orignalPrice: value
        });
    }
    function setDiscountPrice(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            discountPrice: value
        });
    }
    function setdOrignalPrice(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            dorignalPrice: value
        });
    }
    function setdDiscountPrice(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            ddiscountPrice: value
        });
    }
    let imgURI;
    let imgURI2;
    let imageSet;
    const [images, setimages] = useState(null)
    const [statusImg, setStatusImg] = useState('')
    const [upploadedSuccessFull, setUpploadingSuccessFull] = useState('')

    function upploadImage(image) {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "v6te4auv")

        axios.post("https://api.cloudinary.com/v1_1/dxhrwiql6/image/upload", formData)
            .then((res) => {
                imgURI = res.data.secure_url;
                setimages(imgURI)
                setCreateProduct({
                    ...createProduct,
                    imageUrl1: imgURI
                });
                setStatusImg('First Image is Succeesfully Upploaded')
            }).catch((err) => {
                console.log(err)
                setStatusImg('Err in upploading image please refresh the page and re uppload the image')
            })
    }
    function upploadImage2(image) {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "v6te4auv")

        axios.post("https://api.cloudinary.com/v1_1/dxhrwiql6/image/upload", formData)
            .then((res) => {
                imgURI2 = res.data.secure_url;
                setimages(imgURI)
                setCreateProduct({
                    ...createProduct,
                    imageUrl2: res.data.secure_url
                });
                setStatusImg('Second Image is Succeesfully Upploaded')
            }).catch((err) => {
                setStatusImg('Err in upploading image please refresh the page and re uppload the image')
                console.log(err)
            })
    }
    function upploadImage3(image) {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "v6te4auv")

        axios.post("https://api.cloudinary.com/v1_1/dxhrwiql6/image/upload", formData)
            .then((res) => {
                imgURI2 = res.data.secure_url;
                setimages(imgURI)
                setCreateProduct({
                    ...createProduct,
                    imageUrl3: res.data.secure_url
                });
                setStatusImg('Third Image is Succeesfully Upploaded')
            }).catch((err) => {
                setStatusImg('Err in upploading image please refresh the page and re uppload the image')
                console.log(err)
            })
    }
    function upploadImage4(image) {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "v6te4auv")

        axios.post("https://api.cloudinary.com/v1_1/dxhrwiql6/image/upload", formData)
            .then((res) => {
                imgURI2 = res.data.secure_url;
                setimages(imgURI)
                setCreateProduct({
                    ...createProduct,
                    imageUrl4: res.data.secure_url
                });
                setStatusImg('Fourth Image is Succeesfully Upploaded')
            }).catch((err) => {
                setStatusImg('Err in upploading image please refresh the page and re uppload the image')
                console.log(err)
            })
    }

    function setFabric(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            fabric: value
        });
    }
    function setAvailability(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            availability: value
        });
    }
    function setQuantity(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            quantity: value
        });
    }
    function setCategory(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            category: value
        });
    }
    function setSubCategory(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            subCategory: value
        });
    }
    function setBrand(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            brand: value
        });
    }
    function setSkuNumber(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            skuNumber: value
        });
    }

    function setCollections(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            collections: value
        });
    }
    function setNewArrival(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            newArrival: value
        });
    }

    function setWeddingWear(evt) {
        const value = evt.target.value;
        setCreateProduct({
            ...createProduct,
            weddingWear: value
        })
    }

    function getData() {
        console.log(createProduct);
        let id = location.state;
        axios.post('https://surkhab.herokuapp.com/cards/update/'+location.state, createProduct)
            .then(res => {
                console.log(res.data)
                Navigate('/AdminPanel')
            })
    }
    
    function canceal(){
        Navigate('/AdminPanel')
    }



    const [createProduct, setCreateProduct] = useState({
        title: '',
        description: '',
        orignalPrice: '',
        discountPrice: '',
        dorignalPrice: '',
        ddiscountPrice: '',
        imageUrl1: '',
        imageUrl2: '',
        imageUrl3: '',
        imageUrl4: '',
        fabric: '',
        availability: '',
        quantity: '',
        category: '',
        subCategory: '',
        brand: '',
        skuNumber: '',
        weddingWear: '',
        collections: '',
        newArrival: ""
    })

    return (
        <>

            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Box component="form" noValidate sx={{ mt: 3 }}>

                    <Container component="main" maxWidth="lg" >
                        <Typography m={2} style={{ color: "gray", fontSize: 25 }}>Upload Product</Typography>
                        <hr style={{ borderWidth: 2, borderColor: "black" }} />

                        <Grid container spacing={5} >
                            <Grid item xs={12} md={6} >
                                <TextField
                                    label='Title'
                                    name="Title"
                                    required
                                    fullWidth
                                    id="Title"
                                    sx={{ my: 2 }}
                                    onChange={setTitle}
                                    value={createProduct.title}
                                />
                                <TextField
                                    label='Description'
                                    name="Description"
                                    required
                                    fullWidth
                                    id="Description"
                                    sx={{ my: 2 }}
                                    onChange={setDescription}
                                    value={createProduct.description}
                                />
                                <TextField
                                    label='Orignal Price'
                                    name="orignalPrice"
                                    required
                                    fullWidth
                                    id="orignalPrice"
                                    sx={{ my: 2 }}
                                    type="number"
                                    onChange={setOrignalPrice}
                                    value={createProduct.orignalPrice}
                                />
                                <TextField
                                    label='Discounted Price'
                                    name="discountedPrice"
                                    fullWidth
                                    id="discountedPrice"
                                    sx={{ my: 2 }}
                                    type="number"
                                    onChange={setDiscountPrice}
                                    value={createProduct.discountPrice}
                                />
                                <TextField
                                    label='Dollar Orignal Price'
                                    name="dorignalPrice"
                                    required
                                    fullWidth
                                    id="dorignalPrice"
                                    sx={{ my: 2 }}
                                    type="number"
                                    onChange={setdOrignalPrice}
                                    value={createProduct.dorignalPrice}
                                />
                                <TextField
                                    label='Dollar  Discounted Price'
                                    name="ddiscountedPrice"
                                    fullWidth
                                    id="ddiscountedPrice"
                                    sx={{ my: 2 }}
                                    type="number"
                                    onChange={setdDiscountPrice}
                                    value={createProduct.ddiscountPrice}
                                />
                                <TextField
                                    label='Sku Number'
                                    required
                                    fullWidth
                                    sx={{ my: 2 }}
                                    onChange={setSkuNumber}
                                    value={createProduct.skuNumber}
                                />

                                <Box my={2} sx={{ marginTop: 2 }}>
                                    <Typography variant="p" my={1}>{statusImg}</Typography>
                                    <Typography variant="h6" my={1}>Upload Pictures</Typography>
                                    <input
                                        type="file"
                                        name="myImage"
                                        id="file"
                                        multiple
                                        onChange={(e) => upploadImage(e.target.files[0])}
                                        value={imgURI}
                                    />
                                    <input
                                        type="file"
                                        name="myImage"
                                        id="file"
                                        multiple
                                        onChange={(e) => upploadImage2(e.target.files[0])}
                                        value={imgURI2}
                                    />
                                    <input
                                        type="file"
                                        name="myImage"
                                        id="file"
                                        multiple
                                        onChange={(e) => upploadImage3(e.target.files[0])}
                                        value={imgURI2}
                                    />
                                    <input
                                        type="file"
                                        name="myImage"
                                        id="file"
                                        multiple
                                        onChange={(e) => upploadImage4(e.target.files[0])}
                                        value={imgURI2}
                                    />

                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>



                                <Box sx={{ minWidth: 120, my: 2 }} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category*</InputLabel>
                                        <Select
                                            id="subcategory"
                                            value={createProduct.category}
                                            label="Category"
                                            onChange={setCategory} >
                                            <MenuItem value={"Men"}>Men</MenuItem>
                                            <MenuItem value={"Women"}>Women</MenuItem>
                                            <MenuItem value={"Kids"}>Kids</MenuItem>
                                        </Select>
                                        {(createProduct.category == "Women") ? <FormControl p={1}>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group"
                                                onClick={setSubCategory}
                                                value={createProduct.subCategory}
                                            >
                                                <FormControlLabel value="PRINTED SHIRT" control={<Radio />} label="PRINTED SHIRT" />
                                                <FormControlLabel value="EMBROIDERED" control={<Radio />} label="EMBROIDERED" />
                                                <FormControlLabel value="SHIRT" control={<Radio />} label="SHIRT" />
                                                <FormControlLabel value="DUPPATA" control={<Radio />} label="DUPPATA" />
                                                <FormControlLabel value="2 PIECE" control={<Radio />} label="2 PIECE" />
                                                <FormControlLabel value="3 PIECE" control={<Radio />} label="3 PIECE" />
                                            </RadioGroup>
                                        </FormControl> :
                                            (createProduct.category == "Men") ? <FormControl p={1}>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    name="radio-buttons-group"
                                                    onClick={setSubCategory}
                                                    value={createProduct.subCategory}
                                                >
                                                    <FormControlLabel value="PASHA" control={<Radio />} label="PASHA" />
                                                    <FormControlLabel value="MELANGE" control={<Radio />} label="MELANGE" />
                                                    <FormControlLabel value="GRACE" control={<Radio />} label="GRACE" />
                                                    <FormControlLabel value="AHMAD FABRICS" control={<Radio />} label="AHMAD FABRICS" />
                                                    <FormControlLabel value="BIN YAMEEN" control={<Radio />} label="BIN YAMEEN" />
                                                </RadioGroup>
                                            </FormControl> :
                                                (createProduct.category == "Kids") ? <FormControl p={1}>
                                                    <RadioGroup
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        name="radio-buttons-group"
                                                        onClick={setSubCategory}
                                                        value={createProduct.subCategory}
                                                    >
                                                        <FormControlLabel value="Girl" control={<Radio />} label="Girl" />
                                                        <FormControlLabel value="Boy" control={<Radio />} label="Boy" />
                                                    </RadioGroup>
                                                </FormControl> : ""
                                        }   </FormControl>

                                </Box>


                                <Box sx={{ minWidth: 120, marginBottom: 5 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">New Arrival</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Fabric"
                                            onChange={setNewArrival}
                                            value={createProduct.newArrival}
                                        >
                                            <MenuItem value={"New Arrival"}>New Arrival</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Fabric</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Fabric"
                                            onChange={setFabric}
                                            value={createProduct.fabric}
                                        >
                                            <MenuItem value={"Cambric"}>Cambric</MenuItem>
                                            <MenuItem value={"Velvet"}>Velvet</MenuItem>
                                            <MenuItem value={"Linen"}>Linen</MenuItem>
                                            <MenuItem value={"Chiffon"}>Chiffon</MenuItem>
                                            <MenuItem value={"Banarsi"}>Banarsi</MenuItem>
                                            <MenuItem value={"Khaddar"}>Khaddar</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box sx={{ minWidth: 120, marginTop: 2 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Availability</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Availability"
                                            onChange={setAvailability}
                                            value={createProduct.availability}
                                        >
                                            <MenuItem value={"Available"}>Available</MenuItem>
                                            <MenuItem value={"Out of stock"}>Out of stock</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box sx={{ minWidth: 120, marginTop: 2 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Brand"
                                            onChange={setBrand}
                                            value={createProduct.brand}
                                        >
                                            <MenuItem value={"AABYAN"}>AABYAN</MenuItem>
                                            <MenuItem value={"ADAN LIBAS"}>ADAN LIBAS</MenuItem>
                                            <MenuItem value={"AFROZEH"}>AFROZEH</MenuItem>
                                            <MenuItem value={"AHMAD FABRICS INTERNATIONAL"}>AHMAD FABRICS INTERNATIONAL</MenuItem>
                                            <MenuItem value={"AIFA"}>AIFA</MenuItem>
                                            <MenuItem value={"AL KARIM"}>AL KARIM</MenuItem>
                                            <MenuItem value={"AL ZOHAIB TEXTILE"}>AL ZOHAIB TEXTILE</MenuItem>
                                            <MenuItem value={"ALIZEH FASHION"}>ALIZEH FASHION</MenuItem>
                                            <MenuItem value={"AL ZOHAIB TEXTILE"}>ALK ATELIER</MenuItem>
                                            <MenuItem value={"AMNA KHADIJA"}>AMNA KHADIJA</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 120, marginTop: 2 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Collection</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Availability"
                                            onChange={setCollections}
                                            value={createProduct.collections}
                                        >
                                            <MenuItem value={"Winter"}>Winter</MenuItem>
                                            <MenuItem value={"Summer"}>Summer</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 120, marginTop: 2 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Wedding Wear</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Availability"
                                            onChange={setWeddingWear}
                                            value={createProduct.weddingWear}
                                        >
                                            <MenuItem value={"Wedding Wear"}>Wedding Wear</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box>
                                    <TextField
                                        label='Quantity'
                                        name="quantity"
                                        required
                                        fullWidth
                                        id="Quantity"
                                        type="number" sx={{ my: 2 }}
                                        onChange={setQuantity}
                                        value={createProduct.quantity}
                                    />
                                </Box>


                            </Grid>
                        </Grid>

                        <Button style={{ background: "black", borderRadius: 0 }} onClick={getData}
                            variant="contained" sx={{ mt: 2, mb: 2, p: 1 }} >
                            Save
                        </Button>
                        <Button style={{ background: "black", borderRadius: 0 }} onClick={canceal}
                            variant="contained" sx={{ m: 2, p: 1 }} >
                            Canceal
                        </Button>
                        
                    </Container>
                </Box>

            </ThemeProvider>
        </>
    )
}

export default Upload