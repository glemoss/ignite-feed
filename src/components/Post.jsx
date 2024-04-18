import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css'

export function Post({ author, publishedAt }) {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="Author Avatar" />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.job}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted}>{publishedDateFormatted}</time>
            </header>

            <div className={styles.content}>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    );    
}