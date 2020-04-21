import React from 'react';
import ClassNames from 'classnames'
import './style.css'

export const Button =(props)=>{
    const {
        type,
        className,
        size,
        onClick
    } = props;
    const prefix = 'btn';
    const btnCls = ClassNames(prefix,className,{
        [`${prefix}-${type}`]:type,
        [`${prefix}-${size}`]:size
    })
    console.log(btnCls)
    return (
        <button type='button' className={btnCls} onClick={onClick}>{props.children}</button>
    )
}

