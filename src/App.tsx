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
        dashu uhw euiqwh dhasuih weq dsaw w asd dwqd dwad wadawd wada wadawda
        wada dawda w aw dada a dad adwda awdawd
      </ExpandableText>
    </div>
  );
}

export default App;
