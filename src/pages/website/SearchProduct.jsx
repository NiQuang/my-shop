import {Link, useParams} from 'react-router-dom';
import {Card, Col, Row} from 'antd';
import { useEffect, useState } from 'react';
const SearchProduct = (props) => {
    const {value} = useParams();

    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        const list = props.products.filter((item, index) => {
            if((item.name.toLowerCase()).search(value.toLowerCase()) >= 0 ){
                return item;
            }
        });
        setSearchList(list);
    },[props.products])
    return (
        <Row>
            {searchList.length === 0 ? (
                <div>No Data Found</div>
            ) : (
                searchList.map((item, index) => {
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
                })
            )}
        </Row>
    )
};

export default SearchProduct;