import PropTypes from 'prop-types';
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
                    <p className='text-xl'> {company_name}</p>
                    <div className="flex gap-4">
                        <button className="p-2 m-2 hover:bg-lime-300 font-bold border rounded-md text-[#7E90FE]  border-green-100">  {remote_or_onsite}</button>
                        <button className="p-2 text-[#7E90FE]  m-2 font-bold hover:bg-teal-700 border rounded-md border-red-900"> {job_type}</button>
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
                        <Link to={`/job/${id}`}>  <button className="btn text-black hover:bg-cyan-700 text-2xl font-medium  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... ">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Jobs.propTypes = {
    job: PropTypes.object.isRequired
}
export default Jobs;