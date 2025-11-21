import "./App.css";
import { Users } from "./components/Users";
import { ListOfUsers } from "./components/ListOfUsers";
import { useState, useEffect } from "react";
import { addUser, fetchUsers, deleteUser, updateUser } from "./api/users";

type UsersType = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [userData, setUserData] = useState<UsersType[]>([]);

  useEffect(() => {
    fetchUsers().then(setUserData).catch(console.error);
  }, []);

  function handleAddUser(name: string, email: string) {
    addUser(name, email)
      .then((userData) => setUserData((prev) => [...prev, userData]))
      .catch(console.error);
  }

  function handleDeleteUser(id: number) {
    deleteUser(id)
      .then(() => setUserData((prev) => prev.filter((u) => u.id !== id)))
      .catch(console.error);
  }

  function handleUpdateUser(id: number, name: string, email: string) {
    updateUser(name, email, id).then((updated) =>
      setUserData((prev) => prev.map((u) => (u.id === id ? updated : u)))
    );
  }
  return (
    <>
      <h3>Add Users:</h3>
      <div>
        <Users onAddUser={handleAddUser} />
        <ListOfUsers
          users={userData}
          onDeleteUser={handleDeleteUser}
          onUpdateUser={handleUpdateUser}
        />
      </div>
    </>
  );
}

export default App;
