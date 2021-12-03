import {message, Button, Col, Input, Form, Radio, Row } from "antd";
import { authenticate } from "../../authenticate.js";
import {useNavigate} from 'react-router-dom';
import { addUser } from "../../api/userAPI";

const SignUpPage = () => {
    const navigate = useNavigate();

  const onSignUp = (e) => {
    const user = {
        isAdmin : false,
        ...e
    }
    addUser(user).then((response)=>{
      message.info('dang ky thanh cong');
      authenticate(response.data);
      navigate("/")
    }).catch(()=>{
      message.warning('dang ky that bai');
    }
    );
  }

    
    return (
            <Col span={12} offset={6}>
                <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
                <Form
                    name="signup"
                    labelCol={8}
                    wrapperCol={16}
                    onFinish={onSignUp}
                >
                    <Form.Item label="Email" name="email"
                        rules={
                            [
                                { required: true, message: 'Please input your email!' }
                            ]
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password"
                        rules={
                            [
                                { required: true, message: 'Please input your password!' }
                            ]
                        }
                    >
                        <Input type="password" />
                    </Form.Item>
                    <Form.Item label="Full name" name="fullname"
                        rules={
                            [
                                { required: true, message: 'Please input your fullname!' }
                            ]
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Gender" name="gender" initialValue={true}>
                        <Radio.Group>
                            <Radio value={true} defaultChecked={true}>Male</Radio>
                            <Radio value={false}>Female</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>DANG KY</Button>
                    </Form.Item>
                </Form>
            </Col>
    );
};

export default SignUpPage;
