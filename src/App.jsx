import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

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
          />
        </main>
      </div>
    </>
  )
}
