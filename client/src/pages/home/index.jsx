import React, { Component } from 'react';
import render from '../render';
// import { Link } from "react-router-dom";

import './style.scss';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {
                name: 'myname',
                age: 10
            }
        }
    }

    render() {
        return (
            <div>
                <ul className='menu'>
                    <li className='menu-item'><a href="/join">加入我们</a></li>
                    <li className='menu-item'><a href="/constitution">章程</a></li>
                    <li className='menu-item'><a href="/group">校友群</a></li>
                    <li className='menu-item'><a href="/news">新闻</a></li>
                    <li className='menu-item'><a href="/notice">公示</a></li>
                    <li className='menu-item'><a href="/resource">资源</a></li>
                </ul>
                {/* <div>docker部署测试</div> */}
            </div>
        )
    }
}
render(Home);
// export default Home