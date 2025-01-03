import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                src="https://plus.unsplash.com/premium_photo-1725708358944-844db020a73a?q=40&w=500"
                className = {styles.cover}
                />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/marcosavi.png" />
                <strong>Marco Savi Casagrande</strong>
                <span>Web Development</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit your profile
                </a>
            </footer>

        </aside>

    );
}