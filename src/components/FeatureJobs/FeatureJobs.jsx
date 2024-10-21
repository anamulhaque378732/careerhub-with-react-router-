import { useEffect } from "react";
import { useState } from "react";
import Jobs from "../Jobs/Jobs";



const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is the best way to load show all the data
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);


    return (
        <div className="my-10">
            <h2 className="text-center text-5xl font-semibold p-2"> Featured Jobs </h2>
            <p className="text-center font-normal text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>


            <div className=" text-center mt-10    grid  sm:grid-cols-1 md:grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Jobs job={job} key={job.id}></Jobs>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>

                <div className="text-center">
                    <button onClick={() => setDataLength(jobs.length)} className=" p-4 m-2 text-2xl font-normal rounded-md  bg-blue-800 mt-8">Show all Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJobs;