import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";



function TeaList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.teaList.map((tea) =>
        <Tea 
          whenTeaClicked={props.onTeaSelection}
          name={tea.name}
          type={tea.type}
          price={tea.price}
          origin={tea.origin}
          id={tea.id}
          key={tea.id}/>
      )}
    </React.Fragment>
  );
}

  TeaList.propTypes = {
    teaList: PropTypes.array,
    onTeaSelection: PropTypes.func
};


  export default TeaList;
