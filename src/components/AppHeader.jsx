import { Row, Col, Dropdown, Menu } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { isAuthenticate } from '../authenticate';

const AppHeader = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">
                <Link to="/signup">
                    Sign up
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/signin">
                    Sign in
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                My Profile
            </Menu.Item>
        </Menu>
    )
    return (
        <Row style={{
            position:'fixed',
            top:'0',
            left:'0',
            right:'0',
            zIndex:'2'
        }}>
            <Row style={{ padding: '0 50px', width:'100%', backgroundImage:'linear-gradient(0, #0764ba, #000)' }}>
                <Col span={8} style={
                    { display: 'flex', alignItems: 'center' }
                }>
                    <p style={{
                        margin: 0,
                        fontSize: '25px'
                    }}>
                        HOTLINE ĐẶT HÀNG: 0393403570
                    </p>
                </Col>
                <Col span={8}>
                    <img src={'https://cdn.shopify.com/s/files/1/0322/5894/9164/files/My_Shop_Logo_Transparent.png?height=628&pad_color=fff&v=1581933721&width=1200'} alt=""
                        style={{
                            height: '80px'
                        }}
                    />
                </Col>
                <Col span={8}>
                    <Row align='middle' style={{ height: '100%' }}>
                        <Col span={12}>
                            <ShoppingCartOutlined />
                            Gio hang
                        </Col>
                        <Col span={12}>
                            <Dropdown overlay={menu}>
                                <a onClick={e => e.preventDefault()}>
                                    My account
                                    <UserOutlined />
                                </a>
                            </Dropdown>

                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{width: '100%'}}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{width:'100%', backgroundImage:'linear-gradient(0, #4b11a2,#0764ba)'}} >
                    <Menu.Item key="1">
                        <Link to="/">
                            Homepage
                        </Link>
                    </Menu.Item>


                    <Menu.Item key="2">
                        <Link to="/category">
                            Category
                        </Link>
                    </Menu.Item>


                    <Menu.Item key="3">
                        <Link to="/admin">
                            Admin
                        </Link>
                    </Menu.Item>
                </Menu>
            </Row>
        </Row>
    );
}

export default AppHeader;