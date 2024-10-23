
import p from '../../images/user.png'

const Banner = () => {
    return (
        <div className="md:border  md:border-green-500  mt-10 rounded-2xl md:p-4">

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={p}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6">

                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>

                        <button className="btn p-2  hover:from-pink-500 hover:to-orange-500 ... text-center  font-medium bg-gradient-to-r from-indigo-500 ... ">Get Started</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;