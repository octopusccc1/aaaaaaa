import React, { Component } from 'react';
import { Tooltip } from 'antd';
import './BlogItem.less'
import classNames from 'classnames';
class BlogItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			anm: false,
			text: false,
		}
	}
	handleOver = () => {
		this.setState({
			anm: true
		})
	}
	handleOut = () => {
		this.setState({
			anm: false
		})
	}
	handleDescribeOver = () => {
		this.setState({
			text: true
		})
	}
	handleDescribeOut = () => {
		this.setState({
			text: false
		})
	}
	render() {
		const { mock } = this.props;
		const { imgList } = mock;
		const { anm, text } = this.state;
		const activeClass = classNames({
			'active': anm
		})
		const textClass = classNames({
			'activeDescribe': text
		})
		return (
			<div className="g-blog-item">
				<ul className={activeClass}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
						<Tooltip placement="top" title={mock.title}>
							<div className="m-core">
								<div className="m-title">{mock.title}</div>
								<div className="m-title-little">{mock.title}</div>
								<div className="m-img-list">
									{
										imgList.map((it,i)=><img className="m-img" key={i} src={it} />)
									}
								</div>
							</div>
						</Tooltip>
					</li>
				</ul>
				<div className={`m-describe ${textClass}`} onMouseOver={this.handleDescribeOver}
					onMouseOut={this.handleDescribeOut}>{mock.title}</div>
			</div>
		)
	}
}

export default BlogItem;