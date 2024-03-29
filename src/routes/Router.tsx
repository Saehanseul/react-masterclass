// import { createBrowserRouter } from "react-router-dom";
// import Root from "../App";
// import About from "../screens/About";
// import Home from "../screens/Home";
// import Notfound from "../screens/NotFound";
// import ErrorComponent from "../components/ErrorComponent";
// import User from "../screens/users/User";
// import Followers from "../screens/users/Followers";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Coin from "./Coin";
import Coins from "./Coins";
import Coin from "./Coin";
import Price from "./Price";
import Chart from "./Chart";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         errorElement: <ErrorComponent />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "user/:userId",
//         element: <User />,
//         children: [
//           {
//             path: "followers",
//             element: <Followers />
//           }
//         ]
//       }
//     ],
//     errorElement: <Notfound />
//   }
// ]);

// export default router;

interface IRouterProps {}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />

        <Route path="/:coinId/*" element={<Coin />}>
          <Route path={`price`} element={<Price />} />

          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
