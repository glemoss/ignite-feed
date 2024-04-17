import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Comment } from './components/Comment'


import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar name="Gabriel Lemos" job="Fullstack Developer"/>
        
        <main>
          <Post 
            name="Gabriel Lemos"
            job="Designer"
            avatar="https://avatars.githubusercontent.com/u/47677173?v=4"
          />

          <Post
            name="Lucas Piccolo"
            job="Product Owner"
            avatar="https://github.com/pikonha.png"
          />
        </main>
      </div>
    </>
  )
}
