import React from "react";

const Option = (props) => (
  <div>
    <p>
      {props.number}. {props.optionText}
    </p>
    <button
      onClick={() => {
        props.removeItem(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
