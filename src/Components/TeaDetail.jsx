import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";


function TeaDetail(props) {
  //how you extract properties from props object
  const { tea, onClickingDelete, onClickingEdit, onClickingSell } = props;
  let teaStock = tea.ouncesOfTea;

  if (tea.ouncesOfTea < 10) {
    teaStock = `${tea.ouncesOfTea}, Low on Stock!`;
  }
  if (tea.ouncesOfTea === 0) {
    teaStock = 'Out of Stock!';
  }

  return (
    <Box width="80%" m="80px auto">
      <h2>This Teas Details</h2>
      <h3>{tea.type} - {tea.name} - {tea.origin}</h3>
      <p><em>{tea.price}</em></p>
      <p>Number of ounces left of this tea: {teaStock}</p>
      <Box>
        <Button onClick={onClickingSell}>Sell a cup of this Tea</Button>
        <Button onClick={onClickingEdit}>Update Tea</Button>
        <Button onClick={() => onClickingDelete(tea.id)}>Remove this tea from inventory</Button>
      </Box>
    </Box>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TeaDetail;