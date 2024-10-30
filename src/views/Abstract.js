import React, { Component } from 'react';
import {Table, Button, Space, Collapse, Card, Flex, Progress, List, Alert} from 'antd';
import { Typography } from 'antd';
import { withRouter } from '../components/withRouter';

const { Title,Text } = Typography;

const { Panel } = Collapse;

class Abstract extends Component {
    state = {
        devices:[]
    };





    render() {
        const { areas, personnelData } = this.state;
        const data1 = [
            '通知书1',
            '通知书2',
            '通知书3',
            '通知书4',
        ];
        const data2 = [
        ];
        const data3 = [
            '开工报告1',
        ];
        const data4 = [
            '技术方案1',
        ];
        const text = ` A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`;
        const items = [
            {
                key: '1',
                label: '中标通知书',
                children: <List
                    bordered
                    dataSource={data1}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark>[通知]</Typography.Text> {item}
                        </List.Item>
                    )}
                />,
            },
            {
                key: '2',
                label: '合同',
                children: <List
                    bordered
                    dataSource={data2}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark>[通知]</Typography.Text> {item}
                        </List.Item>
                    )}
                />,
            },
            {
                key: '3',
                label: '开工报告',
                children: <List
                    bordered
                    dataSource={data3}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark>[通知]</Typography.Text> {item}
                        </List.Item>
                    )}
                />,
            },
            {
                key: '4',
                label: '技术方案',
                children: <List
                    bordered
                    dataSource={data4}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark>[通知]</Typography.Text> {item}
                        </List.Item>
                    )}
                />,
            },
        ];
        return (
            <div style={{ padding: 20 }}>

                <Card
                    style={{
                        background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                    }}
                >
                    <Flex
                        vertical
                        gap="small"
                    >
                        <Text style={{fontSize:'20px'}}>文档分类</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',  // 更深一点的灰色背景
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                            }}
                        >
                            <Alert message="合同缺失" type="error" showIcon />
                            <Collapse items={items} defaultActiveKey={['1']}/>
                        </Card>
                    </Flex>
                </Card>
                <Card
                    style={{
                        background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                    }}
                >
                    <Flex
                        vertical
                        gap="small"
                    >
                        <Text style={{fontSize:'20px'}}>文件摘要</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',  // 更深一点的灰色背景
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                            }}
                        >
                            <Text style={{fontSize:'15px'}}>文档主要讲述了一份合同的组成部分、生效条件、解释顺序等方面的内容。
                                首先，文档规定了本合同的组成部分，包括双方在合同履行过程中达成的纪要、协议等文件，以及其他相关文件。这些文件互相解释，互为说明，如有不一致，则以上述文件所列顺序为准。
                                其次，文档确定了适用法律和争议解决方式。在订立、解释、履行及争议解决方面，均适用中华人民共和国法律。如果发生争议，双方应本着诚实信用原则，通过友好协商解决。经协商仍无法达成一致的，则按仲裁或诉讼的方式处理。
                                文档还规定了合同附件、生效条件和份数等方面的内容。在签署页中，有甲方和乙方的信息，以及法定代表人或授权代表的签字和日期。
                                文档主要讲述了一份合同的组成部分、生效条件、解释顺序等方面的内容。
                                首先，文档规定了本合同的组成部分，包括双方在合同履行过程中达成的纪要、协议等文件，以及其他相关文件。这些文件互相解释，互为说明，如有不一致，则以上述文件所列顺序为准。
                                其次，文档确定了适用法律和争议解决方式。在订立、解释、履行及争议解决方面，均适用中华人民共和国法律。如果发生争议，双方应本着诚实信用原则，通过友好协商解决。经协商仍无法达成一致的，则按仲裁或诉讼的方式处理。
                                文档还规定了合同附件、生效条件和份数等方面的内容。在签署页中，有甲方和乙方的信息，以及法定代表人或授权代表的签字和日期。

                            </Text>
                        </Card>
                    </Flex>
                </Card>
            </div>
        );
    }
}

export default Abstract;
