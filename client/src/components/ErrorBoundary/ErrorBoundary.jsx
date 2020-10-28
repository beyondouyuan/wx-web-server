/**
 * React 异常边界
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  // static propTypes = {
  //   children: PropTypes.node.isRequired,
  //   placeholder: PropTypes.node.isRequired
  // };

  // state = {
  //   error: null
  // };
  constructor(){
    super(...arguments)
    this.state = {
      error: null
    }
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  // eslint-disable-next-line
  componentDidCatch(error, errorInfo) {
    // todo: 收集 errorInfo 信息
    // alert(error instanceof Error)/
  }

  render() {
    const { error } = this.state;
    const { children, placeholder } = this.props;

    if (error) {
      return placeholder;
    }

    return children;
  }
}
