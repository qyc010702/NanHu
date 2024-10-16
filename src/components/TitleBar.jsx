import React, { Component } from 'react';
import {
    Button, Card,
    Col, Flex,
    Layout, Row,
} from 'antd';
import { css, StyleSheet } from 'aphrodite';
import { Typography } from 'antd';
import ProgressCircle from "./PCircle";
import MyDrawer from "./MyDrawer";

const { Text, Title } = Typography;

const styles = StyleSheet.create({
    header: {
        //display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'white',
    },
});

const { Header } = Layout;

class TitleBar extends Component {
    render() {
        const { onClick } = this.props;

        return (
            <Header className={css(styles.header)}>
                <Row>
                    <Col>
                        <Text style={{ color: '#ffffff', fontSize: '23px' }}>项目文档管理系统</Text>
                    </Col>
                    <Col offset={1}>
                        <Button onClick={onClick} style={{ marginLeft: '5px' }}>打开</Button>
                        <Button onClick={onClick} style={{ marginLeft: '5px' }}>保存</Button>
                        <Button onClick={onClick} style={{ marginLeft: '5px' }}>另存为</Button>
                    </Col>
                    <Col offset={3}>
                        <Card
                            style={{
                                height: '50px',
                                padding: '10px',
                                borderRadius: '15px',
                                background: 'rgb(150, 150, 150)',  // 更深一点的灰色背景
                                display: 'flex', // 使用 flex 布局
                                justifyContent: 'center', // 水平居中
                                alignItems: 'center', // 垂直居中
                                flexDirection: 'column', // 默认为垂直排列，因为我们希望整个内容垂直居中
                                marginTop: '5px'
                            }}
                        >
                            <Flex
                                align="center" // 子元素垂直居中对齐
                                justify="center" // 子元素水平居中对齐
                                style={{ width: '100%' }} // 确保 Flex 占据全部宽度
                            >
                                <Text style={{ color: '#ffffff', fontSize: '20px', marginBottom: '5px', marginRight: '5px' }}>处理进度</Text>
                                <ProgressCircle />
                                <MyDrawer />
                            </Flex>
                        </Card>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default TitleBar;
