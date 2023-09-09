import Tea from "./Tea";
import PropTypes from "prop-types";
import "./TeaList.css"; 



function TeaList(props) {
  let teaList;

  if (props.teaList[0] === undefined) {
    teaList = 'No crates of tea have been added to the tea list yet';
  } else {
    teaList =
      props.teaList.map((tea) =>
      <div className="tea-card" key={tea.id}>
        <Tea
          whenTeaClicked={props.onTeaSelection}
          name={tea.name}
          type={tea.type}
          price={tea.price}
          origin={tea.origin}
          ounces={tea.ouncesOfTea}
          id={tea.id}
          key={tea.id} />
          </div>
      );
  }
  return (
    <div className="tea-list">
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
