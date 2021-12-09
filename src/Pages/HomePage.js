import ReactDOM from "react-dom";
import * as React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Overview from "../Components/Overview";
import About from "../Components/About";
import Form from "../Components/Form";
import LandingPricing from "../Components/LandingPricing";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div>
      {/* {Navbar()} */}
      {Header()}
    </div>
  );
}

// {/* HEADER */}
// <div class="container mt-5">
// <h1>Build online training in 3 easy steps</h1>
// </div>

// {/* END OF HEADER */}

// {/* BODY */}
// {/* course ID */}
// <div class="container mt-3">
// <div class="row mt-4">
//   <div class="col-4">
//     <p>Course ID</p>
//   </div>
//   <div class="col-5">
//     <input
//       type="ID"
//       class="form-control form-control-sm"
//       id="exampleFormControlInput0"
//       placeholder="XYZ123"
//     />
//   </div>
// </div>
// {/* Course ID INPUT */}

// {/* Title INPUT */}
// <div class="row mt-4">
//   <div class="col-4">
//     <p>Title</p>
//   </div>
//   <div class="col-5">
//     <input
//       type="ID"
//       class="form-control form-control-sm"
//       id="exampleFormControlInput1"
//       placeholder="Basic Guide to WHS"
//     />
//   </div>
// </div>
// {/* Title INPUT */}

// {/* Description INPUT */}
// <div class="row mt-4">
//   <div class="col-4">
//     <p>Description</p>
//   </div>
//   <div class="col-5">
//     <textarea
//       class="form-control"
//       aria-label="With textarea"
//       placeholder="Description"
//       id="exampleFormControlTextarea1"
//     ></textarea>
//   </div>
// </div>
// {/* Description INPUT */}
// {/* Video INPUT */}
// <div class="row mt-4">
//   <div class="col-4">
//     <p>Video</p>
//   </div>
//   <div class="col-5">
//     <div class="input-group mb-3">
//       <input
//         type="file"
//         class="form-control"
//         id="inputGroupFile02"
//       ></input>
//       <label class="input-group-text" for="inputGroupFile02">
//         Upload
//       </label>
//     </div>
//   </div>
// </div>
// {/* Video INPUT */}

// {/* Type ROW */}
// <div class="row mt-4">
//   <div class="col-3">
//     <p>Course Type</p>
//     <select
//       id="selectMedicationType"
//       class="form-select form-select-sm"
//     >
//       <option selected>Select Type</option>
//       <option>Making UI</option>
//       <option>Making WP post</option>
//     </select>
//   </div>
//   <div class="col-3">
//     <p>Maximum play time</p>
//     <div class="input-group input-group-sm">
//       <input type="text" class="form-control" placeholder="500" />
//       <span class="input-group-text" id="basic-addon2">
//         minutes
//       </span>
//     </div>
//   </div>
//   <div class="col-3">
//     <p>Frequency</p>
//     <select
//       id="selectMedicationType"
//       class="form-select form-select-sm"
//     >
//       <option selected>Select Frequency</option>
//       <option>Once a week</option>
//       <option value="2">Twice a week</option>
//     </select>
//   </div>
// </div>
// {/* Type ROW */}
// {/* DATES */}
// <div class="row mt-4">
//   <div class="col-3">
//     <p>Start Date</p>
//     <input
//       type="email"
//       class="form-control form-control-sm"
//       id="exampleFormControlInput1"
//       placeholder="13/09/2021"
//     />
//   </div>
//   <div class="col-3">
//     <p>End Date</p>
//     <input
//       type="email"
//       class="form-control form-control-sm"
//       id="exampleFormControlInput1"
//       placeholder="13/09/2021"
//     />
//   </div>
// </div>
// {/* END OF DATES*/}
// </div>
// {/* END OF BODY */}

// {/* SUBMIT BUTTON */}
// <div class="container mt-5">
// <button
//   class="btn btn-warning"
//   onClick={() => {
//     const testValue = document.querySelector(
//       "#exampleFormControlInput0"
//     );
//     alert(`ID value = ${testValue.value}`);
//   }}
// >
//   Submit
// </button>
// </div>
// {/* END OF SUBMIT BUTTON */}

// <div class="container mt-5">
// <button class="btn btn-warning">Pricing Comparements</button>
// </div>
