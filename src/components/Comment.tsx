import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

import { ThumbsUp, Trash } from '@phosphor-icons/react'


interface CommentProps {
    content: string,
    onDeleteComment: Function,
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleNewlike() {
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/glemoss.png" hasBorder={false}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ivone Lara</strong>
                            <time>Cerca de 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={handleNewlike}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}