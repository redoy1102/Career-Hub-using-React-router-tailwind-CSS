import './Categories.css'
import {useEffect, useState} from "react";
import axios from "axios";
import Category from "../Category/Category.jsx";
import {CirclesWithBar} from "react-loader-spinner";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [categoryLoading, setCategoryLoading] = useState(true);

    // console.log(categories)

    useEffect(() => {
        axios.get('categories.json')
            .then(res => (setCategories(res.data), setCategoryLoading(false)))
    },[])

    return (
        <div className="mb-32">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold mb-4">Job Category List</h1>
                <p className="text-base font-medium">Explore thousands of job opportunities with all the information you
                    need. Its your future</p>
            </div>

            {/*Spinner*/}
            <div className="flex justify-center items-center">
                {
                    categoryLoading && <CirclesWithBar
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

            <div className="grid grid-cols-4 gap-6">
                {
                    categories.map((category) => <Category category={category} key={category.id}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;