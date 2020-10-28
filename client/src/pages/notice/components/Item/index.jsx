// 路由跳转二：用withRouter
import React from 'react';
import './style.scss';
import { jumpLink } from '../../../../utils/url';

function Item(props) {
    return (
        <div className='notice-item-container'>
            <div className='notice-item' onClick={
                () => {
                    jumpLink({
                        url: '/notice/detail',
                        params: {
                            id: props.id
                        }
                    })
                    // props.history.push(`/notice/${props.id}`)
                }
            }>
                <div className='notice-item-image'></div>
                <div className='notice-item-main'>
                    <div className='title'>{props?.title}</div>
                </div>
            </div>
        </div>
    )
}
export default Item