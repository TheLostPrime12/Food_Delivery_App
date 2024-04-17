import { useRouteError, Link } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div>
      {/* <h1>OOPS!!!! Something Went Wrong</h1>
      <h3>{error.status + ": " + error.statusText}</h3>
      <h3>Reason: {error.data}</h3> */}

      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-pink-300">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-pink-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go Back Home
            </Link>
            <Link to="/about" className="text-sm font-semibold text-gray-900">
              Contact Support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorComponent;
