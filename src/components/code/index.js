import React from 'react';
import './style.css'

export const Code = (props) => (
    <div className='highlight'>
        <pre className='pre'>
            <code>{props.children}</code>
        </pre>
    </div>
    
)