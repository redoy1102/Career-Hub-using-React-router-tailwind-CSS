import React from 'react';

// eslint-disable-next-line react/prop-types
const Category = ({category}) => {
    // console.log(category)
    const {id, logo, category_name, availability} = category;
    return (
        <div className="flex flex-col justify-center items-center bg-slate-50 p-6">
            <img
                src={logo}
                alt="Category logo"
                className="w-10 h-10 mb-8"
            />
            <h1 className="text-base font-extrabold text-[#474747] mb-2">{category_name}</h1>
            <p className="text-base font-medium text-[#A3A3A3]">{availability}</p>
        </div>
    );
};

export default Category;