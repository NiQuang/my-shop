import {Col, Row} from 'antd';
import {AreaChartOutlined} from '@ant-design/icons';
const DashBoardPage = () =>{
    return (
        <Row gutter={[30,30]}>
            <Col span={8}
                style={{
                    height:'100px',
                    backgroundColor:'rgba(50, 94, 123, .4)',
                    backgroundClip:'content-box'
                }}>
                    <AreaChartOutlined />
                    DashBoard
            </Col>
            <Col span={8}
            style={{
                height:'100px',
                backgroundColor:'rgba(50, 94, 123, .4)',
            }}>
                ich
            </Col>
            <Col span={8}
            style={{
                height:'100px',
                backgroundColor:'rgba(50, 94, 123, .4)',
                backgroundClip:'content-box'
            }}>
                quang
                </Col>
        </Row>
    )
};

export default DashBoardPage;