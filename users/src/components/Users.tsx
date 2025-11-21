import { useState } from "react";
import "./styles.css";

type UserFormProps = {
  onAddUser: (name: string, email: string) => void;
};

export function Users({onAddUser} : UserFormProps) {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    if(!userName || !userEmail) return;
    onAddUser(userName,userEmail);
    setUserName("");
    setUserEmail("");
  }
  return (
    <>
      <div className="form-container">
        <form action="" className="form" onSubmit={handleSubmitForm}>
          <label htmlFor="name">User Name:</label>
          <input
            type="text"
            name="name"
            value={userName}
            className="input-value"
            placeholder="User Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(e.target.value);
            }}
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            name="email"
            value={userEmail}
            className="input-value"
            placeholder="@mail.com"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserEmail(e.target.value);
            }}
          />
          <input id="submit-btn" type="submit" value="Add User" />
        </form>
      </div>
    </>
  );
}
