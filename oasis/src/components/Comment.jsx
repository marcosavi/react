import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({content, deletComment}) {

    /*
        likeCount = valor do contador de likes
        setLikeCount = função para alterar setLikeCount
        -- Inicie o "state" com o mesmo tipo de info que terá o que você quer mudar
    */
    const [likeCount, setLikeCount] = useState(0); //Iniciar o state com a mesmo tipo de info
    
    function handleDeleteComment() {
        deletComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/marcosavi.png" />
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Marco Savi Casagrande</strong>
                        <time title="03 de Janeiro de 2025" dateTime="2025-02-01">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={20}/>
                    </button>
                
                </header>
                <p>{content}</p>
                
                <div className={styles.commentBox}>
                    <footer>
                        <button onClick = {handleLikeComment}>
                            <ThumbsUp />Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>             
            </div>
        </div>
    );
    }