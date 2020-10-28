/**
 * ErrorBoundary 页面级
 */

import React from 'react';
import ErrorBoundary from './ErrorBoundary';


export default function ErrorBoundaryPage(props) {
  return (
    <ErrorBoundary
      {...props}
      placeholder={<ErrorBoundaryPagePlaceholder />}
    />
  );
}

function ErrorBoundaryPagePlaceholder() {
  const title = '对不起，程序出错了！';
  return (
    <div
    >
      <div className="component-error-boundary-page-placeholder">
        <h1>{title}</h1>
        <div>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            重新加载
          </button>
        </div>
      </div>
    </div>
  );
}
