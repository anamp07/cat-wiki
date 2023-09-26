import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const BreedSearchInput = styled(TextField)({
    backgroundColor: 'white',
    borderRadius: '59px',
    "& .MuiOutlinedInput-notchedOutline": {
        border: 0
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: 0
    }
});

export default BreedSearchInput;