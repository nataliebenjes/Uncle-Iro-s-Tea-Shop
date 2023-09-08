import Tea from "./Tea";
import PropTypes from "prop-types";



function TeaList(props) {
  let teaList;

  if (props.teaList[0] === undefined) {
    teaList = 'No tea crates have been added to the tea list yet';
  } else {
    teaList =
      props.teaList.map((tea) =>
        <Tea
          whenTeaClicked={props.onTeaSelection}
          name={tea.name}
          type={tea.type}
          price={tea.price}
          origin={tea.origin}
          ounces={tea.ouncesOfTea}
          id={tea.id}
          key={tea.id} />
      );
  }
  return (
    <>
      <h2>Inventory:</h2>
      {teaList}
    </>
  );
}
TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
};


export default TeaList;
