import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './modal.scss'

const Modal = ({ open, onClose }) => {
  const [currentFolder, setCurrentFolder] = useState(null) // Estado para rastrear la carpeta actual
  const [folderHistory, setFolderHistory] = useState([]) // Historial de carpetas visitadas

  const modalVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      y: '-100vh',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  }

  const navigateToFolder = folderName => {
    setFolderHistory([...folderHistory, currentFolder]) // Agregar la carpeta actual al historial
    setCurrentFolder(folderName) // Establecer la carpeta actual
  }

  const navigateBack = () => {
    const previousFolder = folderHistory.pop() // Obtener la carpeta anterior del historial
    setCurrentFolder(previousFolder) // Establecer la carpeta anterior como la actual
    setFolderHistory([...folderHistory]) // Actualizar el historial
  }

  // Función para renderizar el contenido de las carpetas
  const renderFolders = () => {
    // Lógica para mostrar el contenido de las carpetas según la carpeta actual
    // Puedes personalizar esto según tu estructura de carpetas
    if (currentFolder === null) {
      // Mostrar carpetas iniciales
      return (
        <div className='folders'>
          <motion.button
            className='folder'
            onClick={() => navigateToFolder('Frontend')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src='/folder.svg' alt='folder' />
            <h2>Frontend</h2>
          </motion.button>
          <motion.button
            className='folder'
            onClick={() => navigateToFolder('Backend')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src='/folder.svg' alt='folder' />
            <h2>Backend</h2>
          </motion.button>
        </div>
      )
    } else if (currentFolder === 'Frontend') {
      // Mostrar 'Headers' dentro de 'Frontend'
      return (
        <div className='folders'>
          <button className='backBtn' onClick={navigateBack}></button>
          <motion.button
            className='folder'
            onClick={() => navigateToFolder('Headers')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src='/folder.svg' alt='folder' />
            <h2>Headers</h2>
          </motion.button>
          <motion.button
            className='folder'
            onClick={() => navigateToFolder('Responsive')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src='/folder.svg' alt='folder' />
            <h2>Responsive</h2>
          </motion.button>
          <motion.button
            className='folder'
            onClick={() => navigateToFolder('Bootstrap')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src='/folder.svg' alt='folder' />
            <h2>BootStrap</h2>
          </motion.button>
        </div>
      )
    } else if (currentFolder === 'Bootstrap') {
      // Mostrar solo el elemento 'Landing Page' dentro de 'Bootstrap'
      return (
        <div className='folders'>
          <button className='backBtn' onClick={navigateBack}></button>
          <motion.button
            className='folder'
            onClick={() => navigateToFolder('Landing Page')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src='/folder.svg' alt='folder' />
            <h2>Landing Page</h2>
          </motion.button>
        </div>
      );
    }
    
    else if (currentFolder === 'Headers') {
      // Mostrar las 10 carpetas dinámicas de 'Header 1' a 'Header 10'
      const headerFolders = Array.from(
        { length: 10 },
        (_, index) => `Header ${index + 1}`
      )
      return (
        <div className='folders'>
          <button className='backBtn' onClick={navigateBack}></button>
          {headerFolders.map((folder, index) => (
            <motion.button
              key={index}
              className='folder'
              onClick={() => navigateToFolder(folder)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src='/folder.svg' alt='folder' />
              <h2>{folder}</h2>
            </motion.button>
          ))}
        </div>
      )
    } else if (currentFolder === 'Responsive') {
      // Mostrar las 10 carpetas dinámicas de 'Header 1' a 'Header 10'
      const responsiveFolders = Array.from(
        { length: 4 },
        (_, index) => `Responsive ${index + 1}`
      )
      return (
        <div className='folders'>
          <button className='backBtn' onClick={navigateBack}></button>
          {responsiveFolders.map((folder, index) => (
            <motion.button
              key={index}
              className='folder'
              onClick={() => navigateToFolder(folder)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src='/folder.svg' alt='folder' />
              <h2>{folder}</h2>
            </motion.button>
          ))}
        </div>
      )
    } else if (currentFolder.includes('Responsive 1')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/Responsive-1-demo/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/Responsive-1'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Responsive 2')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/Responsive-2-demo/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/Responsive-2'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    }
    else if (currentFolder.includes('Responsive 3')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/Responsive-3-demo/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/Responsive-3'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    }
    else if (currentFolder.includes('Responsive 4')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/Responsive-4/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/Responsive-4'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    }
    else if (currentFolder === ('Header 1')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-1/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-1'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Header 2')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-2/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-2'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Header 3')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-3/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-3'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Header 4')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-4/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-4'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Header 5')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-5/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-5'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Header 6')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-6/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-6'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Header 7')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-7/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-7'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Header 8')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-8/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-8'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder.includes('Header 9')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-9/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-9'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } else if (currentFolder === 'Bootstrap' && !folderHistory.length) {
      // Mostrar carpetas dentro de 'Landing Page' de 'Bootstrap'
      const landingPageFolders = ['Landing Page']; // Puedes agregar más carpetas según sea necesario
    
      return (
        <div className='folders'>
          <button className='backBtn' onClick={navigateBack}></button>
          {landingPageFolders.map((folder, index) => (
            <motion.button
              key={index}
              className='folder'
              onClick={() => navigateToFolder(folder)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src='/folder.svg' alt='folder' />
              <h2>{folder}</h2>
            </motion.button>
          ))}
        </div>
      );
    } else if (currentFolder === 'Landing Page') {
      // Mostrar contenido de 'Landing Page'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {/* Contenido específico de 'Landing Page' */}
          <div className='container'>
            <a
              href='https://robydinca.github.io/bootstrap-landing/'  // Reemplaza con la URL correcta del demo
              target='blank'
              className='demo'
            >
              <img src='/demo.png' />
              <h2>Demo</h2>
            </a>
            <a
              href='https://github.com/robydinca/bootstrap-landing'  // Reemplaza con la URL correcta del código fuente
              target='blank'
              className='source'
            >
              <img src='/source.png' />
              <h2>Source</h2>
            </a>
          </div>
        </div>
      );
    }else if (currentFolder === ('Header 10')) {
      // Mostrar el contenido de 'Header 1'
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {
            <div class='container'>
              <a
                href='https://robydinca.github.io/header-10/'
                target='blank'
                className='demo'
              >
                <img src='/demo.png' />
                <h2>Demo</h2>
              </a>
              <a
                href='https://github.com/robydinca/header-10'
                target='blank'
                className='source'
              >
                <img src='/source.png' />
                <h2>Source</h2>
              </a>
            </div>
            /* Contenido de 'Header 1' */
          }
        </div>
      )
    } 
    else {
      // Mostrar el contenido de la carpeta actual
      return (
        <div>
          <button className='backBtn' onClick={navigateBack}></button>
          {/* Contenido de la carpeta actual */}
        </div>
      )
    }
  }

  // Función para renderizar la ruta de directorios
  const renderDirectoryPath = () => {
    // Mostrar la ruta interactiva basada en el historial y la carpeta actual
    const path = [...folderHistory, currentFolder].filter(Boolean) // Filtrar elementos nulos
    return (
      <div className='directoryPath'>
        {path.map((folder, index) => (
          <span key={index} onClick={() => setCurrentFolder(folder)}>
            {folder}
            {index !== path.length - 1 && ' > '}
          </span>
        ))}
      </div>
    )
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='overlay'
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={modalVariants}
        >
          <div
            onClick={e => {
              e.stopPropagation()
            }}
            className='modalContainer'
          >
            <button className='closeBtn' onClick={onClose}>
              <img src='/close2.svg' alt='close' />
            </button>
            {renderDirectoryPath()}
            {renderFolders()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
