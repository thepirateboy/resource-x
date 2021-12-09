import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add/", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.setState({
      name: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="ms-3">
        <h3 className="mb-5">Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Name: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                required
                className="form-control col-6"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
          </div>

          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Email: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                required
                className="form-control col-6"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
          </div>

          <div className="form-group row mb-4">
            <div className="col-2">
              <label className="col-4">Password: </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                required
                className="form-control col-6"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add User"
              className="btn btn-danger mt-5"
            />
          </div>
        </form>
      </div>
    );
  }
}
