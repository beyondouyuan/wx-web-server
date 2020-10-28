// 路由跳转二：用withRouter
import React from 'react';
import './style.scss';
import { jumpLink } from '../../../../utils/url';

function Item(props) {
    return (
        <div className='resource-item-container'>
            <div className='resource-item' onClick={
                () => {
                    jumpLink({
                        url: '/resource/detail',
                        params: {
                            id: props.id
                        }
                    })
                    // props.history.push(`/resource/${props.id}`)
                }
            }>
                <div className='resource-item-image'></div>
                <div className='resource-item-main'>
                    <div className='title'>{props?.title}</div>
                    <div className='desc'>{props?.desc}</div>
                </div>
            </div>
        </div>
    )
}
export default Item