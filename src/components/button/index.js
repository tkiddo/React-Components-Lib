import React from 'react';
import './button.css'
import ClassNames from 'classnames'

export const Button =(props)=>{
    const {
        type,
        className,
        size,
        icon,
        onClick
    } = props;
    const prefix = 'btn';
    const btnCls = ClassNames(prefix,className,{
        [`${prefix}-${type}`]:type,
        [`${prefix}-${size}`]:size
    })
    console.log(btnCls)
    return (
        <button className={btnCls}>{props.children}</button>
    )
}

