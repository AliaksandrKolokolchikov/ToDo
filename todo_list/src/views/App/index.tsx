import React from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import styles from './index.module.scss'

export const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            <section className={styles.articleSection}>

            </section>
            <section className={styles.articleSection}>

            </section>
        </article>
    )
}