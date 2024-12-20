import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { HashLink } from 'react-router-hash-link';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
  fontSize:"3em",
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          ¿Cómo trabajamos?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="i"
                  alt="suitcase"
                  className="fi fi-rr-mobile-notch"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Contactanos direcatamente a nuestro número de teléfono.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="i"
                  alt="graph"
                  className="fi fi-rr-messages"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  También puedes enviarnos mensaje directo a traves de nuestras redes sociales.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="i"
                  alt="clock"
                  className="fi fi-rs-corporate"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Uno de nuestros ejecutivos te atenderá.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <HashLink to="#contacto">
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          sx={{ mt: 8 }}
        >
          Comencemos
        </Button>
        </HashLink>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
