import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mr: 1,
    '&:hover': {
      bgcolor: 'warning.dark',
    },
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 6,
              px: 3,
            }}
          >
            <Box sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Contacto
              </Typography>
              <Typography variant="h5">
                Nezahualcoyotl, México.
              </Typography>
              <Typography variant="h5" gutterBottom>
                56 4572 9778.
              </Typography>
              <Typography variant="h5">
                estelalopez46@hotmail.com
              </Typography>


              <Grid
              container
              direction="column"
              spacing={2}
              sx={{ justifyContent: 'flex-end', height: 80 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://www.facebook.com/" sx={iconStyle}>
                  <img
                    src="https://ramostorage.blob.core.windows.net/ramo/facebook.png?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="https://www.instagram.com/" sx={iconStyle}>
                  <img src="https://ramostorage.blob.core.windows.net/ramo/instagram.png?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D" alt="instagram" />
                </Box>
              </Grid>
            </Grid>

            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://ramostorage.blob.core.windows.net/ramo/contacto.jpg?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

export default ProductCTA;
