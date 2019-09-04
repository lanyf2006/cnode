import React,{Component} from "react";
import {Layout,Row,Col,Divider,Menu,Icon,Dropdown,Button} from "antd";
import {Link}from 'react-router-dom';
import Nav from "./nav"

class MianHeader extends Component{
    render() {
        return <Layout.Header >
            <Row className="wrap">
                <Col md={6} xs={24}>
                    <h1 className="logo">广西云融媒体</h1>
                </Col>
                <Col md={18} xs={0}>
                    <Divider type="vertical" className="header-divider"/>
                    <Nav id="nav" mode="horizontal"/>
                </Col>
                <Col md={0} xs={24} className="xs-nav">
                    <Dropdown placement="bottomLeft" trigger={["click","touchend"]} overlay={<Nav id="xsNav" mode="vertical"/>}>
                        <Button><Icon type="bars"/></Button>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>;
    }
}

export default MianHeader;