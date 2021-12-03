import { Outlet, Link } from 'react-router-dom';
import { Col, Menu, Row } from 'antd';
import {MailOutlined, RollbackOutlined } from '@ant-design/icons'


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
                    {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.ItemGroup key="g1" title="Item 1">
                            <Menu.Item key="a1">Option 1</Menu.Item>
                            <Menu.Item key="a2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="a3">Option 3</Menu.Item>
                            <Menu.Item key="a4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu> */}
                    <Menu.Item key="1">
                        <Link to="products">
                            Product Manager
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="products/add">
                            Add Product
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