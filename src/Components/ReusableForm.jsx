import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, Input } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';


const teaTypes = [
  {
    value: '🌱Green Tea🌱',
    label: 'Green Tea',
  },
  {
    value: '☕Black Tea☕',
    label: 'Black Tea',
  },
  {
    value: '🌼Herbal🌼',
    label: 'Herbal Tea',
  },
  {
    value: '🍃White Tea🍃',
    label: 'White Tea',
  },
  {
    value: '🍂Puerh🍂',
    label: 'Puerh Tea',
  },
];



function ReusableForm(props) {
  return (
    <Box width="80%" m="80px auto">

      <form onSubmit={props.formSubmissionHandler}>
        <FormControl>
            <TextField
              id="outlined-select-tea"
              select
              label="Select Tea Type"
              defaultValue=""
              helperText="Please select the type of tea"
            >

          {teaTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </FormControl>
      <FormControl>
        <Input
          type='number'
          name='price'
          step='0.01'
          min='0.00'
          placeholder='$ per OZ' />
      </FormControl>
      <FormControl>
        <Input
          type='text'
          name='origin'
          placeholder='Origin' />
      </FormControl>
      <IconButton
        type='submit'>{props.buttonText}
        <AddIcon />
      </IconButton>

    </form>
    </Box >
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;