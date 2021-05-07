import React from 'react';
import ReactDom from 'react-dom';
import './styles/all.scss';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import ScrollToTop from './js/ScrollToTop'

import Banner from './component/Banner';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import Case01 from './component/Case01';
import Case02 from './component/Case02';
import Case03 from './component/Case03';



const Main = () => {
    return(
        <div>
            <Banner />
            <About />
            <Work />
            <Contact />
        </div>
    )
};

const App = () => {
    return(
        <HashRouter>     
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/case01" component={Case01}/>
                    <Route path="/case02" component={Case02}/>
                    <Route path="/case03" component={Case03}/>
                </Switch>
            </ScrollToTop>   
        </HashRouter>
    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);