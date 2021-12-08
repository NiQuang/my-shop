import { Col, Card, Layout, Menu, Pagination, Row } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const ProductCategoryPage = ({ products, models, changePage, onFind }) => {
    const { SubMenu } = Menu;
    const { Content, Sider } = Layout;
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(4);


    return (
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Series">
                        <Menu.Item key="1"  onClick={ () => onFind(0)}>All</Menu.Item>
                        {models.map((item, index) => {
                            return (
                                <Menu.Item key={`model${item.id}`} onClick={ () => onFind(item.id)}>{item.name}</Menu.Item>
                            )
                        })}
                    </SubMenu>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280, backgroundColor: '#c5ccd2' }}>
                <Row gutter={[20, 20]}>
                    {products.map((item, index) => {
                        return (
                            <Col span={6} key={index} style={{
                            }}>
                                <Link to={`/products/${item.id}`}>
                                    <Card title={item.name} hoverable style={{ boxShadow: '-3px 2px 10px hsla(120, 100%, 25%, 0.25)' }}>
                                        <Row>
                                            <img src={item.img} alt={item.name} style={{
                                                width: '100%',
                                                minHeight: '320px'
                                            }} />
                                        </Row>
                                        <Row>
                                            <Col span={8}>
                                                So luong: {item?.quantity}
                                            </Col>
                                            <Col span={16}>
                                                {item.price}
                                            </Col>
                                        </Row>
                                    </Card>
                                </Link>
                            </Col>

                        )
                    })}
                </Row>
                <Row>
                    {/* <Pagination
                        size='default'
                        total={products['length']}
                        pageSize={pageSize}
                        current={page}
                        onChange={(page, pageSize) => {
                            changePage(page, pageSize);
                        }}
                        hideOnSinglePage
                    >
                    </Pagination> */}
                </Row>
            </Content>
        </Layout>
    );
};

export default ProductCategoryPage;