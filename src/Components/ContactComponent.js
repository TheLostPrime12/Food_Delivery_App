import { Link } from "react-router-dom";

const ContactComponent = () => {
  return (
    <div className="text-center">
      <h1 className="m-4 p-4 text-2xl font-extrabold">Made By: Tanish Garg</h1>
      <Link
        to="/"
        className="rounded-md bg-pink-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 "
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ContactComponent;
