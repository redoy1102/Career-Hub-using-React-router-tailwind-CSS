import Banner from "../Banner/Banner.jsx";
import Categories from "../Categories/Categories.jsx";
import Jobs from "../Jobs/Jobs.jsx";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/*responsive done*/}
            <Categories></Categories>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;