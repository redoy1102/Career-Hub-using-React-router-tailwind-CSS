import {useLoaderData} from "react-router-dom";
import {getJobApplication} from "../../Utility/localStorage.js";
import {useEffect, useState} from "react";
import AppliedJob from "../AppliedJob/AppliedJob.jsx";
import {Helmet} from "react-helmet-async";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const [textFilterButton, setTextFilterButton] = useState("Filter");
    // original data
    const jobs = useLoaderData();

    useEffect(() => {
        const appliedJobsId = getJobApplication();
        const appliedJobsIdInt = appliedJobsId.map(Number);
        const allFilteredJobs = jobs.filter(job => appliedJobsIdInt.includes(job.id))
        setAppliedJobs(allFilteredJobs);
        setDisplayJobs(allFilteredJobs);

    }, [jobs])

    const handleFilterJob = (criteria) => {
        if(criteria === "all"){
            setDisplayJobs(appliedJobs);
        }
        else if(criteria === "onsite"){
            const onsiteJob = appliedJobs.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayJobs(onsiteJob);
        }
        else if(criteria === "remote"){
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === "Remote")
            setDisplayJobs(remoteJob)
        }
    }

    return (
        <div className="mb-6 mt-10">
            <Helmet>
                <title>Career Hub | Applied Jobs</title>
            </Helmet>
            {/*dropdown for filter button*/}
            <div className="dropdown mb-8 flex justify-end">
                <div tabIndex={0} role="button" className="btn m-1">Filter - {textFilterButton}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => (handleFilterJob("all"), setTextFilterButton("All"))}><a>All</a></li>
                    <li onClick={() => (handleFilterJob("remote"), setTextFilterButton("Remote"))}><a>Remote</a></li>
                    <li onClick={() => (handleFilterJob("onsite"), setTextFilterButton("Onsite"))}><a>Onsite</a></li>
                </ul>
            </div>


            {
                displayJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;