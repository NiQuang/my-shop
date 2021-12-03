import { Card, Carousel, Col, Row } from 'antd';

const HomePage = (props) => {
    const imgs =[
        'https://tieudung.vn/upload_images/images/2021/11/04/apple.jpg',
        'https://images.macrumors.com/t/V3mjve60VWoEhjek6dFX19CuyQQ=/1600x/article-new/2021/09/apple-event-september-14.jpg'
    ];
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
                <Carousel>
                    {imgs.map((item, index) =>{
                        return (
                            <div className="" key={index} style={{contentStyle
                            }}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })}

                    {/* <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div> */}
                </Carousel>
    )
};

export default HomePage;