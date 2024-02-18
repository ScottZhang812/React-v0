//import {Fragment} from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["NY", "SF", "Tokyo"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    // parentheses are necessary for possible spliting lines!!
    <>
      <h1>LIST</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
