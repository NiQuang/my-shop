import { Card, Col,Input, Pagination, Row } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
const HomePage = (props) => {
    const { page } = useParams();

    const navigate = useNavigate();
    const onSearch = (value) =>{
        navigate('/search/'+value);
    }

    if (!page) {
        props.changePage(1);
    }
    useEffect(() => {
        props.changePage(page);
    }, [page])


    return (
        <Row gutter={[30, 30]}>
            <Col span={20}>
                <Row gutter={[20, 20]}>
                    {props.products.map((item, index) => {
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
                        pageSize={props.pageSize}
                        total={props.length}
                        current={props.page}
                        size="default"
                        onChange={ (page, pageSize) => {
                            navigate("/page/"+page);
                        }}
                    >

                    </Pagination>
                </Row>
            </Col>
            <Col span={4}>
                {/* <Input.Search
                    allowClear
                    placeholder="Input search here!"
                    onSearch={onSearch}
                >
                
                </Input.Search> */}
            </Col>
        </Row>
    )
};

export default HomePage;