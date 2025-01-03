import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/marcosavi.png" />
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Marco Savi Casagrande</strong>
                        <time title="03 de Janeiro de 2025" dateTime="2025-02-01">Cerca de 1h atrás</time>
                    </div>
                    <button title="Deletar comentário">
                        <Trash size={20}/>
                    </button>
                </header>
                <p>Muito bom, Devon! Parabéns</p>
                
                <div className={styles.commentBox}>
                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>             
            </div>
        </div>
    );
    }