import { Container, ImageList, ImageListItem, Typography } from '@mui/material';
import data from '../json/cats.json'

const Discover: React.FC = (localData) => {
    return (
        <Container className="image-list" maxWidth="lg">
            <Typography variant="h5" component="h5">
                Most Searched Breeds
            </Typography>
            <Typography variant="h2" component="h2">
                66+ Breeds For you to discover
            </Typography>
            <ImageList className="image-list__list" cols={4}>
                {data.map((item) => (
                <ImageListItem className="image-list__item" key={item.image.url}>
                    <img
                        src={`${item.image.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading="lazy"
                        className="image-list__img"
                    />
                    <Typography component="p">
                        {item.name}
                    </Typography>
                </ImageListItem>
            ))}
            </ImageList>
        </Container>    
        
    )
    
};
    
export default Discover;