import {useLoaderData, useParams} from "react-router-dom";
import {AiOutlineDollar} from "react-icons/ai";
import {CiLocationOn, CiPhone} from "react-icons/ci";
import {MdOutlineEmail, MdOutlineSubtitles} from "react-icons/md";
import '../Banner/Banner.css'

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id === Number(id));

    const {job_title, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information} = job;
    return (
        <div className="my-24">
            <div className="grid gap-6 grid-cols-12">
                <div className="col-span-8 text-base">
                    <h1 className="text-justify mb-6">
                        <span className="font-extrabold">Job Description: </span>
                        <span className="text-slate-500 font-medium">{job_description}</span>
                    </h1>
                    <h1 className="text-justify mb-6">
                        <span className="font-extrabold">Job Responsibility: </span>
                        <span className="text-slate-500 font-medium">{job_responsibility}</span>
                    </h1>
                    <p className="font-extrabold mb-4">Educational Requirements:</p>
                    <p className="text-slate-500 font-medium mb-6">{educational_requirements}</p>
                    <p className="font-extrabold mb-4">Experiences:</p>
                    <p className="text-slate-500 font-medium">{experiences}</p>
                </div>

                <div className="col-span-4 text-lg">
                    <div className="p-5 bg-slate-300 rounded-lg mb-6">
                        <h1 className="font-extrabold mb-6">Job Details</h1>
                        <hr className="mb-6"/>
                        <div className="flex gap-1 items-center mb-4">
                            <AiOutlineDollar/>
                            <p className="text-base font-semibold text-[#757575]">
                                <span className="font-bold text-[#757575]">Salary : </span>{salary} (Per Month)
                            </p>
                        </div>
                        <div className="flex gap-1 items-center mb-8">
                            <MdOutlineSubtitles/>
                            <p className="text-base font-semibold text-[#757575]">
                                <span className="font-bold text-[#757575]">Job Title : </span>{job_title}
                            </p>
                        </div>

                        <h1 className="font-extrabold mb-6">Contact Information</h1>
                        <hr className="mb-6"/>
                        <div className="flex gap-1 items-center mb-4">
                            <CiPhone/>
                            <p className="text-base font-semibold text-[#757575]">
                                <span className="font-bold text-[#757575]">Phone : </span>{contact_information.phone}
                            </p>
                        </div>
                        <div className="flex gap-1 items-center mb-4">
                            <MdOutlineEmail/>
                            <p className="text-base font-semibold text-[#757575]">
                                <span className="font-bold text-[#757575]">Email : </span>{contact_information.email}
                            </p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <CiLocationOn/>
                            <p className="text-xs font-semibold text-[#757575]">
                                <span
                                    className="font-bold text-[#757575]">Address : </span>{contact_information.address}
                            </p>
                        </div>
                    </div>

                    <button className="w-full btn btn-active font-extrabold text-xl btn-gradient text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;