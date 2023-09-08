import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";


function NewTeaForm(props){

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      names: event.target.names.value, 
      origin: event.target.origin.value, 
      type: event.target.type.value, 
      price: event.target.price.value, 
      ounces: event.target.ounces.value, 
//add crates
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText="Add a tea" />
    </React.Fragment>
  );
}

 
NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;
