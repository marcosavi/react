import { Header } from './components/Header'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/marcosavi.png',
      name: 'Marco Savi Casagrande',
      role: 'CMU @ student'
    },
    content: [
      {type:'paragraph', content:'Fala pessoal 👋'},
      {type: 'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type : 'link', content: "devonlane.design"},
    ],
    publishedAt: new Date('2025-05-10 21:15:00'),
  },
  
  
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type:'paragraph', content:'Fala pessoal 👋'},
      {type: 'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type : 'link', content: "devonlane.design"},
    ],
    publishedAt: new Date('2025-05-10 21:15:00'),
  }, 
];

// iteration: repeat something

// use "map" as a good alternative for retrievig something from it

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
              author = {post.author}
              content = {post.content}
              date = {post.publishedAt}
            />); 
          })}
        </main>
      </div>
    </div> 
  )
}