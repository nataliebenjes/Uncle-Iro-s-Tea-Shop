import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";



function NewTeaForm(props){

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      type: event.target.type.value, 
      price: event.target.price.value,
      ouncesOfTea: 130,
      id: v4()
    });
  }

  return (
    <Box width="80%" m="80px auto">
      <ReusableForm 
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText="Add a crate of tea" />
    </Box>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;
