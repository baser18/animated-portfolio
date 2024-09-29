import {useRef} from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({type}) => {

    const ref = useRef()

    const{scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg=useTransform(scrollYProgress, [0,1], ["0%", "100%"])
    return (
    <div className="parallax"
    ref={ref}
    style={{
        background:
        type === "services" 
        ? "linear-gradiant(180deg, black, grey)"
        : "linear-gradiant(180deg, black, grey)"
        }}
    >
    
        <motion.h1 style={{y:yText}}>{type==="services" ? "What Services we offer?" : "Some of the work we Did!"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
        <motion.div style={{x:yBg}}className="stars"></motion.div>
    </div>
  )
}

export default Parallax
