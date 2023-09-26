import { ImageList, ImageListItem, Typography } from '@mui/material';
import data from '../json/cats.json'

const Discover: React.FC = (localData) => {
    return (
        <>
        <Typography variant="h5" component="h5">
            Most Searched Breeds
        </Typography>
        <Typography variant="h2" component="h2">
            66+ Breeds For you to discover
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {data.map((item) => (
                <ImageListItem key={item.image.url}>
                <img
                    src={`${item.image.url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        </>    
        
    )
    
};
    
export default Discover;