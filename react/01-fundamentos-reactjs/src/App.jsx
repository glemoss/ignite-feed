import { Post } from './components/Post'
import { Header } from './components/Header'

import './global.css'

export function App() {

  return (
    <>
      <Header/>
      <Post 
        author="Gabriel Lemos" 
        content="Tempor eiusmod irure commodo consequat cupidatat est excepteur esse labore mollit proident ex id laboris."
      />
    </>
  )
}
