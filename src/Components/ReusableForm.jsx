import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";

function ReusableForm(props) {
  return (
    <Box width="80%" m="80px auto">
   
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            placeholder='Name of tea' />
          <select
            name='type'
            defaultValue='default'
          >
            <option value='black' disabled>Select Type</option>
            <option value='🌱Green Tea🌱'>Green Tea</option>
            <option value='☕Black Tea☕'>Black Tea</option>
            <option value='🌼Herbal🌼'>Herbal Tea</option>
            <option value='🍃White Tea🍃'>White Tea</option>
            <option value='🍂Puerh🍂'>Puerh Tea</option>
          </select>
          <input
            type='number'
            name='price'
            step='0.01'
            min='0.00'
            placeholder='$ per OZ' />
          <input
            type='text'
            name='origin'
            placeholder='Origin' />

          <IconButton
            type='submit'>{props.buttonText}
                <AddIcon />        
          </IconButton>

        </form>
    </Box>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;