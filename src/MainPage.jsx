import React, { useEffect, useState, useRef } from "react";
import "./PageStyle.css";

function MainPage() {
  const [slideIndex, setSlideIndex] = useState(0); 

  const slides = [
    "src/Imagens/1.png",
    "src/Imagens/2.png",
    "src/Imagens/3.png",
  ]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval); 
  }, [slides.length]);
  
  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="Grid">
      <header className="topo">
        <img src="src/Imagens/1-removebg-preview.png" alt="Logo" />
        <nav className="menu">
          <a href="#home" className="item-menu">HOME</a>
          <a href="#sobre" className="item-menu">SOBRE</a>
          <a href="#produtos" className="item-menu">PRODUTOS</a>
          <a href="#depoimento" className="item-menu">DEPOIMENTOS</a>
          <button>FAÇA SEU ORÇAMENTO</button> {/*Botão com link que leva para o número do WhatsApp*/}
        </nav>
      </header>
      <main className="conteúdo">
          <div className="carrossel" id="home">
            <div className="slide">
              <img
                src={slides[slideIndex]}
                alt={`Slide ${slideIndex + 1}`}
                className="carrossel-img"
              />
            </div>
            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === slideIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>

        <div className="QuemSomos" id="sobre">
          <div className="QuemSomosImagem">
            <img src="src/Imagens/2148828328.jpg" alt="João Almeida Melo" />
          </div>
            
          <div className="QuemSomosTexto">
            <h3>CONHEÇA A TECIL TÊXTIL</h3>
            <br />
            <p>
              É importante salientar aqui que essas empresas são fictícias e de
              cunho meramente ilustrativo, visando tornar os textos mais realistas.
              </p>
              <br />
              <p>
                Fundada em Caruaru, no ano de 1988, a Teci Têxtil nasceu da
                necessidade e do desejo de João Almeida Melo (fundador) de ajudar
                outros negócios locais a crescerem, fornecendo tecidos de alta
                qualidade, de produção e tinturaria própria.
              </p>
              <br />
              <p>
                Hoje em dia, conquistamos o Brasil inteiro, estando entre as 5 maiores
                empresas da indústria têxtil de Caruaru e região, agora fornecendo e
                entregando para todo o Brasil.
              </p>
            </div>
          </div>
      
          <div className="produtos-container" id="produtos">
            <h3>Nossos Produtos</h3>
            <div className="Tecido">
              <img src="src/Imagens/Tecido 1.png" alt="Tecido 1" className="ImagemTecido" />
              <button>FAÇA SEU ORÇAMENTO</button>
            </div>
            <div className="Tecido">
              <img src="src/Imagens/Tecido2.png" alt="Tecido 2" className="ImagemTecido" />
              <button>FAÇA SEU ORÇAMENTO</button>
            </div>
            <div className="Tecido">
              <img src="src/Imagens/Tecido3.png" alt="Tecido 3" className="ImagemTecido" />
              <button>FAÇA SEU ORÇAMENTO</button>
            </div>
            <div className="Tecido">
              <img src="src/Imagens/Tecido4.png" alt="Tecido 4" className="ImagemTecido" />
              <button>FAÇA SEU ORÇAMENTO</button>
            </div>
            <div className="Tecido">
              <img src="src/Imagens/Tecido5.png" alt="Tecido 5" className="ImagemTecido" />
              <button>FAÇA SEU ORÇAMENTO</button>
            </div>
            <div className="Tecido">
              <img src="src/Imagens/Tecido6.png" alt="Tecido 6" className="ImagemTecido" />
              <button>FAÇA SEU ORÇAMENTO</button>
            </div>
          </div>

          <div className="depoimentos" id="depoimento">
            <img src="src/Imagens/Depoimentos Teci Têxtil.jpg" alt="" className="img-depoimento"/>
          </div>
    </main>
      
    <footer className="rodapé">
      <p>
        Fone: (xx) xxxxx-xxxx <br />
        E-mail: xxxxxxxxx@gmail.com
      </p>
    </footer>
  </div>
  );
}

export default MainPage;