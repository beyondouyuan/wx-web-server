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
  const tips = '程序出错了！';
  return (
    <div
      className="component-error-boundary-section-placeholder"
    >
      {tips}
    </div>
  );
}
