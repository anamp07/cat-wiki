import { Typography } from '@mui/material';
import Image from 'next/image';
import { Container } from '@mui/material';


const Footer: React.FC = () => {
    return (
      <>
      <Container maxWidth="xl">
          <Image
            src={`./images/CatwikiLogo.svg`}
            alt="Cat Wiki Logo"
            width="100"
            height="60"
          />
          <Typography variant="body2">
            © created by username - devChallenge.io 2021
            </Typography>
      </Container>
      </>
    );
  };
  
export default Footer;