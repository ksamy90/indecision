import React from "react";

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const value = this.props.addOption(option);
    this.setState(() => {
      return {
        error: value,
      };
    });
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type="text"
            name="option"
            autoComplete="off"
          />
          <button className="button">add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
