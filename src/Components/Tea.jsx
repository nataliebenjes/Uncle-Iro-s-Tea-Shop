import { Box } from "@mui/material";import PropTypes from "prop-types";

function Tea(props){
  return (
    <Box width="80%" m="80px auto">

      <div onClick = {() => props.whenTeaClicked(props.id)}>
      <h3>{props.type} - {props.name} - {props.origin}</h3>

      <p><em>${props.price} per oz</em></p>
        <hr/>
      </div>
    </Box>
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
