import React, { Fragment } from 'react';
import { render} from 'react-dom';
import {Button} from '../../src';
const App = () => (
    <Fragment>
        <Button type='primary'>primary</Button>
        <Button type='danger'>danger</Button>
    </Fragment>

);
render(<App />, document.getElementById("root"));