import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/47677173?v=4" alt="Author Avatar" />

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
        </article>
    );    
}