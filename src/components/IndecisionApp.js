import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleClearOption = this.handleClearOption.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined,
    };
  }
  handleClearOption() {
    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }
  handleRemoveAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handleRemoveOption(itemToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => itemToRemove !== option),
      };
    });
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => {
      return {
        selectedOption: option,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Awesome!!</h1>
      </div>
    );
  }
}

export default TodoApp;
