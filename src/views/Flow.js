import React from 'react';
import {Button, Col, Row} from 'antd';
import { withRouter } from '../components/withRouter';  // 使用自定义的 withRouter 高阶组件
import '../css/button.css';  // 自定义样式
import '../css/arrow.css'


class Flow extends React.Component {
    // 跳转到指定路径
    navigateTo = (path) => {
        this.props.navigate(path);
    };

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <Row style={{ marginBottom: '20px' }}>
                    <Col span={12} offset={6}>
                        <Button
                            type="primary"
                            className="large-green-button"
                            onClick={() => this.navigateTo('/database-selection')}
                            style={{ width: '100%' }}
                        >
                            数据库选择/管理
                        </Button>
                    </Col>
                </Row>

                <Row gutter={16} style={{ marginBottom: '10px' }}>
                    <Col span={4} offset={2}>
                        <Button
                            className="large-yellow-button"
                            type="primary"
                            onClick={() => this.navigateTo('/file-import')}
                            style={{ width: '100%' }}
                        >
                            文件导入
                        </Button>
                    </Col>
                    <Col span={2}>
                        <div className="arrow-right" style={{ margin: '0 auto' }}></div>
                    </Col>
                    <Col span={4}>
                        <Button
                            className="large-blue-button"
                            type="primary"
                            onClick={() => this.navigateTo('/file-classification')}
                            style={{ width: '100%' }}
                        >
                            文件归类
                        </Button>
                    </Col>
                    <Col span={2}>
                        <div className="arrow-right" style={{ margin: '0 auto' }}></div>
                    </Col>
                    <Col span={4}>
                        <Button
                            className="large-blue-button"
                            type="primary"
                            onClick={() => this.navigateTo('/element-extraction')}
                            style={{ width: '100%' }}
                        >
                            要素提取
                        </Button>
                    </Col>
                    <Col span={2}>
                        <div className="arrow-right" style={{ margin: '0 auto' }}></div>
                    </Col>
                    <Col span={4}>
                        <Button
                            className="large-blue-button"
                            type="primary"
                            onClick={() => this.navigateTo('/element-extraction')}
                            style={{ width: '100%' }}
                        >
                            要素提取
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col span={6} offset={9}>
                        <Button
                            type="primary"
                            className="large-green-button"
                            onClick={() => this.navigateTo('/rule-management')}
                            style={{ width: '100%' }}
                        >
                            添加/修改规则
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(Flow);
