import React, { Component } from 'react';
import { requestNewsDetail } from '../../service/news';
import { parseSearchParams } from '../../utils/url';
import render from '../render';

import './style.scss';


class NewsDetail extends Component {
    constructor() {
        super(...arguments)
        this.fetchData = this.fetchData.bind(this)
    }
    componentDidMount() {
        this.fetchData()
    }
    async fetchData() {
        const params = parseSearchParams();
        const result = await requestNewsDetail({
            id: params.id
        })
        console.log(result)
    }
    render() {
        return(
            <div>
                新闻详情
            </div>
        )
    }
}

render(NewsDetail)