import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Crud from "./Crud";
import List from "./List";
import Title from "./Title";

function App() {
  const [users, setUsers] = useState<any>([]);

  const addUser = async () => {
    const resp = await fetch("https://randomuser.me/api/");
    const payload = await resp.json();
    const newUser = payload.results[0];
    console.log(newUser);
    setUsers((users: any) => [...users, newUser]);
  };

  const removeLastUser = () => {
    setUsers(users.slice(0, -1));
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <>
      <Title title="Users">In this lab I am using Users mock data.</Title>
      <Counter entityCount={users.length} />
      <Crud
        add={addUser}
        removeLast={removeLastUser}
        clear={clearUsers}
        empty={users.length === 0}
      />
      <List entities={users} />
    </>
  );
}

export default App;
