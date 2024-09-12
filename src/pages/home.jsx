import React from 'react';
import { Header } from '../componnts/header/header';
import { WhatsappLogo, FacebookLogo,GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export const Home = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col lg:flex-row items-center mt-8 ml-4 lg:-ml-6 justify-center w-full">
                {/* Celular */}
              <div className="relative flex items-center justify-center w-full lg:w-72 h-[500px] bg-black border-2 border-black/70 rounded-3xl shadow-lg mb-4 lg:mb-0">
                    {/* Tela do celular */}
           <div className="absolute inset-0 m-4 bg-black/80 border-2 border-black rounded-xl flex items-center justify-center">
              <div className=" items-center justify-center w-full h-full bg-black border-2 rounded-xl">
                 
                <img src="/img/fotoPerfil.jpeg" alt="" 
                 style={{
                    borderRadius: '50%', // Faz a imagem circular
                    width: '150px', // Define a largura da imagem
                    height: '150px', // Define a altura da imagem
                    objectFit: 'cover', // Garante que a imagem não seja distorcida
                    border: '2px solid #ddd', // Adiciona uma borda opcional
                  }}
                  className='mt-8 flex ml-12'
                />
                <div className='text-green-300 ml-4 mt-16'>
                <WhatsappLogo size={30} className='mb-4'/>
                <FacebookLogo size={30} className='mb-4'/>
                <GithubLogo size={30} className='mb-4'/>
                <LinkedinLogo size={30}/>
                </div>
                </div>
                    </div>
                    
                    {/* Câmera do celular */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full w-6 h-6"></div>
                </div>

                {/* Informações */}
                <div className="text-center lg:text-left lg:ml-24 mt-6">
                    <h1 className='text-white text-6xl font-bold mb-2'>ANCHA CATARINA</h1>
                    <h2 className='text-white  text-3xl mt-2'>Software Developer</h2>
                    <p className=' text-green-400 mt-10'>Sou uma Programadora Júnior com uma formação sólida em Telecomunicações e uma paixão por tecnologia e design. </p>
                    <p className=' text-green-400'>Minha jornada na programação começou com o desejo de criar soluções tecnológicas inovadoras e eficazes, e desde</p>
                     <p className=' text-green-400'>então, tenho me dedicado a aprimorar minhas habilidades em várias áreas da tecnologia.</p>
                
                <button className='bg-green-300 mt-10 ml-48'>Toque aqui me conhecer melhor</button>
                </div>
            </div>
        </>
    );
};