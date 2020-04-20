import React, { Fragment } from 'react';
import { render} from 'react-dom';
import ButtonDemo from './view/buttonDemo'
import './index.css'
const App = () => (
    <Fragment>
        <ButtonDemo />
    </Fragment>

);
render(<App />, document.getElementById("root"));