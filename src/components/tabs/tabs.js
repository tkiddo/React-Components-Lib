import React,{useState} from 'react';
import ClassNames from 'classnames';

export const Tabs = (props) => {
    const {
        className,
        direction,
        onChange
    } = props;
    const prefix = 'tabs';
    const tabsCls = ClassNames(prefix,className,{
        [`${prefix}-${direction}`]:direction
    })
    const [activeKey,setActiveKey]=useState(0);
    const newChildren = React.Children.map(props.children,(child,index)=>{
        if(child.type){
            return React.cloneElement(child,{
                active:activeKey===index,
                onClick:()=>setActiveKey(index)
            })
        }else{
            return child;
        }
    })
    return (
        <div className={tabsCls}>
            {newChildren}
            <div className='tabs-ink-bar'></div>
        </div>
    )
}