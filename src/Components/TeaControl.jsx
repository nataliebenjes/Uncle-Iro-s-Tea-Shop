import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import EditTeaForm from './EditTeaForm';
import TeaDetail from './TeaDetail';

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null,
      editing: false
    };
  }
//if the selected Tea isn't null, make form invisible, no Tea is selected, and component isn't in editing mode. Otherwise make the form visible using previous state value
  handleClick = () => {
    if (this.state.selectedTea != null){
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
      }
    }

    //takes in id of tea to be deleted. check if the id of each tea is not equal to the id passed in as an argument, removing inputted tea from newMainTeaList. Then setState of mainTeaList
  handleDeletingTea = (id) => {
    const newMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== id);
    this.setState({
      mainTeaList: newMainTeaList,
      slectedTea: null
    });
  }
  handleEditClick = () => {
    this.setState({editing: true});
  }
  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({mainTeaList: newMainTeaList,
                  formVisibleOnPage: false });
  }
  handleEditingTeaInList = (teaToEdit) => {
    const editedMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== this.state.selectedTea.id)
    .concat(teaToEdit);
    this.setState({
      mainTeaList: editedMainTeaList,
      editing: false,
      selectedTea: null
    });
  }
  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea});
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.editing ) {      
      currentlyVisibleState = <EditTeaForm tea = {this.state.selectedTea} onEditTea = {this.handleEditingTeaInList} />
      buttonText = "Return to Tea List";
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail 
      tea={this.state.selectedTea} 
      onClickingDelete={this.handleDeletingTea}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Tea List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList}/>;
      buttonText = "Return to Tea List"; 
    } else {
      currentlyVisibleState = <TeaList onTeaSelection={this.handleChangingSelectedTea} teaList={this.state.mainTeaList} />;
      buttonText = "Add Tea"; 
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */}
      </React.Fragment>
    );
  }
}


export default TeaControl;