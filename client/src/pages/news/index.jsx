import React, { Component } from 'react';
import render from '../render';
import Item from './components/Item';
import NoData from '../../components/NoData';
import throttle from '../../utils/throttle';
import { getScrollHeight, getScrollTop, getWindowHeight } from '../../utils/scroll'
import './style.scss';
import { requestNewsList } from '../../service/news';

class News extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            currentPage: 1,
            loading: false,
            news: [],
            curId: 1,
            noMore: false,
            noData: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.handleThrottleScroll = this.handleThrottleScroll.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }
    componentDidMount() {
        this.fetchData()
        window.addEventListener('scroll', this.handleThrottleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleThrottleScroll)
    }
    handleThrottleScroll(e) {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(this.handleScroll)
        } else {
            return throttle(this.handleScroll, 300)(e)
        }
    }
    handleScroll(e) {
        if (getScrollTop() + getWindowHeight() + 50 >= getScrollHeight()) {
            this.fetchData()
        }
    }
    async fetchData() {
        const result = await requestNewsList()
        this.setState({
            news: result?.data?.list || []
        })
    }
    renderNoData() {
        return (
            <div className='news-container'>
                <div className='news-content'>
                    <div className='news-main'>
                        <NoData text={'暂无新闻哪哦那个'} />
                    </div>
                </div>
            </div>
        )
    }
    render() {
        const { news, noMore, noData } = this.state;
        if(noData) {
            return this.renderNoData()
        }
        return (
            <div className='news-container'>
                <div className='news-content'>
                    <div className='news-main'>
                        {
                            news.map((item) => {
                                return <Item key={item.id} {...item} />
                            })
                        }
                        {
                            noMore && (
                                <div className='no-more'>暂无更多数据</div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

render(News)