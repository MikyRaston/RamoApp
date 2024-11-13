import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { HashLink } from 'react-router-hash-link';

const backgroundImage =
  'https://ramostorage.blob.core.windows.net/ramo/business.jpg?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        RAMO Servicios Contables
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Servicios contables personalizados.
      </Typography>
      <HashLink to="#contacto">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200 }}
      >
        Contactanos
      </Button>
      </HashLink>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Descubre nuestros servicios
      </Typography>
    </ProductHeroLayout>
  );
}
