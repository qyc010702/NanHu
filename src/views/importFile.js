import { UploadOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import {Select, Button, message, Upload, Flex, Card, Typography} from 'antd';
const { Option } = Select;

const { Text, Title } = Typography;
class ImportFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '待选择',
            fileAddress: ''
        };
    }

    handleOptionChange = (value) => {
        this.setState({ selectedOption: value });
    };

    handleAddressChange = (e) => {
        this.setState({ fileAddress: e.target.value });
    };

    handleUploadChange = info => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    };


    render() {
        const { selectedOption, fileAddress } = this.state;
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // 请替换为你的上传URL
            headers: {
                authorization: 'authorization-text', // 如果需要的话，可以设置请求头部
            },
            onChange: this.handleUploadChange,
        };
        return (
            <div>
                <h2>新建工程</h2>
                <Card style={{
                    background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                    marginTop:'10px'
                }}>
                    <Flex
                        vertical
                        gap="small"
                        style={{
                            width: 180,
                        }}
                    >
                    <Text>选择已有规则集</Text>
                    <Select value={selectedOption} onChange={this.handleOptionChange} style={{ width: 150 }}>
                        <Option value='规则集1'>规则集1</Option>
                        <Option value='规则集2'>规则集2</Option>
                        <Option value='规则集3'>规则集3</Option>
                        <Option value='规则集4'>规则集4</Option>
                    </Select>
                    </Flex>
                </Card>
                <Card style={{
                    background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                    marginTop:'10px'
                }}>
                    <Flex
                        vertical
                        gap="small"
                        style={{
                            width: 180,
                        }}
                    >
                        <Text>选择输入文件</Text>
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>点击上传</Button>
                        </Upload>
                    </Flex>
                </Card>
                <Card style={{
                    background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                    marginTop:'10px'
                }}>
                    <Flex
                        vertical
                        gap="small"
                        style={{
                            width: 180,
                        }}
                    >
                        <Text>保存工程文件位置</Text>
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>点击上传</Button>
                        </Upload>
                    </Flex>
                </Card>
                <Button
                    type="primary"
                    style={{ marginTop: '10px', width: '100px', height: '30px', borderRadius: '8px' }}
                    onClick={() => console.log('开始')}
                >开始执行</Button>
            </div>
        );
    }
}

export default ImportFile;
