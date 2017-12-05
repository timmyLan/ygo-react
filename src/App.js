import React, { Component } from 'react';
import 'animate.css';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class App extends Component {
    render() {
        return (
            <div className="App">
              <ReactCSSTransitionGroup
                  transitionName="background"
                  transitionEnter={true}
                  transitionLeave={false}
                  transitionEnterTimeout={500}>
                  <div key="background" className="fadeIn animated background">
                    <main className="animated bounceInDown">
                      <blockquote>
                        我明白了，拥有强大力量人的最大的弱点就是力量本身。
                        <footer>-
                          <cite>
                            武藤游戏 &laquo;游戏王&raquo;
                          </cite>
                        </footer>
                      </blockquote>
                    </main>
                    <img key="cartoon-left" className="cartoon-left" src="//oymcd876b.bkt.clouddn.com/cartoon_left.jpg" alt="cartoon_left"/>
                    <img key="cartoon-right" className="cartoon-right" src="//oymcd876b.bkt.clouddn.com/cartoon_right.jpg" alt="cartoon_right"/>
                  </div>
              </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App;