import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
const LayoutWebsite = () => {
    return (
        <>
            <AppHeader />
            <Layout style={{padding: '126px'}}>
                <Layout.Content style={{ padding: '0 50px 100px 50px', width: '100%' }}>
                    <Outlet />
                </Layout.Content>
                <Layout.Footer
                    style={{
                        textAlign: 'center',
                        position: 'fixed',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        backgroundColor: '#001529',
                        color: '#fff'
                    }}>
                    Ant Design ©2018 Created by Ant UED
                </Layout.Footer>
            </Layout>
        </>

    );
}

export default LayoutWebsite;