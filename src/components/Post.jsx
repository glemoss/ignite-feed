import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src={props.avatar} alt="Author Avatar" />

                    <div className={styles.authorInfo}>
                        <strong>{props.name}</strong>
                        <span>{props.job}</span>
                    </div>
                </div>
                <time>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque magni magnam, perferendis quos fugiat ipsa repellat nulla blanditiis, sunt deserunt sapiente ullam fuga fugit. Totam amet inventore hic ipsam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facere corporis accusamus quidem recusandae libero beatae sequi repellendus quis, ipsum mollitia minus aut iure voluptatum alias sapiente fugit voluptas porro.</p>
                <p><a href="">google.com</a> <a href="">#google</a> <a href="">#dev</a></p>
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