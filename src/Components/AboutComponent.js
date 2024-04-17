// import User from "./User";
// import UserClass from "./UserClass";
import React from "react";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <div className="text-center">
      <h1 className="m-4 p-4 text-2xl font-extrabold">About Us</h1>

      <p className="mx-60 font-semibold">
        Welcome to my React JS learning hub! Inspired by the seamless
        experiences of Swiggy and Zomato, I've crafted a platform that mirrors
        their UI and functionality. While I'm not yet at their level, I'm
        dedicated to mastering React JS through hands-on practice.
      </p>

      <div className="m-8">
        <Link
          to="/"
          className="rounded-md bg-pink-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 "
        >
          Go Back Home
        </Link>
      </div>

      {/* <User name={"Tanish"} age={22} />
      <UserClass name={"Tanish"} age={22} /> */}
    </div>
  );
};

export default AboutComponent;

// For Learning

// class AboutComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     console.log("This is Parent Constructor");
//   }

//   componentDidMount() {
//     console.log("This is Parent componentDidMount");
//   }

//   render() {
//     console.log("This is Parent Render");

//     return (
//       <div>
//         <h1>About Us</h1>
//         {/* <User name={"Tanish"} age={22} /> */}
//         <UserClass name={"Tanish"} age={22} />
//         <UserClass name={"Tanish"} age={22} />
//       </div>
//     );
//   }
// }
