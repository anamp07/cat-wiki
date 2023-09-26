import Head from 'next/head'
import { Box, Container } from '@mui/material';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
      <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
        <header>
          <Container maxWidth="lg">
            <Box sx={{padding: '15px'}}>
              <Image
                src={`./images/CatwikiLogo.svg`}
                alt="Cat Wiki Logo"
                width="127"
                height="42"
              />
              </Box>
          </Container>
        </header>
      </>
    );
  };
  
export default Header;