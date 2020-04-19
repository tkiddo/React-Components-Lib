import React from 'react';
import styles from './button.module.css'

export const Button =(props)=>(
    <button className={`${styles['btn']} ${styles['btn-primary']}`}>{props.children}</button>
)

