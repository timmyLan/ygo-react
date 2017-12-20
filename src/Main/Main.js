import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Main.css';

function Path() {
    return (
        <div className="path">
          <h1>YGO</h1>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
    )
}
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            isLeft: false,
            isTop: false
        }
        this.handleHoverOff = this.handleHoverOff.bind(this);
        this.handleHoverOn = this.handleHoverOn.bind(this);
    };
    handleHoverOn() {
        this.setState({ isHover: true });
    }
    handleMouseMove(ref, e) {
        const element = this.refs[ref];
        const { left, right, top, bottom } = element.getBoundingClientRect();
        const { pageX, pageY } = e;
        const isLeft = pageX > left && pageX < (right - left) / 2 + left;
        const isTop = pageY > top && pageY < (bottom - top) / 2 + top;
        isLeft ? this.setState({ isLeft: true }) : this.setState({ isLeft: false });
        isTop ? this.setState({ isTop: true }) : this.setState({ isTop: false });
    }
    handleHoverOff() {
        this.setState({ isHover: false });
    }
    render() {
        const isLeftClassName = this.state.isLeft ? "cartoon-go-right" : "cartoon-go-left";
        const isTopClassName = this.state.isTop ? "cartoon-go-down" : "cartoon-go-top";
        return (
            <ReactCSSTransitionGroup
                transitionName="background"
                transitionEnter={true}
                transitionLeave={false}
                transitionEnterTimeout={500}>
                <div className="background">
                  <main>
                    <blockquote>
                      我明白了，拥有强大力量人的最大的弱点就是力量本身。
                      <footer>-
                        <cite>
                          武藤游戏 &laquo;游戏王&raquo;
                        </cite>
                      </footer>
                    </blockquote>
                  </main>
                  <Path/>
                  <img
                    onMouseMove = {(e)=>this.handleMouseMove('cartoon-left',e)}
                    onMouseEnter={this.handleHoverOn}
                    onMouseLeave={this.handleHoverOff}
                    ref="cartoon-left"
                    className={
                      this.state.isHover?`cartoon-left ${isLeftClassName} ${isTopClassName}`:"cartoon-left"
                    }
                    src="//oymcd876b.bkt.clouddn.com/cartoon_left.jpg"
                    alt="cartoon_left"
                  />
                  <img
                    onMouseMove = {(e)=>this.handleMouseMove('cartoon-left',e)}
                    onMouseEnter={this.handleHoverOn}
                    onMouseLeave={this.handleHoverOff}
                    className={
                      this.state.isHover?`cartoon-right ${isLeftClassName} ${isTopClassName}`:"cartoon-right"
                    }
                    src="//oymcd876b.bkt.clouddn.com/cartoon_right.jpg"
                    alt="cartoon_right"
                  />
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}
export default Main;