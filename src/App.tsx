import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Crud from "./Crud";
import List from "./List";
import Title from "./Title";

function App() {
  const [users, setUsers] = useState<any>([]);

  async function newUser(): Promise<any> {
    const resp = await fetch("https://randomuser.me/api/");
    const payload = await resp.json();
    const newUser = payload.results[0];
    return newUser;
  }

  const addUser = async () => {
    const user = await newUser();
    setUsers((users: any) => [...users, user]);
  };

  const removeLastUser = () => {
    setUsers(users.slice(0, -1));
  };

  const clearUsers = () => {
    setUsers([]);
  };

  const replaceMiddle = async () => {
    const middle = users[Math.floor(users.length / 2)];
    const user = await newUser();
    setUsers(
      users.map((item: any) =>
        item.id.value === middle.id.value ? user : item
      )
    );
  };

  return (
    <>
      <Title title="Users">In this lab I am using Users mock data.</Title>
      <Counter entityCount={users.length} />
      <Crud
        add={addUser}
        removeLast={removeLastUser}
        clear={clearUsers}
        replaceMiddle={replaceMiddle}
        empty={users.length === 0}
      />
      <List entities={users} />
    </>
  );
}

export default App;
