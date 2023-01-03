import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './style.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const options = {
    companyName: "Puzzle Bites Collection",
    companyDescription: "Making bite-sized puzzle games once a month.",
    buttons: [
        {
            name: "twitter",
            href: "https://twitter.com/PuzzleBites"
        },
        {
            name: "itch.io",
            href: "https://puzzlebitescollection.itch.io/"
        },
        {
            name: "A Tavern's Apprentice",
            href: "https://puzzlebitescollection.itch.io/a-taverns-apprentice"
        },
        {
            name: "Rotational",
            href: "https://puzzlebitescollection.itch.io/rotational"
        }
    ]
}

export default function LinkerGroup() {

    const buttons = [];
    for (let i = 0; i < options.buttons.length; ++i)
    {
        const option = options.buttons[i];

        buttons.push(
        <Button
            className='Button'
            type="submit"
            fullWidth
            variant="contained"
            target="_blank"
            href={option.href}
        >
            {option.name}
        </Button>);
    }

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
                        {options.companyName}
                    </Typography>
                    <Typography
                        component="h6"
                        variant="h6"
                        fontWeight={400}
                        textAlign="center"
                        marginBottom="1.5em"
                    >
                        {options.companyDescription}
                    </Typography>
                    {/* Buttons */}
                    {buttons}
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}