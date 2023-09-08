import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  //how you extract properties from props object
  const { tea, onClickingDelete, onClickingEdit, onClickingSell } = props; 

  return (
    <React.Fragment>
      <h1>This Teas Details</h1>
      <h3>{tea.type} - {tea.name} - {tea.origin}</h3>
      <p><em>{tea.price}</em></p>
      <button onClick={onClickingSell}>Sell a cup of this Tea</button>
      <button onClick={onClickingEdit}>Update Tea</button>
      <button onClick={()=> onClickingDelete(tea.id)}>Remove this tea from inventory</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TeaDetail;