import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {Comment} from "./Comment.jsx"
import { Avatar } from "./Avatar.jsx";

import styles from "./Post.module.css"

export function Post({author, publishedAt}) {
    const publishedDateFormatted = format(publishedAt, "do 'de' LLLL 'às' HH", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
    })

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
                <time title={publishedDateFormatted} dateTime="2025-02-01">
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
            <p>Fala pessoal 👋</p>
                <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>
                <p>👉{' '}<a href="#">devonlane.design</a></p>
                <p><a href="#">#uiux #userexperience</a></p><p>Fala pessoal 👋</p>
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