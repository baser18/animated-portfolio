import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Animations",
        videoUrl: "https://www.youtube.com/embed/9t8Zlo79RSs",
        img: "https://images.pexels.com/photos/417070/pexels-photo-417070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in aliquid quibusdam culpa delectus ipsum error, velit ullam. Mollitia labore quibusdam nam dolor illo eaque repudiandae voluptatibus expedita molestiae repellendus!",
    },
    {
        id: 2,
        title: "Podcast",
        img: "https://images.pexels.com/photos/1181658/pexels-photo-1181658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in aliquid quibusdam culpa delectus ipsum error, velit ullam. Mollitia labore quibusdam nam dolor illo eaque repudiandae voluptatibus expedita molestiae repellendus!",
    },
    {
        id: 3,
        title: "Snippets",
        img: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in aliquid quibusdam culpa delectus ipsum error, velit ullam. Mollitia labore quibusdam nam dolor illo eaque repudiandae voluptatibus expedita molestiae repellendus!",
    },
    {
        id: 4,
        title: "Videos",
        img: "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in aliquid quibusdam culpa delectus ipsum error, velit ullam. Mollitia labore quibusdam nam dolor illo eaque repudiandae voluptatibus expedita molestiae repellendus!",
    },
];

const Single = ({ item, handleOpenModal }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className={item.videoUrl ? "imageContainer": "imageContainer"} ref={ref}>
                        {item.videoUrl ? (
                            <iframe
                                width="99%"
                                height="500"
                                src={item.videoUrl}
                                title={item.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img src={item.img} alt={item.title} />
                        )}
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => handleOpenModal(item)}>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar" />
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;