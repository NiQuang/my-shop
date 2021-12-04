import { Outlet, Link } from 'react-router-dom';
import { Col, Menu, Row } from 'antd';
import {MailOutlined, RollbackOutlined, AreaChartOutlined, AppleOutlined } from '@ant-design/icons'


const AdminLayout = () => {
    const { SubMenu } = Menu;
    return (
        <Row>
            <Col span={4}
             style={{
                backgroundColor:'rgba(0, 21, 41, 0.9)',
                position:'fixed',
                top:0,
                left:0,
                bottom:0,
                width:'33.1667%'
             }}>
                <Menu defaultSelectedKeys={['1']} mode='inline'>
                <Menu.Item key="3">
                        <Link to="dashboard">
                        <AreaChartOutlined />
                            Dash board
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Link to="products">
                        <AppleOutlined />
                            Product Manager
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="0">
                        <Link to="/">
                            <RollbackOutlined />Go to website
                        </Link>
                    </Menu.Item>
                </Menu>
            </Col>
            <Col span={20} offset={4} style={{padding:'20px'}}>
                <Outlet />
            </Col>

        </Row>
    );
};
export default AdminLayout;