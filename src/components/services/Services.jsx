import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

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
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Nunca pares de aprender
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#ffb400"}}>FullStack</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#ffb400"}}>Developer</motion.b>
          </h1>
          <button>
            <a href="https://github.com/robydinca" target="blank" className="enlanceGithub">
              <img src="githubButton.svg" alt="" className="imgGithub" />
              robydinca</a>
          </button>
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", borderRadius:"20px", border: "none" }}
        >
          <h2>Frontend</h2>
            <div className="imgContainer">
              <img src="html.png" alt="" />
              <img src="css.png" alt="" />
              <img src="js.png" alt="" />
              <img src="react.jpg" alt="" />
              <img src="sass.png" alt="" />
              <img src="figma.png" alt="" />
            </div>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", borderRadius:"20px", border: "none"   }}
        >
          <h2>Backend</h2>
          <div className="imgContainer">
              <img src="php.png" alt="" />
              <img src="laravel.png" alt="" />
              <img src="java.jpg" alt="" />
              <img src="python.png" alt="" />
              <img src="node.jpg" alt="" />
              <img src="wordpress.png" alt="" />
            </div>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", borderRadius:"20px", border: "none"   }}
        >
          <h2>Herramientas</h2>
          <div className="imgContainer">
              <img src="git.png" alt="" />
              <img src="aws.png" alt="" />
              <img src="bash.png" alt="" />
              <img src="docker.svg" alt="" />
              <img src="nginx.jpg" alt="" />
              <img src="apache.png" alt="" />
            </div>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" , borderRadius:"20px", border: "none"  }}
        >
          <h2>Bases de Datos</h2>
          <div className="imgContainer">
              <img src="mysql.png" alt="" />
              <img src="mariadb.png" alt="" />
              <img src="mongodb.png" alt="" />
              <img src="postgre.svg" alt="" />
              <img src="phpmyadmin.png" alt="" />
              <img src="datagrip.png" alt="" />
            </div>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
