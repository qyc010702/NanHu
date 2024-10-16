import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { Typography } from 'antd';
import { withRouter } from '../components/withRouter';

const { Title } = Typography;

class Start extends Component {
    handleClick = (buttonIndex) => {
        console.log(`按钮${buttonIndex}被点击`);
    };

    navigateTo = (path) => {
        this.props.navigate(path);
    };
    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5%',
                height: '100vh',
            }}>
                <Card
                    style={{
                        width: 500,
                        height: 500,
                        padding: '20px',
                        borderRadius: '15px',
                        background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                        textAlign: 'center',
                    }}
                >
                    <Title level={2}>您想要做什么？</Title>
                    <Button
                        type="primary"
                        style={{ marginTop: '10%', width: '70%', height: '60px', borderRadius: '8px' }}
                        onClick={() => this.navigateTo('/importFile')}
                    >
                        新建工程
                    </Button>
                    <Button
                        type="primary"
                        style={{ marginTop: '10%', width: '70%', height: '60px', borderRadius: '8px' }}
                        onClick={() => this.handleClick(2)}
                    >
                        打开工程
                    </Button>
                    <Button
                        type="primary"
                        style={{ marginTop: '10%', width: '70%', height: '60px', borderRadius: '8px' }}
                        onClick={() => this.handleClick(3)}
                    >
                        创建规则集
                    </Button>
                </Card>
            </div>
        );
    }
}

export default withRouter(Start);
