import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


function CardsInCart(props) {
    const [input, setInput] = useState(props.qty)
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', marginTop: 2, marginBottom: 2 }} >
            <CardMedia
                component="img"
                sx={{ width: 131 }}
                image={props.pic}
                alt="Loading"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography pt={2} variant="h5" color="text.secondary" component="div">
                        Price : {props.price}
                    </Typography>
                    <Typography pt={2} variant="h5" color="text.secondary" component="div">
                        Sku Number : {props.skuNumber}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="play/pause">
                        <TextField
                            id="outlined-number"
                            label="qty"
                            disabled
                            type="number"
                            value={input}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={{ width: "80px" }}
                        />
                    </IconButton>
                </Box>

            </Box>


        </Card>
    );
}


export default CardsInCart
