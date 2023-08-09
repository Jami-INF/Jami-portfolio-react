import React from 'react';

const Work = ({ logoSrc, title, date, description }) => {
    return (
        <li className="m-4">
            <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                    <img className="w-20" src={logoSrc} alt="" />
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {title}
                    </h3>
                    <time className="italic mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                        {date}
                    </time>
                    <p className="text-sm font-normal text-gray-600 dark:text-gray-200">
                        {description}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default Work;
