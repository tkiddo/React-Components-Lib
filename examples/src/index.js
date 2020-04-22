import React, { Fragment } from 'react';
import { render} from 'react-dom';
import ButtonDemo from './view/buttonDemo'
import TabDemo from './view/tabDemo'
import './index.css'
const App = () => (
    <Fragment>
        <ButtonDemo />
        <TabDemo />
    </Fragment>

);
render(<App />, document.getElementById("root"));