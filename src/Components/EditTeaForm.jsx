import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTeaForm (props) {
  //destructuring assignment to pass tea prop from props object
  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      type: event.target.type.value, 
      price: event.target.price.value, 
      // ounces: event.target.ounces.value, 
      id: tea.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTeaFormSubmission} 
        buttonText="Update Tea" />
    </React.Fragment>
  );
}

EditTeaForm.propTypes = {
  onEditTea: PropTypes.func,
  tea: PropTypes.object
};

export default EditTeaForm;