import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
const LayoutWebsite = () => {
    return (
        <>
            <AppHeader />
            <Layout>
                <Layout.Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

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
                </Layout.Header>
                <Layout.Content style={{ padding: '0 50px 100px 50px', width:'100%' }}>
                    <Outlet />
                </Layout.Content>
                <Layout.Footer 
                style={{
                     textAlign: 'center',
                     position:'fixed',
                     bottom:'0',
                     left:'0',
                     right:'0' ,
                     backgroundColor:'#001529',
                     color:'#fff'
                     }}>
                    Ant Design ©2018 Created by Ant UED
                    </Layout.Footer>
            </Layout>
        </>

    );
}

export default LayoutWebsite;