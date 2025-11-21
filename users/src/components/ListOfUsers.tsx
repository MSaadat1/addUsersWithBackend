import "./styles.css";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
  onDeleteUser: (id: number) => void;
  onUpdateUser: (id: number, name: string, email: string) => void;
};

export function ListOfUsers({
  users,
  onDeleteUser,
  onUpdateUser,
}: UserListProps) {
  return (
    <>
      <div>
        <h2>Users Information</h2>
        <ul className="user-container">
          {users.map((u) => (
            <li key={u.id} className="user">
              <span>
                {u.name} - {u.email}
              </span>
              <button id="delete-btn" onClick={() => onDeleteUser(u.id)}>
                Delete Users
              </button>
              <button
                id="update-btn"
                onClick={() => {
                  const nameUpdate = prompt("Enter the user name:", u.name);
                  const emailUpdate = prompt("Enter user's email:", u.email);
                  if(nameUpdate && emailUpdate){
                    onUpdateUser(u.id, nameUpdate, emailUpdate)
                  }
                }}
              >
                Update Users
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
