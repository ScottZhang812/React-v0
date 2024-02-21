//import Message from './Message';
import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import ExpandableText from "./Components/ExpandableText";

function App() {
  const [AltVisible, setAltVisibility] = useState(false);
  return (
    // <div>
    //   {AltVisible && (
    //     <Alert
    //       closeAlt={() => {
    //         setAltVisibility(false);
    //       }}
    //     >
    //       Alert
    //     </Alert>
    //   )}
    //   <Button
    //     onClick={() => {
    //       setAltVisibility(true);
    //     }}
    //   ></Button>
    // </div>
    <div>
      <ExpandableText maxLength={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        veritatis accusantium commodi inventore beatae ratione recusandae
        expedita id. Explicabo labore error repudiandae! Voluptates, omnis eum
        sequi eligendi accusantium amet tempora est saepe quas iure nostrum
        reiciendis vel delectus labore. Et officiis fugit deleniti, esse
        consequatur voluptates necessitatibus maxime dolore quam non labore
        corporis veniam soluta a! Officia maxime praesentium, quo cum ducimus
        expedita quidem eligendi, odio sit soluta consequuntur molestiae quod
        quis repudiandae a, deserunt laborum porro unde dicta animi? Sit
        necessitatibus nam repudiandae consequuntur magnam dignissimos est
        ducimus ipsam velit sunt dolor, pariatur nemo tempore libero nulla a.
        Explicabo!
      </ExpandableText>
    </div>
  );
}

export default App;
