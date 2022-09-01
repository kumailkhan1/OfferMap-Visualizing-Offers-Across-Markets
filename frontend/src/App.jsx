import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, CssBaseline, Typography, Toolbar, Container } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Table from './components/Table';
import { getAllOffers } from './services/OffersService';

const theme = createTheme({
    palette: {
        primary: {
            main: "#181c44"
        }
    }
});

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'recorded_at', headerName: 'Offer Date' },
    { field: 'bookies_name', headerName: 'Bookie Name' },
    { field: 'discount_text', headerName: 'Discount' },
    { field: 'discount_description', headerName: 'Description' },
    { field: 'landingpage_URL', headerName: 'Link' },
    { field: 'gametype_id', headerName: 'Game Type' },
    { field: 'source_id ', headerName: 'Source ID' },
    { field: 'language_id', headerName: 'Language' },
    { field: 'min_deposit', headerName: 'Min. Deposit' },
    { field: 'max_deposit ', headerName: 'Max Deposit' },
    { field: 'customer_check', headerName: 'Customer Check' },
    { field: 'new_customer', headerName: 'New Customer' },
    { field: 'bookiesmarkets_id', headerName: 'Country' }
];


const App = () => {
    const [rows, setRows] = useState([]);
    const [skip, setSkip] = useState(0);
    const [take,setTake] = useState(100);
    
    useEffect(() => {

        async function fetchData() {
            let newRows = await getAllOffers(0, 200);
            console.log(newRows)
            setRows(newRows.offerings)
        }
        fetchData();
    }, [])
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>

                <AppBar position='relative'>
                    <Toolbar>
                        <DashboardIcon>
                            <Typography variant='h6'>Dashboard</Typography>
                        </DashboardIcon>
                    </Toolbar>
                </AppBar>
                <main>
                    <div>
                        <Container style={{ padding: '20px 0' }} maxHeight='100%'>
                            <Typography variant='h3' align='center' color='primary' gutterBottom>Dashboard</Typography>
                            <Typography variant='h4' align='left'>Offers</Typography>
                            <Table rows={rows} columns={columns}></Table>
                        </Container>


                    </div>
                </main>
            </ThemeProvider>
        </>

    );
}

export default App;