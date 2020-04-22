import React, { Fragment } from 'react'
import {Tabs} from '../../../src/components/tabs/tabs'
import {TabPane} from '../../../src/components/tabs/tabpane'

const TabDemo=(props)=>{
    return (
        <Fragment>
            <h5>Tabs</h5>
            <Tabs>
                <TabPane>home</TabPane>
                <TabPane>about</TabPane>
            </Tabs>
        </Fragment>
        
    )
}

export default TabDemo