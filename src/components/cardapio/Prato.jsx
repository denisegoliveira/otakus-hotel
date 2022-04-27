import styles from "./Prato.module.css";
import { CloseButton } from '@chakra-ui/react'



const Prato = (props) => { 
    return(
        <div className={styles.card_container}>
            <CloseButton  marginBottom="5px" color="red" onClick={() => props.onClick(props.prato.id)}/>
            <div className={styles.card_image}>
                <img src={props.prato.imagem} alt={props.prato.descricao}></img>
            </div>
            <div className={styles.card_titulo}>
            <h1>
                <span>{props.prato.nome}</span>
            </h1>
            
            </div>

            <div className={styles.preco}>
            <p>
                R$ <span>{props.prato.preco}</span>
            </p>
            </div>

            <div className={styles.card_text}>
            <p>
                ID: <span>{props.prato.id}</span>
            </p>  
            <p>
                Tipo: <span>{props.prato.tipo}</span>
            </p>
            <p>
                Descrição: <span>{props.prato.descricao}</span>
            </p>
            <p>
                Vegan: <span>{props.prato.vegan}</span>
            </p>
            </div>

            {/* <Button /> */}

            </div>
    );
}

export default Prato;