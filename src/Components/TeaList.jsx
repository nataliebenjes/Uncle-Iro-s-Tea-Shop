import PropTypes from "prop-types";
import "./TeaList.css"; 
import { Button } from "@mui/material";




function TeaList(props) {
  let teaList;

  if (props.teaList[0] === undefined) {
    teaList = 'No crates of tea have been added to the tea list yet';
  } else {
    teaList =
      props.teaList.map((tea) => (
        // <div className="card-list" key={tea.id}>
        <div className="card" key={tea.id} >
          <div className="center-card-info">
          <div className="card-title">
          <h3>{tea.type} - {tea.name}</h3>
         </div>
        <div className="card-subtitle">
          <h3>{tea.origin}</h3>
        </div>
        <div className="card-price"><p><em>${tea.price}/oz</em></p></div>
          <p>Number of ounces left: {tea.ouncesOfTea}</p>
          <Button onClick={() => props.onTeaSelection(tea.id)}>View Details</Button>
        </div>
        </div>
      
      ));
  }
  return (
    <div>
    <h2>Inventory:</h2>      
      <div className="tea-card-container">
        {teaList}
    </div>
    </div>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
};


export default TeaList;
