import React from "react";

const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        disabled={!props.hasOptions}
        onClick={props.pickOption}
      >
        what should i do?
      </button>
    </div>
  );
};

export default Action;
