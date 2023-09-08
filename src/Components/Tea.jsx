import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>

      <div onClick = {() => props.whenTeaClicked(props.id)}>
      <h3>{props.type} - {props.name} - {props.origin}</h3>

      <p><em>${props.price} per oz</em></p>
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
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};


export default Tea;
