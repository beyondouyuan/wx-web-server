// 路由跳转二：用withRouter
import React from 'react';
import { jumpLink } from '../../../../utils/url';
import './style.scss';

function Item(props) {
    return (
        <div className='news-item-container'>
            <div className='news-item' onClick={
                () => {
                    jumpLink({
                        url: '/news/detail',
                        params: {
                            id: props.id
                        }
                    })
                    // props.history.push(`/news/${props.id}`)
                }
            }>
                <div className='news-item-image'></div>
                <div className='news-item-main'>
                    <div className='title'>{props?.title}</div>
                    <div className='desc'>{props?.desc}</div>
                </div>
            </div>
        </div>
    )
}
export default Item