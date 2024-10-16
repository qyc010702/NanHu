import React, { Component } from 'react';
import {Table, Button, Space, Collapse, Card, Flex, Progress, List, Alert} from 'antd';
import { Typography } from 'antd';

const { Title,Text } = Typography;

const { Panel } = Collapse;

class Infomation extends Component {
    state = {
        devices:[],
        data:[],
    };





    render() {
        const columns = [
            {
                title: '要素名',
                dataIndex: 'id',
                key: 'id',
                sorter: true,
            },
            {
                title: '要素页码',
                dataIndex: 'time',
                key: 'time',
                sorter: true,
            },
            {
                title: '要素所属文件',
                dataIndex: 'place',
                key: 'place',
                sorter: true,
            },
            {
                title: '要素外包框位置',
                dataIndex: 'status',
                key: 'status',
                sorter: true,
            },
            {
                title: '要素文本',
                dataIndex: 'person',
                key: 'person',
                sorter: true,
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
                        <Text style={{fontSize:'20px'}}>文件信息表</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',  // 更深一点的灰色背景
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                            }}
                        >
                            <Table dataSource={this.state.data} columns={columns} bordered={true}/>;
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
                        <Text style={{fontSize:'20px'}}>原文位置</Text>
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

export default Infomation;
