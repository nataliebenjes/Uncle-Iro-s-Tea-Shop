import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, TextField } from "@mui/material";

function ReusableForm(props) {
  return (
    <Box
    >
      <div className="center">
      <div className="card">
        <p><em>Another tea to add?</em></p>

      <form onSubmit={props.formSubmissionHandler}>
        <div className="custom-select">
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
        </div>
        <TextField
          type='number'
          name='price'
          label="Enter Price per oz"

          step='0.01'
          min='0.00'
          placeholder='$ per OZ'
          fullWidth
        />

        <TextField
          type='string'
          name='origin'
          label='Origin'
          fullWidth
        />
        <TextField
          type='string'
          name='name'
          label='Name'
          fullWidth
        />
        <br></br><br></br>
        <IconButton
          type='submit'
          variant="contained"
          color="primary"
        >
          {props.buttonText}
          <AddIcon />
        </IconButton>
      </form>
      </div>
      </div>
    </Box>
  );
  

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
