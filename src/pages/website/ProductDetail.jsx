import { useParams } from 'react-router-dom';
import { Carousel ,Row, Col, Image, Button } from 'antd';
import {CarOutlined, SafetyCertificateOutlined, SketchOutlined} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getProduct } from '../../api/productAPI';
const ProductDetail = (props) => {
const {id} = useParams();

    const [product, setProduct] = useState({});
    useEffect( () => {
        getProduct(id).then((response) => {
            setProduct(response.data);
        });
    },[id])

    return (
        <>
        <Row style={{
            padding: '20px 0'
        }} gutter={[30, 20]}>
            <Col span={10}>
                <Image src={product.img}
                    style={{
                        padding: ''
                    }}
                />
            </Col>
            <Col span={14}>
                <Row style={
                    {
                        marginBottom: '20px',
                        fontSize: '30px'
                    }
                    }>{product.name}
                </Row>
                <Row style={{margin:'20px 0'}}> 
                    <Col span={4}>Tinh trang</Col>
                    <Col span={20}>Con hang</Col>
                </Row>
                <p>{product.rom}GB Bo nho trong</p>
                <p>sac 1 lan nguyen zin</p>
                <Button type="primary">Add to card</Button>
                <Row gutter={[0,20]} style={{marginTop:'auto'}}>
                    <Row style={{width:'100%'}}>
                        <Col span={2}>
                            <CarOutlined />
                            </Col>
                        <Col span={22}>MIỄN PHÍ VẬN CHUYỂN NỘI THÀNH</Col>
                    </Row>
                    <Row style={{width:'100%'}}>
                        <Col span={2}>
                            <SafetyCertificateOutlined />
                            </Col>
                        <Col span={22}>BẢO HÀNH DO LỖI NHÀ SẢN XUẤT</Col>
                    </Row>
                    <Row style={{width:'100%'}}>
                        <Col span={2}>
                            <SketchOutlined />
                            </Col>
                        <Col span={22}>CAM KẾT 100% HÀNG CHÍNH HÃNG</Col>
                    </Row>
                </Row>
            </Col>
        </Row>
        <Row>
            <Row>
                    SẢN PHẨM LIÊN QUAN
            </Row>
            <Row>

            </Row>
        </Row>
        </>
    )
};

export default ProductDetail;