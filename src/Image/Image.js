import React, { Component } from 'react';
import './Image.css';
class Image extends Component {
    render() {
        const { src, alt } = this.props;
        return (
            <img src={src} alt={alt}/>
        )
    }
}
export default Image;