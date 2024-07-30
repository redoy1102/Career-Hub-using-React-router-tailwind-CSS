import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

const Root = () => {
    return (
        <div className="mx-52">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;