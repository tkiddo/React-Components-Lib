import React, { Fragment } from 'react'
import { Button } from '../../../src/components/button'
import {Code} from '../../../src/components/code'

const ButtonDemo = () => {
    const code=`
    <Button type='primary' onClick={() => { console.log('click') }}>primary</Button>
    <Button type='danger'>danger</Button>
    <Button type='success'>success</Button>
    `
    return (
        <Fragment>
            <h5>Button</h5>
            <Button type='primary' onClick={() => { console.log('click') }}>primary</Button>
            <Button type='danger'>danger</Button>
            <Button type='success'>success</Button>
            <Code>
                {code}
            </Code>
        </Fragment>
    )
}

export default ButtonDemo;