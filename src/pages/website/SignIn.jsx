import { Col, Button, Input, Checkbox,Form, message } from "antd";
import { singin } from "../../api/authAPI";
import { authenticate, isAdmin, isAuthenticate } from "../../authenticate.js";
import {useNavigate} from 'react-router-dom';


const SingInPage = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        singin(values).then((response) =>{
            message.success('Dang nhap thanh cong');
            //luu thong tin vao localStorage
            authenticate(response.data.user);

            //lay thong tin
            if(response.data.user.isAdmin === true){
                navigate('/admin/products');
            }else{
                navigate('/');
            }
        }).catch((error) => {
            message.error(error.response.data);
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Col span={12} offset={6}>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    );
};

export default SingInPage;