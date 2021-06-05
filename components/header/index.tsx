import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>
                Vagas Vitória - PE
            </h1>
        </header>
    )
}