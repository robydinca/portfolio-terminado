import { useRef } from "react";
import { useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Modal from "../modal/Modal";


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
  const [openModal, setOpenModal] = useState(false);

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
          <h1><motion.b onClick={() => setOpenModal(true)}
            className='modalButton box'
            whileHover={{ color: "#ffb400" }}
        >FullStack</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b className='modalButton after' onClick={() => setOpenModal(true)} whileHover={{ color: "#ffb400" }}>Developer</motion.b>
          </h1>
          <div className="enlaceGithub">
      <motion.a
        href="https://github.com/robydinca"
        target="_blank"
        className="enlaceGithub"
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Ejemplo de animación al hacer hover
      >
        <img src="githubButton.svg" alt="" className="imgGithub" />
        robydinca
      </motion.a>
    </div>
        </div>
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)} />
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div
            className='box'
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
        </div>
        <motion.div
          className="box"
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
        >
          <h2>Bases de Datos</h2>
          <div className="imgContainer">
            <img src="mysql.png" alt="" />
            <img src="mariadb.png" alt="" />
            <img src="mongo.png" alt="" />
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
