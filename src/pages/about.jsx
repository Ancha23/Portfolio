import { Header } from '../componnts/header/header';
import { Footer } from '../componnts/footer/footer';

export const About = () =>{
    return(
        <>
        <Header/>

        <div className="flex flex-col lg:flex-row h-screen">
      {/* Imagem */}
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: 'url(/img/foto1.png)' }}>
        {/* Ajuste o tamanho e a posição da imagem conforme necessário */}
      </div>
      
      {/* Texto */}
      <div className="flex-1 flex items-center justify-center bg-black  text-white p-8">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mt-2"
           style={{ color: '#70e000',
           }}
          >FORMACOES</h1>
          <p className="text-xl mt-8 font-bold">Formacao em Engenharia Electronica e Telecomunicaoes</p>
          <p className=" mb-4">Tenho o terceiro ano terminado nesta area, mas ainda em formacao.</p>
          <h1 className="text-4xl font-bold mt-10"
          style={{ color: '#70e000',
          }}
          >CURSOS</h1>
          <p className="text-xl font-bold mt-8">Bytes4Future</p>
          <ul>
            <li className=" mt-2">Conhecimento na linguagem Javascript</li>
            <li className="mb-2">Front-end(React)</li>
            <li className=" mb-2">Back-end(Node.js, MongoDB)</li>
            <li className="mb-4">Design(Figma)</li>
          </ul>
          <h1 className="text-4xl font-bold mt-10"
          style={{ color: '#70e000',
          }}
          >Experiencia Profissional</h1>
          <p className="text-xl font-bold mt-8">Assistente de Administracao e Financas</p>
          <ul>
            <li className=" mt-2">Conhecimento na linguagem Javascript</li>
            <li className="mb-2">Front-end(React)</li>
            <li className=" mb-2">Back-end(Node.js, MongoDB)</li>
            <li className="mb-4">Design(Figma)</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
        </>
    )
}