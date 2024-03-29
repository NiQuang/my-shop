import { Button, Col, Drawer, Input, Form, Select,Space, Row, Radio } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../api/productAPI';

const EditProduct = (props) => {
    const [form, addModelForm] = useForm();
    const { id } = useParams();
    const { Option } = Select;
    const navigate = useNavigate();
    const onFinish = (e) => {
        const updatedProduct = {
            id: product.id,
            ...e
        }
        props.onUpdate(updatedProduct);
    };

    const [product, setProduct] = useState({});

    const onFinishFailed = () => {
        console.log(product['name']);
    }
    const toProductManager = () => {
        navigate("/admin/products")
    }


    useEffect(() => {
        getProduct(id).then((response) => {
            setProduct(response.data);
        });
    }, [id]);

    useEffect(() => form.resetFields(), [product]);
    const editForm = () => {
        return (
            <>
                    <Col span={16} offset={4}>
                        <Form
                            form={form}
                            name="productEdit"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            initialValues={product}
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
                                <Button>Add model</Button>
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
                                <Button danger={true} onClick={() => toProductManager()}>BACK TO MANAGER </Button>
                                <Button htmlType='submit' type='primary'>UPDATE PRODUCT</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    </>
        );
    };

    return (
        <Row>
            {editForm()}
        </Row>
    )
}

export default EditProduct;