import { Link } from "react-router-dom";

const Grocery = () => {
  return (
    <div className="text-center">
      <h1 className="m-4 p-4 text-2xl font-extrabold">Grocery</h1>
      <p className="mx-60 font-semibold">
        This page serves as a platform for practicing React JS, while also
        implementing lazy loading for enhanced accessibility.
      </p>
      <div className="m-8">
        <Link
          to="/"
          className="rounded-md bg-pink-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 "
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Grocery;
