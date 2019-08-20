import React, {Component} from 'react';
import './view/index.css'
import RounterIndex from './router/index';
import MainFooter from './view/main-footer';
import MainHeader from './view/main-header';


class App extends Component{
  render(){
        return (
            <div className="page-wrap">
                <MainHeader/>
                <main className="main">
                    <RounterIndex/>
                </main>
                <MainFooter/>
            </div>
        );
  }

}

export default App;