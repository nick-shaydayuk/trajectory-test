import React, { ChangeEvent, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cars from './Cars';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/nick-shaydayuk/trajectory-test">
        GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({});

const Album: React.FC = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [minPriceSearch, setMinPriceSearch] = useState<string>('');
  const [maxPriceSearch, setMaxPriceSearch] = useState<string>('');
  const [minYearSearch, setMinYearSearch] = useState<string>('');
  const [maxYearSearch, setMaxYearSearch] = useState<string>('');

  const handleSetSearchString = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;
    setSearchString(e.target.value);
  };

  const handleSetMinPriceSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;
    setMinPriceSearch(e.target.value);
  };

  const handleSetMaxPriceSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;
    setMaxPriceSearch(e.target.value);
  };

  const handleSetMinYearSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;
    setMinYearSearch(e.target.value);
  };

  const handleSetMaxYearSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;
    setMaxYearSearch(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="main">
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Random Carsharing
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Introducing the most convenient and cost-effective way to travel - our carsharing
              service! With a wide range of vehicles available at your fingertips, you can easily
              book a car for any occasion. Whether it's a quick trip to the grocery store or a
              weekend getaway with friends, we've got you covered. Plus, with our affordable rates
              and flexible booking options, you can save money and enjoy the freedom of driving
              without the hassle of ownership. Join our community today and experience the future of
              transportation!
            </Typography>
          </Container>
          <Container maxWidth="md">
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={searchString}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleSetSearchString(e);
              }}
              fullWidth
              margin="normal"
            />
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <TextField
                id="outlined-basic"
                label="Price minimum"
                variant="outlined"
                value={minPriceSearch}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleSetMinPriceSearch(e);
                }}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Price maximum"
                variant="outlined"
                value={maxPriceSearch}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleSetMaxPriceSearch(e);
                }}
                fullWidth
              />
            </Stack>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <TextField
                id="outlined-basic"
                label="Year minimum"
                variant="outlined"
                value={minYearSearch}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleSetMinYearSearch(e);
                }}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Year maximum"
                variant="outlined"
                value={maxYearSearch}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleSetMaxYearSearch(e);
                }}
                fullWidth
              />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Cars
            searchString={searchString}
            minPriceSearch={minPriceSearch}
            maxPriceSearch={maxPriceSearch}
            minYear={minYearSearch}
            maxYear={maxYearSearch}
          />
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
};

export default Album;
