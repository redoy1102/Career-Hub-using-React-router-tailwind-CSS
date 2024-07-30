import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-32 mt-10">

                <div>
                    <h1 className="text-7xl font-extrabold mb-6">One Step Closer To Your Dream Job</h1>
                    <p className="text-lg font-medium text-[#757575] mb-8">Explore thousands of job opportunities with
                        all the information you need. Its your future. Come
                        find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-active font-extrabold text-xl btn-gradient">Get Started</button>
                </div>


                <div>
                    <img src="../../../src/assets/images/user.png" alt="User image"/>
                </div>


            </div>
        </div>
    );
};

export default Banner;