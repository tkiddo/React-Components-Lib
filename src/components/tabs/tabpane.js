import React from 'react';
import ClassNames from 'classnames';
import './style.css';

export const TabPane = (props)=>{
    const {
        className,
        onClick,
        active
    } =props;
    const prefix = 'tabpane';
    const tabCls = ClassNames(prefix,className,{
        [`${prefix}-active`]:active
    })
    return (
        <div onClick={onClick} className={tabCls}>
            {props.children}
        </div>
    )
}