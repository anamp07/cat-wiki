import Image from 'next/image';
import { Typography, Container, Box, Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import BreedSearchInput from './SeachBar';

const Hero: React.FC = () => {

    return (
        <>
            <Container maxWidth="lg">
            <Box className="c-hero" sx={
                {
                    'backgroundImage': 'url(./images/HeroImagelg.png)',
                    'backgroundRepeat': 'no-repeat',
                    'backgroundSize': 'cover',
                    'backgroundPosition': 'center',
                }
            }>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Image
                        src={`./images/CatwikiLogo.svg`}
                        alt="Cat Wiki Logo"
                        width="127"
                        height="42"
                        />
                        <Typography variant='subtitle2' sx={{
                            marginBottom: '52px'
                        }}>Get to know more about your cat breed</Typography>
                        <FormControl>
                            <BreedSearchInput id="outlined-basic" label="Outlined" InputProps={{ notched: false }} />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </>
    )
};

export default Hero;