import React, { Fragment } from 'react'
import {Button} from '../../../lib/index.js'

const ButtonDemo=()=>(
    <Fragment>
        <h5>Button</h5>
        <Button type='primary' onClick={()=>{console.log('click')}}>primary</Button>
        <Button type='danger'>danger</Button>
        <Button type='success'>danger</Button>
    </Fragment>
)

export default ButtonDemo;