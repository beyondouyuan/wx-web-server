import React, { Component } from 'react';
import render from '../render';

import './style.scss';

class NoticeDetail extends Component {
    componentDidMount() {
        // console.log(this.props.match.params)
    }
    render() {
        return(
            <div>
                公示详情
            </div>
        )
    }
}

render(NoticeDetail)