import React from 'react';
import styles from './Presentation.module.css';
import ButtonA from './elements/ButtonA';
import ButtonB from './elements/ButtonB';
import { useEffect,useState } from 'react';

function Presentation(){
   const[text,setText]= useState('')
   const toRotate=['Giovanni Magnani!','Desenvolvedor Front End','Designer UI']
   const [loop,setLoop]=useState(0)
   const [isDeleting,setIsDeleting]=useState(false);
   const period =300;
   const [delta,setDelta]=useState(100)
   useEffect(()=>{
      let ticker=setInterval(()=>{
         toType()},delta)
      return()=>{clearInterval(ticker)}


   },[text])

   const toType = () => {
      let i = loop % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      setText(updatedText);
  
      if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period); // Pausa antes de começar a deletar
      } else if (isDeleting && updatedText === '') { // Verifica se a string está vazia
          setIsDeleting(false);
          setDelta(100);  // Velocidade de digitação mais rápida
          setLoop(loop + 1);
      }
  };
  
   return(
      <div className={styles.Presentation} id="Presentation" >
         <h4><strong>Bem vindo ao meu portifólio</strong></h4>
          <h1>Olá eu sou {text}</h1>
          <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br>
          </br>Como Product Manager, eu tenho o compromisso de resolver <br>
          </br>  problemascomplexos e trazer resultados excepcionais para os <br>
          </br> negócios.Meus projetos já geraram milhões de reais em receita<br>
          </br>anualestou sempre em busca de novos desafios para superar.</p>
          <ButtonA link ='https://github.com/mwtghsu' text='Conecte-se comigo'></ButtonA>
          
      </div>
      
   )
}

export default Presentation