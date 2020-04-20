import React, { Fragment } from 'react'
import {Button} from '../../../src/components/button';

const ButtonDemo=()=>(
    <Fragment>
        <h5>Button</h5>
        <Button type='primary' onClick={()=>{console.log('click')}}>primary</Button>
        <Button type='danger'>danger</Button>
        <Button type='success'>danger</Button>
    </Fragment>
)

export default ButtonDemo;