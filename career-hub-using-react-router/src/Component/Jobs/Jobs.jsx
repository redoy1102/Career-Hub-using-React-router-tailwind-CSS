import './Jobs.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {CirclesWithBar} from "react-loader-spinner";
import Job from "../Job/Job.jsx";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('jobs.json')
            .then(res => (setJobs(res.data), setLoading(false)));
    },[])
    return (
        <div className="mb-32">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold mb-4">Featured Jobs</h1>
                <p className="text-base font-medium">Explore thousands of job opportunities with all the information you
                    need. Its your future</p>
            </div>


            {/*spinner */}
            <div className="flex justify-center items-center">
                {
                    loading && <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                }
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
                {
                    jobs.map((job) => <Job key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default Jobs;