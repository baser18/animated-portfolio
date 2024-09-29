import {useRef} from "react";
import "./services.scss";
import { color, motion, useInView } from "framer-motion";

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,

        }
    }
}


const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
  
    return (
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow <br/> and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>
                Project Title
            </h2>
            <p>
                This is the text describing the project to showcase in this box 
                bla bla bla the look of this will hjave to change uite a bit.
                I will use this to keep a note of what I have done untill now
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>
                Project Title 1
            </h2>
            <p>
                This is the text describing the project to showcase in this box 
                bla bla bla the look of this will hjave to change uite a bit.
                I will use this to keep a note of what I have done untill now
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>
                Project Title 2
            </h2>
            <p>
                This is the text describing the project to showcase in this box 
                bla bla bla the look of this will hjave to change uite a bit.
                I will use this to keep a note of what I have done untill now
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>
                Project Title 3
            </h2>
            <p>
                This is the text describing the project to showcase in this box 
                bla bla bla the look of this will hjave to change uite a bit.
                I will use this to keep a note of what I have done untill now
            </p>
            <button>Go</button>
        </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services
