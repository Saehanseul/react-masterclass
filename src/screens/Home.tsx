import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        {users.map((user: any) => {
          return (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
