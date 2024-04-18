import { Avatar } from './Avatar'
import styles from './Comment.module.css'

import { ThumbsUp, Trash } from '@phosphor-icons/react'


export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/glemoss.png" alt="" hasBorder={false}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ivone Lara</strong>
                            <time>Cerca de 2h</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptatem, repellat nostrum impedit accusamus deserunt, nisi nemo iste, voluptas ipsa id sed delectus. Impedit alias maiores provident tempore sequi nemo?</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}