import "./portfolio.css"
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";



const items = [
    {
        id: 1,
        img: "/SIYA.png",
        title: "SIYA AI: AI FOR DYSLEXIC STUDENTS",
        desc: "SiyaAI is an innovative project that creates an user friendly environment for students to have productive education. It primarily not only aids the hardships faced by Dyslexic students but also has advanced features like TTS, STT, image creation, focus mode, multilinguary assets.",
        link: "/",
    },
    {
        id: 2,
        img: "/stry.png.png",
        title: "StoryTelling Web App",
        desc: "A web application designed to create and interactive stories and is based on concept of Generative AI. It allows users to write, edit, and publish their own stories.",
        link: "https://stryteller.netlify.app/",
    },
    {
        id: 3,
        img: "/cn.png.png",
        title: "Complex Number Calculator",
        desc: "A web-based complex number calculator with an interactive Argand plane visualization, built using Streamlit and Plotly. This application allows users to perform various operations on complex numbers, visualize them on an Argand diagram, and view calculation history.",
        link: "/",
    },
    {
        id: 4,
        img: "/futbol.png.png",
        title: "Player Detection System",
        desc: "Asystem designed to detect players in a football match using computer vision techniques. It utilizes advanced algorithms to identify and track players on the field, providing real-time insights and analysis of player movements.",
        link: "/",
    },
    {
        id: 5,
        img: "/portfolio.png.png",
        title: "Animated Portfolio Website",
        desc: "An animated portfolio website is a visually engaging online platform that showcases an individual's or a company's work, skills, and achievements through dynamic animations and transitions.",
        link: "/",
    },
];

const imgVariants = {
    initial: {
        x: -500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const textVariants = {
    initial: {
        x: 500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.05,
        },
    },
};




const ListItem = ({ item }) => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <div className="pItem" ref={ref}>
            <motion.div
                variants={imgVariants}
                animate={isInView ? "animate" : "initial"}
                className="pImg">
                <img src={item.img} alt="" />
            </motion.div>
            <motion.div
                variants={textVariants}
                animate={isInView ? "animate" : "initial"}
                className="pText">
                <motion.h1 variants={textVariants}>{item.title}</motion.h1>
                <motion.p variants={textVariants} >{item.desc}</motion.p>
                <motion.a variants={textVariants} href={item.link}>
                    <button>View Project</button>
                </motion.a>
            </motion.div>
        </div>

    );
};

const Portfolio = () => {

    const [containerDistance, setContainerDistance] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const calculateDistance = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setContainerDistance(rect.left);
            }
        };

        calculateDistance();

        window.addEventListener("resize", calculateDistance);

        return () => {
            window.removeEventListener("resize", calculateDistance);
        };
    }, []);


    const { scrollYProgress } = useScroll({ target: ref })

    const xTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -window.innerWidth * items.length]
    );


    return (
        <div className="portfolio" ref={ref}>
            <motion.div className="pList" style={{ x: xTranslate }}>
                <div
                    className="empty"
                    style={{
                        width: window.innerWidth - containerDistance,
                    }}
                />

                {items.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))
                }
            </motion.div>
            <section />
            <section />
            <section />
            <section />
            <section />

            <div className="pProgress">
                <svg width="100%" height="100%" viewBox="0 0 160 160">
                    <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#ddd"
                        strokeWidth={20}
                    />
                    <motion.circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#dd4c62"
                        strokeWidth={20}
                        style={{ pathLength: scrollYProgress }}
                        transform="rotate(-90 80 80)"
                    />
                </svg>

            </div>

        </div>
    );
};


export default Portfolio;