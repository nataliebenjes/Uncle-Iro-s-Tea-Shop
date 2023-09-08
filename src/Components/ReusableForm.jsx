import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
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

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;