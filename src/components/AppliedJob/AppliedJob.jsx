import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TfiMoney } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
const AppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;


    return (
        <div className=" md:flex border border-cyan-500 my-5 p-4 rounded-2xl justify-between mx-8">

            <div className="  border border-cyan-900  rounded-xl p-4 my-auto">
                <img className="w-48 rounded-xl  my-auto" src={logo} alt="" />
            </div>
            <div>
                <h2 className="text-3xl font-bold">{job_title}</h2>
                <h2 className="text-2xl font-medium"> {company_name}</h2>
                <div className="flex gap-4 ">
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
            </div>
            <div>
                <Link to={`/job/${id}`}> <button className="btn mt-10 p-2 text-xl font-medium rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."> View Details</button></Link>
            </div>
        </div>

    );
};

AppliedJob.propTypes = {
    job: PropTypes.object.isRequired
}

export default AppliedJob;