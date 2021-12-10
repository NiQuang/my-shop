import { Input, Layout, Menu, Row } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
const LayoutWebsite = () => {
    const navigate = useNavigate();
    const onSearch = (value) => {
        navigate('/search/' + value);
    }

    return (
        <>
            <AppHeader />
            <Layout style={{ padding: '126px' }}>
                <Layout.Content style={{ padding: '0 50px 100px 50px', width: '100%' }}>
                    <Row>
                        <Input.Search
                            allowClear
                            placeholder="Input search here!"
                            onSearch={onSearch}
                        >

                        </Input.Search>
                    </Row>
                    <Row>
                        <Outlet />
                    </Row>
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