import "./hero.scss";
import {motion} from "framer-motion";


const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };
  
  const Hero = () => {
    return (
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>EMILY LIU</motion.h2>
            <motion.h1 variants={textVariants}>
              Video Portfolio
            </motion.h1>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas amet tempora perferendis. Rerum quos repellendus nisi consectetur quae et quisquam facilis vero earum, tempore error modi molestias, voluptatem velit sunt. </h3>
            <motion.div variants={textVariants} className="buttons">
              <motion.button variants={textVariants}>
                See the Latest Work
              </motion.button>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Best Animation Videos Podcast
        </motion.div>
        <div className="imageContainer">
          <img src="" alt="" />
        </div>
      </div>
    );
  };
  
  export default Hero;
