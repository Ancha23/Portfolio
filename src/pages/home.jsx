import React from 'react';
import { Header } from '../componnts/header/header';
import { Footer } from '../componnts/footer/footer';
import { motion } from 'framer-motion';

export const Home = () => {

    return (
        <>
            <Header />
            <div
  style={{
    position: 'relative', // Define a posição relativa para que os elementos internos possam ser posicionados em relação a este contêiner
    height: '100vh', // Ajuste a altura conforme necessário
    overflow: 'hidden', // Garante que nada saia dos limites do contêiner
  }}
>
  {/* Elemento para a imagem de fundo */}
  <div
    style={{
      position: 'absolute', // Faz com que a imagem de fundo cubra todo o contêiner
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/img/foto1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: '0.4', // Aplica opacidade apenas à imagem de fundo
    }}
  />
  
  {/* Conteúdo sobre a imagem */}
  <div
    style={{
      position: 'relative',
      color: 'white', // Cor do texto
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Centraliza o texto
      height: '100%', // Faz com que o conteúdo ocupe toda a altura do contêiner
    }}
  >
<h1 className='text-white text-6xl font-bold -mt-36'>
        { "ANCHA CATARINA".split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.09,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>    
      <h2 className='text-white text-3xl mt-10'>Software Developer</h2>
      <p className=' mt-10'
      style={{ color: '#70e000',
        opacity:'0.7'
       }}
      >
        { "Sou uma Programadora Júnior com uma formação sólida em Telecomunicações e uma paixão por tecnologia e design.\nMinha jornada na programação começou com o desejo de criar soluções tecnológicas inovadoras e eficazes, e desde\nentão, tenho me dedicado a aprimorar minhas habilidades em várias áreas da tecnologia.".split('').map((letter, index) => (
          letter === '\n' ? <br key={index} /> : (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.05 + 2, // Adiciona um atraso adicional para sincronizar com o h1
                duration: 0.05,
                ease: 'easeOut',
              }}
            >
              {letter}
            </motion.span>
          )
        ))}</p>  
        
        <a href="/about">
    <motion.button
      whileHover={{ scale: 1.1 }} // Aumenta a escala do botão quando o mouse passa sobre ele
      animate={{ 
        scale: [1, 1.1, 1] // A animação de pulsação: volta ao tamanho original após aumentar
      }}
      transition={{
        duration: 1, // Duração total da animação
        ease: 'easeInOut', // Tipo de suavização da animação
        repeat: Infinity, // Repete a animação infinitamente
        repeatType: 'loop' // Faz com que a animação seja contínua
      }}
      className='bg-[#004b23] px-6 py-3 rounded mt-8'
    >
      Toque aqui para me conhecer melhor
    </motion.button>  
    </a>
    </div>
</div>


            <Footer/>
        </>
    );
};