import styles from "./Projects.module.css";
import Card from "./elements/Card";
import print from "../../image/Projects/print.svg";
import ccpx from "../../image/Projects/ccpx.png";
import bootcamp from "../../image/Projects/bootcamp.png";
import { useState } from 'react';

function Projects() {
  const [info2, setInfo2] = useState(false);

  function handleInfoOn() {
    setInfo2(true);
  }
  
  function handleInfoOff() {
    setInfo2(false);
  }

  return (
    <div id="Projects" className={styles.Projects}>
      <h1>Projetos</h1>
      <Card
        img={print}
        title="Projeto XPTO"
        tech="HTML CSS Javascript"
        description="Desenvolvimento de uma lading page para o lançamento da formação em tecnologia"
        repo="https://github.com/mwtghsu"
      ></Card>
      <div className={styles.Card6}>
        <a onMouseEnter={handleInfoOn} href="https://animated-seahorse-08d098.netlify.app/">
          <img src={ccpx} className={styles.Card7} alt="Print3" />
        </a>
        <br></br>
        {info2 === true && (
          <a href="https://regal-phoenix-2c622d.netlify.app/">
            <img src={bootcamp} className={styles.Card8} alt="Print" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Projects;
