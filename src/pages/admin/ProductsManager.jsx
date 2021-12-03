import 'antd/dist/antd.css';
import { Image, Table, Space, message, Popconfirm, Button, Row } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsManager = ({ products, onRemove, models }) => {
    const { Column } = Table
    const data = products;

    const getModelName = (id) => {
        const model = models.find((item) => {
            return item.id === id;
        });
        return model?.name;
    }
    return (
        <>
            <Row>
                <Link to="add">
                    <Button>Them san pham</Button>
                </Link>
            </Row>
            <Row>
                <Table dataSource={data} rowKey="id" bordered style={{width:'100%'}}>
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="img" dataIndex="img" key="img"
                        render={(text, record) => (
                            <Image src={record.img} alt={record.name} className="prd__manage-img"
                                style={{
                                    maxWidth: '150px',
                                    maxHeight: '150px'
                                }} />
                        )}
                    />
                    <Column title="Model" dataIndex="modelId" key="modelId"
                        render={(text, record) => (
                            <p>{getModelName(record.modelId)}</p>
                        )
                        }
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <Link to={`${record.id}/edit`}>Edit</Link>
                                <Popconfirm title="Are you sure to remove this product ?"
                                    onConfirm={() => onRemove(record.id)}
                                >
                                    <Button>Remove</Button>
                                </Popconfirm>

                            </Space>
                        )}
                    />
                </Table>
            </Row>
        </>
    );
};

export default ProductsManager;