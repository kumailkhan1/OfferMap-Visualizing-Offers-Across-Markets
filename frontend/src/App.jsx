import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, CssBaseline, Typography, Toolbar, Container } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DataTable from './components/DataTable/index';


const theme = createTheme({
    palette: {
        primary: {
            main: "#181c44"
        }
    }
});

const App = () => {


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
                            <Typography variant='h4' margin={'10px'}>Offers</Typography>
                            <DataTable />

                        </Container>

                        



                    </div>
                </main>
            </ThemeProvider>
        </>

    );
}

export default App;