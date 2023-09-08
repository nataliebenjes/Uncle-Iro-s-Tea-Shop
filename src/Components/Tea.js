import React from "react";
import PropTypes from "prop-types";


function Tea(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.type} - {props.name}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {

  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

  issue: PropTypes.string,
  id: PropTypes.number.isRequired,
  whenTeaClicked: PropTypes.func
};


export default Tea;
