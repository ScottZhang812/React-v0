//import Message from './Message';
import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  const [AltVisible, setAltVisibility] = useState(false);
  return (
    <div>
      {AltVisible && (
        <Alert
          closeAlt={() => {
            setAltVisibility(false);
          }}
        >
          Alert
        </Alert>
      )}
      <Button
        onClick={() => {
          setAltVisibility(true);
        }}
      ></Button>
    </div>
  );
}

export default App;
