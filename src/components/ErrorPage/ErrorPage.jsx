import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="align-middle text-center justify-center items-center">
            <h3>Error Page  opps!!!!!</h3>
            <Link to='/'> <button className="bg-lime-600 p-2 m-2 rounded-md text-center text-black text-xl">Go back to home</button></Link>

        </div>
    );
};

export default ErrorPage;