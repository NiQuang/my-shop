import { Col, Input, Form, Radio, Select, Button, Row } from 'antd';
import {useNavigate} from 'react-router-dom';

const AddProduct = (props) => {
    const { Option } = Select;
    const onFinish = (e) => {
        console.log(e);
        props.createProduct(e);
    }

    const navigate = useNavigate();

    const toProductManager = () =>{
        navigate("/admin/products")
    }
    return (
        <Row>
            <Col span={16} offset={4}>
                <Form
                    name="productCRUD"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Product Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input product name!' }]}
                    >
                        <Input placeholder="Enter product name" />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[
                            { required: true, message: 'Please input product price!' },
                            { min: 0, message: "Gia phai la so duong" }

                        ]}
                    >
                        <Input placeholder="Enter price of product" />
                    </Form.Item>
                    <Form.Item label="Popukar" name="popular">
                        <Radio.Group>
                            <Radio.Button value={true}>Yes</Radio.Button>
                            <Radio.Button value={false}>No</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Model" name="modelId"
                        rules={[{ required: true, message: 'Please input product name!' }]}
                    >
                        <Select placeholder="Choose a model">
                            {props.models.map((item, index) => {
                                return (
                                    <Option value={item.id} key={index}>{item.name}</Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Rom" name="rom">
                        <Select placeholder="Choose rom option">
                            <Option value={32}>32GB</Option>
                            <Option value={64}>64GB</Option>
                            <Option value={128}>128GB</Option>
                            <Option value={256}>256GB</Option>
                            <Option value={512}>512GB</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Image Link" name="img">
                        <Input placeholder="Enter image link" />
                    </Form.Item>
                    <Form.Item label="Note" name="detail">
                        <Input.TextArea rows={4} placeholder="Detail about product" />
                    </Form.Item>
                    <Form.Item>
                        <Button danger={true} onClick={toProductManager}>BACK TO MANAGER </Button>
                        <Button htmlType='submit' type='primary'>ADD PRODUCT</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default AddProduct;