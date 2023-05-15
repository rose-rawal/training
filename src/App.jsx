import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import ListProvider from "./contexts/listprovider";
import { UserProvider } from "./contexts/usercontext";
import Update from "./pages/update";
/**
 *
 *  [1,2,3,4].map(callbackfunction)
 * [1,2,3,4].map((eachInput)=>value)
 *
 *
 *  {path: '/', element: <Index/>} ==> <Route key="/" path="/" element={<Index/>} />
 */

const App = () => {
  return (
    <UserProvider>
       <ListProvider>
    <Router>
      <Routes>
        {routes.map((each) => (
          <Route key={each.path} path={each.path} element={each.element} />
        ))}
        <Route key={"/api/users/update/:id"} path={"/api/users/update/:id"} element={<Update/>} />
      </Routes>
    </Router>
    </ListProvider>
    </UserProvider>
  );
};

export default App;
