import React, { useState } from "react";
import styles from "../style.module.css"
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
const Questions = (props) => {
    const[showInfo,setShowInfo] = useState(false)
    return (
        <article className={styles.question}>
            <header>
                <h4>{props.questionData.title}</h4>
                <button onClick={()=> setShowInfo(!showInfo)} className={styles.btn}>
                    {showInfo ? <FiMinus /> :  <FaPlus />}
                </button>
            </header>
            {showInfo && <p className={styles.info}>{props.questionData.info}</p>}
        </article>
    )
}
export default Questions