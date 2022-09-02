import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, CssBaseline, Typography, Toolbar, Container } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DataTable from './components/DataTable';
import { getAllOffers } from './services/OffersService';

const theme = createTheme({
    palette: {
        primary: {
            main: "#181c44"
        }
    }
});

const columns = [
    { name: 'id', title: 'ID' },
    { name: 'recorded_at', title: 'Offer Date' },
    { name: 'bookies_name', title: 'Bookie Name' },
    { name: 'discount_text', title: 'Discount' },
    { name: 'discount_description', title: 'Description' },
    { name: 'landingpage_URL', title: 'Link' },
    { name: 'gametype_id', title: 'Game Type' },
    { name: 'source_id ', title: 'Source ID' },
    { name: 'language_id', title: 'Language' },
    { name: 'min_deposit', title: 'Min. Deposit' },
    { name: 'max_deposit ', title: 'Max Deposit' },
    { name: 'customer_check', title: 'Customer Check' },
    { name: 'new_customer', title: 'New Customer' },
    { name: 'bookiesmarkets_id', title: 'Country' }
];


const App = () => {
    const [rows, setRows] = useState([]);
    const [skip, setSkip] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(79429);
    const [take] = useState(10);

    useEffect(() => {

        async function fetchData() {
            let newRows = await getAllOffers(take * currentPage, take);
            console.log(newRows)

            setRows(newRows.offerings)

        }
        fetchData();
    }, [currentPage])

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
                        <Container style={{ padding: '20px 0' }}>
                            <Typography variant='h3' align='center' color='primary' gutterBottom>Dashboard</Typography>
                            <Typography variant='h4' align='left'>Offers</Typography>
                            <DataTable
                                rows={rows}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                take={take}
                                totalCount={totalCount}
                            />
                        </Container>


                    </div>
                </main>
            </ThemeProvider>
        </>

    );
}

export default App;