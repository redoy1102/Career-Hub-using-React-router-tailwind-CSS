import {CiLocationOn} from "react-icons/ci";
import {AiOutlineDollar} from "react-icons/ai";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AppliedJob = ({appliedJob}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = appliedJob;
    console.log(appliedJob);
    return (
        <div>
            {/*card container*/}
            <div
                className="flex justify-between items-center mb-6 p-7 border-2 border-indigo-500/50 rounded-lg shadow-lg">
                {/*img and text-container*/}
                <div className="flex justify-start items-center gap-6">
                    <div>
                        <img src={logo} alt="company logo" className="w-36 h-12"/>
                    </div>


                    <div>
                        {/*<h1 className="text-2xl font-extrabold color-[#474747] mb-2">{id}</h1>*/}
                        <h1 className="text-2xl font-extrabold color-[#474747] mb-2">{job_title}</h1>
                        <h1 className="text-xl font-semibold text-[#757575] mb-4">{company_name}</h1>
                        <button className="btn btn-outline btn-primary mr-4">{remote_or_onsite}</button>
                        <button className="btn btn-outline btn-primary mb-4">{job_type}</button>
                        <div className="flex gap-6 mb-6">
                            <div className="flex gap-1 items-center">
                                <CiLocationOn/>
                                <p className="text-base font-semibold text-[#757575]">{location}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <AiOutlineDollar/>
                                <p className="text-base font-semibold text-[#757575]">Salary : {salary}</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/*for view details button*/}
                <div>
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-active font-extrabold text-xl btn-gradient text-white">View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;