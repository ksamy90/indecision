import React from "react";
// import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
// import Options from "./Options";
// import OptionModal from "./OptionModal";

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

  componentDidMount() {
    try {
      const fetchTodos = localStorage.getItem("options");
      const todoItems = JSON.parse(fetchTodos);
      if (todoItems) {
        this.setState(() => {
          return {
            options: todoItems,
          };
        });
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const todoItems = JSON.stringify(this.state.options);
      localStorage.setItem("options", todoItems);
    }
  }
  render() {
    const title = "TodoApp React";
    const subtitle = "awesome react todos";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            pickOption={this.handlePick}
          />
        </div>
      </div>
    );
  }
}

export default TodoApp;
