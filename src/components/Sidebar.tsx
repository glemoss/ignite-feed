import { Avatar } from './Avatar'
import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

interface SidebarProps {
    name: string;
    job: string;
}
export function Sidebar({ name, job }: SidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hdHJpeHxlbnwwfHwwfHx8MA%3D%3D'
                alt=''
            />
            
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/47677173?v=4"/>

                <strong>{name}</strong>
                <span>{job}</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}