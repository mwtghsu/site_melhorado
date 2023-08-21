import styles from "./Card.module.css";
import ButtonB from "./ButtonB";
import print from "../../../image/Projects/print.svg";
import {useState} from 'react'
function Card({ title, tech, description, repo }) {
  const[info,setInfo]=useState(false)

  function handleInfoOn() {
    setInfo(true);
  }
  function hadleInfoOff(){
    setInfo(false)
  }
  
  
  return (
    <div onMouseLeave={hadleInfoOff} className={styles.Card}>
      <a onMouseEnter={handleInfoOn} href="https://chic-belekoy-85fa50.netlify.app/">
        <img src={print} className={styles.Card2} alt="Print"></img>
      </a>
      
      {info ===true &&(
        <section>
        <h2>{title}</h2>
        <p>
          <strong>Tecnologia:</strong> {tech}
        </p>
        <p>{description}</p>

        <ButtonB text="Acesse o meu repositório" link={repo}></ButtonB>
      </section>



      )}
      
      
    </div>
  );
}

export default Card;
