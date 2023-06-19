import React from "react";

function Child({ index }, { index1 }) {
  return (
    <div className="myParagraph" style={{ padding: "10px" }}>
      Hey! I am Child {index} from {index + 1}.
    </div>
  );
}

export default Child;
