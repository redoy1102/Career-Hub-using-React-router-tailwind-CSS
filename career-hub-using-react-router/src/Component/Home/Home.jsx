import Banner from "../Banner/Banner.jsx";
import Categories from "../Categories/Categories.jsx";
import Jobs from "../Jobs/Jobs.jsx";
import {Helmet} from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            {/*responsive done*/}
            <Categories></Categories>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;