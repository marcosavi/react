import {Comment} from "./Comment.jsx"
import { Avatar } from "./Avatar.jsx";
import styles from "./Post.module.css"
import { useState } from "react";

// React state = variáveis que eu quero que o componente monitore
export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment() { 
        event.preventDefault();
        setComments([...comments, newCommentText]); //spread operator: lê os valores que tem na array commentários
        setNewCommentText('')
    };

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    };

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório :)')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentInputEmpty = newCommentText.length == 0

    return(
        <article className  = {styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className = {styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title="Certain time">Publicado há 1h atrás</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == "paragraph") {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == "link") {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className = {styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe seu comentário"
                    value={newCommentText}
                    onChange = {handleNewCommentChange}
                    onInvalid = {handleNewCommentInvalid}
                    required
                    ></textarea>
                <footer>
                    <button type="submit" disabled={isNewCommentInputEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                return(
                    <Comment
                        key={comment}
                        content={comment}
                        deletComment={deleteComment} />
                )
               })}
            </div>

        </article>
    );
}