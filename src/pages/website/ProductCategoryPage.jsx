import { Col, Card, Layout, Menu, Pagination, Row } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const ProductCategoryPage = ({ products, findList, models, onFind }) => {
    const { SubMenu } = Menu;
    const { Content, Sider } = Layout;
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [currentLength, setCurrentLength] = useState(findList['length']);

    const findByModelId = (id) => {
        if (id == 0) {
            onFind(products);
        } else {
            const list = products.filter((item) => {
                return item.modelId == id;
            })
            onFind(list);
        }
    }

    const getProductInPage = (page, pageSize) => {
        setPage(page);
        setPageSize(pageSize);
        const list = findList.filter((item, index) => {
            if((index > ((page-1)*pageSize-1)) && (index <=(page*pageSize -1))){
                console.log(index);
                return item;
            }
        })
        onFind(list);
    }

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
                        <Menu.Item key="1" onClick={() => findByModelId(0)}>All</Menu.Item>
                        {models.map((item, index) => {
                            return (
                                <Menu.Item key={`model${item.id}`} onClick={() => findByModelId(item.id)}>{item.name}</Menu.Item>
                            )
                        })}
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280, backgroundColor: '#c5ccd2' }}>
                <Row gutter={[20, 20]}>
                    {findList.map((item, index) => {
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
                    <Pagination
                        size='small'
                        total={currentLength}
                        pageSize={pageSize}
                        current={page}
                        onChange={(page, pageSize) => {
                            getProductInPage(page, pageSize);
                        }}
                    >

                    </Pagination>
                </Row>
            </Content>
        </Layout>
    );
};

export default ProductCategoryPage;