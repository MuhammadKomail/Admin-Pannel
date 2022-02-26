import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {
    ViewOrders, ViewUsers, ViewProducts, Dashboard, Upload, AdminPanel, Register, EditProduct
    // , Loader,
    // NoDataFound
} from "./index"

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />

                <Route path="/AdminPanel" element={<AdminPanel />}>
                    {/* <Route path="" element={< Dashboard />} /> */}
                    <Route path="ViewOrders" element={<ViewOrders />} />
                    <Route path="ViewUsers" element={<ViewUsers />} />
                    <Route path="ViewProducts" element={<ViewProducts />} />
                    <Route path="Upload" element={<Upload />} />
                </Route>
                <Route path="edit" element={<EditProduct />} />
            </Routes>
        </Router>)
}

export default AppRouter