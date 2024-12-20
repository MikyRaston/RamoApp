import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="i"
                alt="suitcase"
                className="fi fi-rs-thought-bubble"
                sx={{ height: 55, fontSize: "3em" }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Análisis
              </Typography>
              <Typography variant="h5">
                {
                  'Cada proyecto requiere una análisis personalizado'
                }
                {
                  ', dependiendo de las necesidades particulares.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="i"
                alt="graph"
                className="fi fi-rs-calculator-money"
                sx={{ height: 55, fontSize: "3em" }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Cotización
              </Typography>
              <Typography variant="h5">
                {
                  'Precios variables dependiendo del servicio ofrecido'
                }
                {' y el esfuerzo aplicado al proyecto.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="i"
                alt="clock"
                className="fi fi-rr-test"
                sx={{ height: 55, fontSize: "3em" }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Solución
              </Typography>
              <Typography variant="h5">
                {'Soluciones garantizadas. '}
                {'Contamos con una aplia experiencia en el ramo contable.'}
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
