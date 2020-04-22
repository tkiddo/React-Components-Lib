import React from 'react';

export const TabBar = (props)=>{
    const {
        activeKey,
        barWidth
    }=props;
    return (
        <div className='tabs-ink-bar'
            style={
                {
                    transform:`translate3d(${activeKey*(barWidth)}px,0px,0px)`,
                    width:`${barWidth}px`
                }
        }></div>
    )
}