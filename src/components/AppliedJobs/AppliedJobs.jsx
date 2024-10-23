import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../Uitility/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'All') {
            setDisplayJobs(appliedJobs)
        } else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)

        } else if (filter === 'Onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }


 



useEffect(() => {
    const storeJobIds = getStoreJobApplication();
    if (jobs.length > 0) {
        //const JobsApplied = jobs.filter(job => storeJobIds.includes(job.id))


        const jobsApplied = [];
        for (let id of storeJobIds) {
            const job = jobs.find(job => job.id === id);
            if (job) {
                jobsApplied.push(job)
            }
        };
        setAppliedJobs(jobsApplied)
        setDisplayJobs(jobsApplied)
    
    }


}, [jobs]);


return (
    <div>

        <div className="">
            <h2 className="text-4xl text-center my-5 font-bold "> Jobs i Applied {appliedJobs.length}</h2>
        </div>
        <div className=" text-right">
            <details className="dropdown ">
                <summary className="btn m-1 text-2xl font-medium">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobsFilter('All')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('Remote')}><a>Remote </a></li>
                    <li onClick={() => handleJobsFilter('Onsite')}><a>Onside </a></li>
                </ul>
            </details>
        </div>

        <div className="my-10">
            {
                displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
        </div>
    </div>
)
};

export default AppliedJobs;