/**
 * 渲染React页面
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundaryPage } from '../components/ErrorBoundary';
import '../style';

export default function render(PageComponent, cb) {

    try {
        ReactDOM.render(
            <ErrorBoundaryPage key="error">
                <PageComponent />
            </ErrorBoundaryPage>,
            document.getElementById('root'),
            () => {
                cb && cb();
            }
        );
    } catch (error) {
        // eslint-disable-next-line
        if (window.confirm('程序出错，重新打开页面？')) {
            window.location.reload();
        }
    }
}

