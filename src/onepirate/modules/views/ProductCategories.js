import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://ramostorage.blob.core.windows.net/ramo/cafe.jpg?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D',
    title: 'REPSE',
    width: '40%',
    href: 'https://repse.stps.gob.mx/',
  },
  {
    url: 'https://ramostorage.blob.core.windows.net/ramo/construccion.jpg?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D',
    title: 'SIROC',
    width: '20%',
    href: 'https://www.imss.gob.mx/siroc',
  },
  {
    url: 'https://ramostorage.blob.core.windows.net/ramo/nomina.jpg?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D',
    title: 'Nomina',
    width: '40%',
    href: 'https://www.diputados.gob.mx/LeyesBiblio/ref/lft.htm',
  },
  {
    url: 'https://ramostorage.blob.core.windows.net/ramo/impuestos.jpg?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D',
    title: 'Impuestos',
    width: '38%',
    href: 'https://www.sat.gob.mx/',
  },
  {
    url: 'https://ramostorage.blob.core.windows.net/ramo/imss.jpg?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D',
    title: 'IMSS',
    width: '38%',
    href: 'https://www.imss.gob.mx/',
  },
  {
    url: 'https://ramostorage.blob.core.windows.net/ramo/invonavit.jpg?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D',
    title: 'Infonavit',
    width: '24%',
    href: 'https://portalmx.infonavit.org.mx/',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Contabilidad para personas físicas y morales
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box component="a" href={image.href} target="_blank" rel="noopener noreferrer"
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
