import React, { Component } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import PropTypes from 'prop-types';
import BBS from './components/BBS';
import Blog from './components/Blog/';
import Games from './components/Games';
import Home from './components/Home';
import Technology from './components/Technology/';
import '../../assets/common/mixin.less';
import './Door.less';
import { context } from '../../utils/context';
const requireContext = context();
const { Header, Content, Footer } = Layout;
const MenuList = [
	{ key: '1', name: '首页' },
	{ key: '2', name: '技术栈' },
	{ key: '3', name: '博客' },
	{ key: '4', name: '游戏' },
	{ key: '5', name: '论坛' },
]
class Door extends Component {
	static propTypes = {
		setContent: PropTypes.func,
		doorReducer: PropTypes.object,
	};
	constructor(props) {
		super(props);
	}
	handleContentTypes = (e) => {
		const { setContent } = this.props;
		setContent(e.key)
	}
	handleContent = (types) => {
		const { setContent } = this.props;
		switch (types) {
			case '1':
				return <Home />;
			case '2':
				return <Technology setContent={setContent} />;
			case '3':
				return <Blog />;
			case '4':
				return <Games />;
			case '5':
				return <BBS />;
			default: {
				const Types = requireContext(`./${types}/index.js`).default;
				return <Types />;
			}
		}
	}
	render() {
		const { doorReducer, routing } = this.props;
		const { contentTypes } = doorReducer;
		const { pathname } = routing.locationBeforeTransitions;
		const types = contentTypes ? contentTypes : '1';
		const isRoute = pathname.replace(/\/door\//, '');
		return (
			<div className="g-door" >
				<Layout>
					<Header className="g-door-header">
						<Row type="flex" justify="center">
							<Col span={16}>
								<Menu
									theme="light"
									mode="horizontal"
									defaultSelectedKeys={['1']}
									className="g-door-nav"
									onClick={this.handleContentTypes}
								>
									{
										MenuList.map(
											it =>
												<Menu.Item key={it.key} >{it.name}</Menu.Item>
										)}
								</Menu>
							</Col>
						</Row>
					</Header>
					<Content className="g-door-content">
						<Row>
							<Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={3}>
								<div className="g-door-sider">
									侧边
									</div>
							</Col>
							<Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={18}>
								<div className="g-door-center">
									{
										isRoute ? this.props.children : this.handleContent(types)
									}
								</div>
							</Col>
							<Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={3}>
								<div className="g-door-sider">
								</div>
							</Col>
						</Row>
					</Content>
					<Footer className="g-door-footer">
						create by octopusccc1@github
					</Footer>
				</Layout>
			</div>
		)
	}
}

export default Door;