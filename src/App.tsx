//import Message from './Message';
import { useEffect, useRef, useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";
import ProductList from "./Components/ProductList";
import { CanceledError } from "./services/api-client";
import UserService, { User } from "./services/user-service";
import userService from "./services/user-service";

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");
function App() {
  // const ref = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const { request, cancel } = UserService.getAll<User>();

    request
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        //SetError...
      });
    //*Method 2: Using await/try-catch. See 007-8.

    return () => cancel(); //where we write clean-ups
  }, []);
  //OPTIONAL:Customize your own hook containing functions above, for reusability.

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      //setError...
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        //setError...
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      //setError...
      setUsers(originalUsers);
    });
  };

  // dependency is `null`, so it stays the same, and don't need
  // more than one execution

  //Side Effect

  return <div className="">{/* <ProductList></ProductList> */}</div>;
}

export default App;
