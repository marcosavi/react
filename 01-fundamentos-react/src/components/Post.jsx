import styles from "./Post.module.css"
import {Comment} from "./Comment.jsx"
import { Avatar } from "./Avatar.jsx";

export function Post() {
    return(
        <article className  = {styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/diego3g.png" />
                    <div className = {styles.authorInfo}>
                        <strong>Marco Casagrande</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="03 de Janeiro de 2025" dateTime="2025-02-01">Publicado a 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala pessoal 👋</p>
                <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>
                <p>👉{' '}<a href="#">devonlane.design</a></p>
                <p><a href="#">#uiux #userexperience</a></p>
            </div>

            <form className = {styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea placeholder="Deixe seu comentário"></textarea>
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    );
}