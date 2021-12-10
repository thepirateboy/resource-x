import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePackage extends Component {
  constructor(props) {
    super(props);

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeDepartureDate = this.onChangeDepartureDate.bind(this);
    this.onChangeExporter = this.onChangeExporter.bind(this);
    this.onChangeTotal = this.onChangeTotal.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeDestination = this.onChangeDestination.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user: "",
      total: 0,
      value: 0,
      quantity: 0,
      weight: 0,
      destination: "",
      exporter: "",
      departureDate: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://3.16.123.62:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.name),
            user: response.data[0].name,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUser(e) {
    this.setState({
      user: e.target.value,
    });
  }

  onChangeExporter(e) {
    this.setState({
      exporter: e.target.value,
    });
  }

  onChangeTotal(e) {
    this.setState({
      total: e.target.value,
    });
  }

  onChangeValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value,
    });
  }

  onChangeDestination(e) {
    this.setState({
      destination: e.target.value,
    });
  }

  onChangeDepartureDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const thPackage = {
      user: this.state.user,
      departureDate: this.state.departureDate,
      exporter: this.state.exporter,
      total: this.state.total,
      value: this.state.value,
      quantity: this.state.quantity,
      weight: this.state.weight,
      destination: this.state.destination,
    };

    console.log(thPackage);

    axios
      .post("http://3.16.123.62:5000/packages/add", thPackage)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="ms-5 mb-5">
        <h3 className="mb-5">Create New Package Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">User: </label>
            </div>
            <div className="col-6">
              <select
                ref="userInput"
                required
                className="form-control"
                value={this.state.user}
                onChange={this.onChangeUser}
              >
                {this.state.users.map(function (user) {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Exporter: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                required
                className="form-control"
                value={this.state.exporter}
                onChange={this.onChangeExporter}
              />
            </div>
          </div>

          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Destination: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={this.state.destination}
                onChange={this.onChangeDestination}
              />
            </div>
          </div>

          <div className="form-group row mb-4">
            <div className="col-5">
              <label className="col-6">Departure Date: </label>
            </div>
            <div className="col-6">
              <div>
                <DatePicker
                  selected={this.state.departureDate}
                  onChange={this.onChangeDepartureDate}
                />
              </div>
            </div>
          </div>

          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Total: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={this.state.total}
                onChange={this.onChangeTotal}
              />
            </div>
          </div>
          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Value: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={this.state.value}
                onChange={this.onChangeValue}
              />
            </div>
          </div>
          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Quantity: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
              />
            </div>
          </div>

          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Weight: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={this.state.weight}
                onChange={this.onChangeWeight}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Record Log"
              className="btn btn-danger mt-5"
            />
          </div>
        </form>
      </div>
    );
  }
}
