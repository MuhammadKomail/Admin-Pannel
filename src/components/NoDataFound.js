import React from 'react'
import { Container, Alert } from '@mui/material'

export default function NoDataFound() {
    return (
        <Container height="400px" alignitem="center" maxWidth="lg" >
            <Alert severity="warning">No Item Found</Alert>
        </Container>
    )
}
