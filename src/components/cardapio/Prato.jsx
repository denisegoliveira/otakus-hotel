import styles from "./Prato.module.css";
// import { useNavigate } from "react-router-dom";
import ramen from "../../assets/images/ramen.jpg";

const Prato = ( { prato, text }) => { 
    return(
        <div className={styles.card_container}>
            <div className={styles.card_image}>
                <img src={ramen} alt={text}></img>
            </div>
            <div className={styles.card_titulo}>
            <h1>
                <span>{prato?.nome}</span>
            </h1>
            </div>

            <div className={styles.preco}>
            <p>
                R$ <span>{prato?.preco}</span>
            </p>
            </div>

            <div className={styles.card_text}>
            <p>
                Tipo: <span>{prato?.tipo}</span>
            </p>
            <p>
                Descrição: <span>{prato?.descricao}</span>
            </p>
            <p>
                Vegan: <span>{prato?.vegan}</span>
            </p>
            </div>

            {/* <Button /> */}

            </div>
    );
}

export default Prato;