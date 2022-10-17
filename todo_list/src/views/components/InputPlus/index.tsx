import React, { useState } from "react";

import styles from './index.module.scss'
interface InputPlusProps {
    onAdd: (title: string) => void
}

export const InputPlus: React.FC<InputPlusProps> = ({
    onAdd,
}) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className={styles.inputPlus}>
            <input
                type='text'
                className={styles.inputPlusValue}
                value={inputValue}
                onChange={(evt) => {
                    setInputValue(evt.target.value);
                }}
            />
            <button

            />
        </div>
    )
}