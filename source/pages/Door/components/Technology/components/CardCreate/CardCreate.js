import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import './CardCreate.less';
class CardCreate extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Card title="举个🌰" bordered={false} className="u-card">
        {this.props.children}
        </Card>
      </div>
    )
  }
}
export default CardCreate;