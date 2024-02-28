import { useOutletContext } from "react-router-dom";

// interface FollowersContext {
//   userId: string;
// }
function Followers() {
  console.log("followers context", useOutletContext());
  return (
    <div>
      <h1>Followers</h1>
    </div>
  );
}

export default Followers;
