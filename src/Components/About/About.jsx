import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const data =useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>about us</h1>
        </div>
    );
};

export default About;