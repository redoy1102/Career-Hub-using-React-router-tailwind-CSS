import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import {Link} from "react-router-dom";


const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
            <div className="bg-base-100 shadow-xl p-10">
                <img className="mb-8" src={logo} alt="Company image"/>
                <h1 className="text-2xl font-extrabold color-[#474747] mb-2">{job_title}</h1>
                <h1 className="text-xl font-semibold text-[#757575] mb-4">{company_name}</h1>
                <button className="btn btn-outline btn-primary mr-4">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-primary mb-4">{job_type}</button>
                <div className="flex gap-6 mb-6">
                    <div className="flex gap-1 items-center">
                        <CiLocationOn />
                        <p className="text-base font-semibold text-[#757575]">{location}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <AiOutlineDollar />
                        <p className="text-base font-semibold text-[#757575]">Salary : {salary}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`}>
                    <button className="btn btn-active font-extrabold text-xl btn-gradient text-white">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Job;