import React ,{Component} from 'react';
import {Row,Col,Menu,SubMenu} from "antd";
import {Link} from "react-router-dom";
import IndexList from './list'

class Index extends Component {
    render() {
        console.log(this.props);
        return (
            <Row className="wrap main-wrap">
                <Col md={6}>
                    <Menu className="menu-index">
                        <Menu.Item>
                            <Link to="/index/all">全部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/jod">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/test">测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col md={18} className="index-list">
                    <IndexList/>
                </Col>

            </Row>

        );
    }
}

export default Index;