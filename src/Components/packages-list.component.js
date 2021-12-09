import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Package = (props) => (
  <tr>
    <td>{props.package.departureDate.substring(0, 10)}</td>
    <td>{props.package.exporter}</td>
    <td>{props.package.total}</td>
    <td>{props.package.value}</td>
    <td>{props.package.quantity}</td>
    <td>{props.package.weight}</td>
    <td>{props.package.destination}</td>
    <td>{props.package.user}</td>
    <td>
      <Link to={"/edit/" + props.package._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deletePackage(props.package._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class PackagesList extends Component {
  constructor(props) {
    super(props);

    this.deletePackage = this.deletePackage.bind(this);

    this.state = { packages: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/packages/")
      .then((response) => {
        this.setState({ packages: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deletePackage(id) {
    axios.delete("http://localhost:5000/packages/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      package: this.state.packages.filter((el) => el._id !== id),
    });
    window.location.reload();
  }

  packageList() {
    return this.state.packages.map((currentpackage) => {
      return (
        <Package
          package={currentpackage}
          deletePackage={this.deletePackage}
          key={currentpackage._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="ms-5 me-5">
        <h3 className="fs-1 mb-3">Logged Packages</h3>
        <table className="table table-striped table-borderless">
          <thead className="thead-light">
            <tr>
              <th>DepartureDate</th>
              <th>Exporter</th>
              <th>Total</th>
              <th>Value</th>
              <th>Quantity</th>
              <th>Weight</th>
              <th>Destination</th>
              <th>User</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.packageList()}</tbody>
        </table>
      </div>
    );
  }
}
