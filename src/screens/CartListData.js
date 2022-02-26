import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardsInCart from './CardsInCart'



export const CartListData = ({ id, qty, allData }) => {

    const [findVal, setFindVal] = useState({})
    
    useEffect(() => {
        const val = allData.find((e) => e._id == id)
        if (val) {
            setFindVal(val)
        }
    }, [allData])

    return (
        <div>{findVal ?
            <CardsInCart qty={qty} pic={findVal.imageUrl1} title={findVal.title} price={findVal.discountPrice == null ? findVal.orignalPrice : findVal.discountPrice} id={findVal._id} skuNumber={findVal.skuNumber} /> : <Typography>Value</Typography>}</div>
    )
}
