import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './style.css'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function SignIn() {

    // var sectionStyle = {
    //     width: "100%",
    //     height: "400px",
    //     backgroundImage: "url(" + { Background } + ")"
    // };

    return (
        <ThemeProvider theme={darkTheme}>
            <Container className="DarkOverlayContainer" maxWidth="100%"></Container>
            
            <Container
                className="ImgContainer"
                maxWidth="100%"
                sx={{backgroundImage: `url(${'assets/logo-color.png'})`}}
            ></Container>
            <Container component="main" maxWidth="100%">
                <CssBaseline />
                <Box className='Box'>
                    <Avatar src="/assets/logo-color.png" sx={{ m: 1, width: 128, height: 128 }}></Avatar>
                    <Typography
                        component="h5"
                        variant="h5"
                        fontWeight={700}
                    >
                        @puzzle.bites.collection
                    </Typography>
                    <Typography
                        component="h6"
                        variant="h6"
                        fontWeight={400}
                        textAlign="center"
                    >
                        Making bite-sized puzzle games once a month.
                    </Typography>
                    <Button
                        className='Button'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        target="_blank"
                        href="https://linktr.ee/puzzle.bites.collection"
                    >
                        Twitter
                    </Button>
                    <Button
                        className='Button'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        target="_blank"
                        href="https://linktr.ee/puzzle.bites.collection"
                    >
                        Itch
                    </Button>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}