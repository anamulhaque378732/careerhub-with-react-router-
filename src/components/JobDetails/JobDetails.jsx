import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { IoIosBriefcase } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Uitility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information } = job;

    const { phone, email, address } = contact_information;
    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have applied successfully');
    };

    return (
        <div className="">
            <h2 className="text-3xl text-center font-semibold mb-10 mt-6">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border p-4 rounded-lg md:col-span-3">
                    <h2 className="text-3xl mb-4"> Job Description : <span className="text-xl text-slate-100">{job_description}</span></h2>
                    <h2 className="text-3xl mb-4"> Job Responsibility : <span className="text-xl text-slate-100">{job_responsibility}</span></h2>
                    <div>

                        <h2 className="text-3xl mb-2"> Educational Requirements :
                        </h2>
                        <p> <span className="text-xl  text-slate-100">{educational_requirements}</span></p>
                    </div>
                    <div className="mb-2">
                        <h2> Experience:</h2>
                        <p>{experiences}</p>

                    </div>

                </div>

                <div className="border rounded-xl p-4">
                    <h2 className="mb-4 text-2xl font-medium">Job details :</h2> <hr />
                    <div className="flex gap-1 mt-4">
                        <p>  <CiDollar className="text-xl mt-1 text-blue-500"></CiDollar></p>
                        <p className=" text-xl">      {salary}</p>

                    </div>
                    <div className="mt-4 flex gap-1">
                        <p className="text-xl mt-1 text-blue-500"><IoIosBriefcase></IoIosBriefcase></p>
                        <p className="  text-xl">{job_title}</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-3xl font-semibold mb-4">Contact Info :</h3> <hr />
                    </div>
                    <div className="mt-4">
                        <div className="flex gap-2 mt-2 ">
                            <p className="text-xl mt-1 text-blue-500"><FaPhoneAlt></FaPhoneAlt></p>
                            <p className="text-xl">Phone :  <span className="text-base">{phone}</span> </p>
                        </div>
                        <div className="flex gap-2 mt-2 ">
                            <p className="text-xl mt-1 text-blue-500">   <MdOutlineForwardToInbox></MdOutlineForwardToInbox></p>
                            <p className="text-xl">Email :  <span className="text-base">{email}</span></p>
                        </div>
                        <div className="flex gap-2 mt-2  ">
                            <p className="mt-1 text-2xl text-blue-400"><CiLocationOn></CiLocationOn></p>
                            <p className="text-xl">Address :  <span className="text-base">{address}</span> </p>
                        </div>
                        <div className="mt-6 text-center ">
                            <Link> <button onClick={handleApplyJob} className="text-xl font-semibold w-full  p-4 rounded-md  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."> Apply Now</button></Link>
                        </div>
                    </div>

                </div>


            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;