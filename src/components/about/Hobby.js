import React from 'react';

const Hobby = ({ title, description, imgSrc }) => {

    return (
        <div className="text-gray-800 dark:text-white bg-white dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-sm bg-opacity-40 rounded-lg text-center">
            <div className="relative w-full h-32 md:h-48">
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>
            <h2 className="text-xl text-black dark:text-white font-semibold m-2">{title}</h2>
            <p className="text-sm text-gray-800 dark:text-white m-6">{description}</p>
        </div>

    );
};

export default Hobby;
