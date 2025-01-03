import { Post } from './Post';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author = "Marco Savi Casagrande"
                content = "This is a great day to learn React" />

          <Post author = "Marco Savi Casagrande"
                content = "This is a great day to learn how to better code" />
        </main>
      </div>
    </div> 
  )
}