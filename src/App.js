import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/navbar.component";
import PackagesList from "./Components/packages-list.component";
import CreatePackage from "./Components/create-package.component";
import CreateUser from "./Components/create-user.component";
import EditPackage from "./Components/edit-package.component";

import AdminRoute from "./Pages/AdminRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={PackagesList} />
      <Route path="/edit/:id" component={EditPackage} />
      <Route path="/create" component={CreatePackage} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
