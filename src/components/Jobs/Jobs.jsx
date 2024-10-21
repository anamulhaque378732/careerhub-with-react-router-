
import { TfiMoney } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Jobs = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="text-center border border-stone-600 rounded-lg">
            <div className="card bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={logo}
                        alt="jobs"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{job_title}</h2>
                    <p> {company_name}</p>
                    <div className="flex gap-4">
                        <button className="p-2 m-2 hover:bg-lime-300 font-bold border rounded-md border-green-100">  {remote_or_onsite}</button>
                        <button className="p-2 m-2 font-bold hover:bg-teal-700 border rounded-md border-red-900"> {job_type}</button>
                    </div>
                    <div className="flex gap-2 ">
                        <div className="flex gap-2">
                            <p className="mt-2 text-2xl">     <FaLocationDot></FaLocationDot></p>
                            <h2 className="text-2xl"> {location}</h2>
                        </div>
                        <div className="flex gap-1">
                            <p className="mt-1 text-2xl"><TfiMoney></TfiMoney></p>
                            <h2 className="text-2xl"> {salary}</h2>
                        </div>
                    </div>

                    <div className="card-actions">
                        <Link to={`/job/${id}`}>  <button className="btn text-2xl font-medium hover:bg-indigo-700 btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;