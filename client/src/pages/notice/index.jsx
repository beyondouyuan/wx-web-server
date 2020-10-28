import React, { Component } from 'react';
import render from '../render';
import Item from './components/Item';
import NoData from '../../components/NoData';
import throttle from '../../utils/throttle';
import { getScrollHeight, getScrollTop, getWindowHeight } from '../../utils/scroll'
import './style.scss';
import { requestNoticeList } from '../../service/notice';

class Notice extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            currentPage: 1,
            loading: false,
            notice: [],
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
        const result = await requestNoticeList()
        this.setState({
            notice: result?.data?.list || []
        })
    }
    renderNoData() {
        return (
            <div className='notice-container'>
                <div className='notice-content'>
                    <div className='notice-main'>
                        <NoData text={'暂无公示内容'} />
                    </div>
                </div>
            </div>
        )
    }
    render() {

        const { notice, noMore, noData } = this.state
        if (noData) {
            return this.renderNoData()
        }
        return (
            <div className='notice-container'>
                <div className='notice-content'>
                    <div className='notice-main'>
                        {
                            notice.map((item) => {
                                return <Item key={item.id} {...item} />
                            })
                        }
                        {noMore && (
                            <div className='no-more'>暂无更多数据</div>
                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

render(Notice)