import React from 'react';

const Study = ({ date, title, description }) => {
    return (
        <li className="ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-400 bg-gray-200 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {title}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </li>
    );
};

export default Study;
