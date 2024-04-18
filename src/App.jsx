import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'


import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/glemoss.png',
      name: 'Gabriel Lemos',
      job: 'Artista',
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque magni magnam, perferendis quos fugiat ipsa repellat nulla blanditiis, sunt deserunt sapiente ullam fuga fugit. Totam amet inventore hic ipsam.'},
      { type: 'link', content: 'google.com'},
    ],
    publishedAt: new Date('2024-01-04 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pikonha.png',
      name: 'Lucas Piccolo',
      job: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Est facere corporis accusamus quidem recusandae libero beatae sequi repellendus quis, ipsum mollitia minus aut iure voluptatum alias sapiente fugit voluptas porro.'},
      { type: 'link', content: 'bing.com'},
    ],
    publishedAt: new Date('2024-02-04 11:45:00')
  },
];

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar name="Gabriel Lemos" job="Fullstack Developer"/>
        
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
