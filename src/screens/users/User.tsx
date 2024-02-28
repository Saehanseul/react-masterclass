import { Link, useOutletContext } from "react-router-dom";
import { Outlet, useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  console.log("User context", useOutletContext());
  return (
    <div>
      <h1>User: {userId}</h1>
      <Link to="followers">See followers</Link>
      <Outlet context={{ userId: userId }} />
    </div>
  );
}

export default User;
