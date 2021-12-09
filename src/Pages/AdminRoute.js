import { BrowserRouter as Router, Route } from "react-router-dom";

import PackagesList from "../Components/packages-list.component";
import CreatePackage from "../Components/create-package.component";
import CreateUser from "../Components/create-user.component";
import Navbar from "../Components/navbar.component";

export default function AdminRoute() {
  return (
    <Router>
      <div id="adminRoute" className="container">
        <Navbar />
        {/*  */}
        <Route path="/admin" exact component={PackagesList} />
        <Route path="/create" component={CreatePackage} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}
