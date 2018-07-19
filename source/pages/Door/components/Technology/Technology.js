import React, { Component } from 'react';
import { Col, Row } from 'antd';
import CardCreate from './components/CardCreate'
import PropTypes from 'prop-types';
import { context } from '../../../../utils/context';
const requireContext = context();
let mapMock = requireContext.keys().map(it => it.replace(/\.\/|\/index\.js/g, ''));
//12个为一组分开客群列表
const groupNew = (arr) => {
  let groupArr = [];
  for(let i=0,len=arr.length;i<len;i+=3){
    groupArr.push(arr.slice(i,i+3));
  }
  return groupArr;
};
let newMapMock = groupNew(mapMock);
class Technology extends Component {
	static propTypes = {
		setContent: PropTypes.func
	};
	constructor(props) {
		super(props);
		this.components = new Map;
	}
	handleDemo = (type) => {
		const { setContent } = this.props;
		setContent(type);
	}
	render() {
		return (
			<div>
				<div style={{ padding: '30px' }}>
				{
					newMapMock.map((it,i)=><Row gutter={16} key={i}>
						{
							it.map((r,index)=>
							<Col span={8} key={index} onClick={this.handleDemo.bind(this, r)}>
								<CardCreate>
									{r}
								</CardCreate>
							</Col>)
						}
					</Row>)
				}
				</div>
			</div>
		)
	}
}

export default Technology;