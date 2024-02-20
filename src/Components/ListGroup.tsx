//import {Fragment} from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}
function ListGroup(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    // parentheses are necessary for possible spliting lines!!
    <>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {props.items.map((item, index) => (
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
