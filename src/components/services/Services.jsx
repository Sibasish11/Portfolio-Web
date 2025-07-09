import ComputerModelContainer from "./computer/ComputerModelContainer";
import Counter from "./Counter";
import "./services.css"
import { motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";


const textVariants = {
    initial: {
        x: -100,
        y: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

const listVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        },
    },
};


const services = [
    {
        id: 1,
        img: "/service1.png",
        title: "Artificial Intelligence And Machine Learning",
        counter: " Intelligent Systems Architectures",
    },
    {
        id: 2,
        img: "/service2.png",
        title: "Data Structures And Algorithms",
        counter: "Optimized Computational Logic",
    },
    {
        id: 3,
        img: "/service3.png",
        title: "Hackathons",
        counter: "Innovation Under Pressure",
    },
];

const Services = () => {
    const [currentServiceId, setCurrentServiceId] = useState(1);
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-200px" });
    return (
        <div className='services'ref={ref}>
            <div className="sSection left">
                <motion.h1 variants={textVariants} animate={isInView ? "animate" : "initial"} className="sTitle">
                    My Core Competencies:
                </motion.h1>
                <div className="serviceList">
                    {services.map((service) => (
                        <div className="service" key={service.id}>
                            <div className="serviceIcon">
                                <img src={service.img} alt="" />
                            </div>
                            <div className="serviceInfo">
                                <h2>{service.title}</h2>
                                <h3>{service.counter}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="counterList">
                    <Counter from={0} to={15} text="Projects Completed" />
                    <Counter from={0} to={8} text="Certificates Earned" />
                </div>
            </div>
            <div className="sSection right">
                <ComputerModelContainer />
            </div>
        </div>
    );
};

export default Services;