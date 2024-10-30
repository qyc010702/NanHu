import React, { Component } from 'react';
import { Table, Button, Space, Collapse, Card, Flex , Tooltip} from 'antd';
import { Typography } from 'antd';
import { Splitter } from "antd";
import ImageCropper from './Cropper';
const { Title, Text } = Typography;
const { Panel } = Collapse;

const Desc = (props) => (
    <Flex
        justify="center"
        align="center"
        style={{
            height: '100%',
        }}
    >
        <Typography.Title
            type="secondary"
            level={5}
            style={{
                whiteSpace: 'nowrap',
            }}
        >
            {props.text}
        </Typography.Title>
    </Flex>
);

class WrongMessage extends Component {
    state = {
        devices: [],
        data: [],
        imageUrl:'',
        imageUrl_standard:'',
        bbox:[],
        bbox_standard:[],
        base64ImageStandard:'',
        base64Image:''
    };

    componentDidMount() {
        this.fetchData();
    }


    fetchImage = async (url) => {
        const body={
            path:url
        }
        console.log(body);
        try {
          const response = await fetch('http://10.88.10.89:8080/file/getImage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log("2",data);
          this.setState({ base64Image: data.data }); // 假设返回的 JSON 中包含 base64 编码的图片
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };

      fetchImageStandard = async (url) => {
        const body={
            path:url
        }
        console.log(body);
        try {
          const response = await fetch('http://10.88.10.89:8080/file/getImage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log("1",data);
          this.setState({ base64ImageStandard: data.data }); // 假设返回的 JSON 中包含 base64 编码的图片
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };


    fetchData = async () => {
        const id = localStorage.getItem('selectedProjectId'); // 从 localStorage 获取 ID
        if (!id) {
            this.setState({ error: '未找到项目 ID' });
            return;
        }

        try {
            const response = await fetch(`http://10.88.10.89:8080/sqlite/fileErrorElement?id=${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (result.success) {
                this.setState({ 
                    data: result.data, 
                });
                console.log(result.data)
            } else {
                this.setState({ error: 'Failed to fetch data' });
            }
        } catch (error) {
            console.error('Fetch error:', error);
            this.setState({ data: [] }); // 设置为默认值或本地数据
        }
    }

    handleSelect = (item,index) => {
        //console.log(this.state.data[index].filePngPath);
        this.setState({ imageUrl: this.state.data[index].filePngPath }); // 设置选中项的图片 URL
        this.setState({ imageUrl_standard: this.state.data[index].standardPngPath }); // 设置选中项的图片 URL
        this.setState({ bbox: JSON.parse(this.state.data[index].frameLocation)});
        this.setState({ bbox_standard: JSON.parse(this.state.data[index].standardFrameLocation)}); // 设置选中项的图片 URL
        console.log(JSON.parse(this.state.data[index].frameLocation))
        this.fetchImage(this.state.data[index].filePngPath);
        this.fetchImageStandard(this.state.data[index].standardPngPath);
    };


    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
                sorter: true,
            },
            {
                title: '异常类型',
                dataIndex: 'errorType',
                key: 'errorType',
                sorter: true,
            },
            {
                title: '异常要素名',
                dataIndex: 'errorElementName',
                key: 'errorElementName',
                sorter: true,
            },
            {
                title: '异常要素文本',
                dataIndex: 'errorElementText',
                key: 'errorElementText',
                sorter: true,
                ellipsis: true, 
                render: (text) => (
                    <Tooltip title={text} placement="right">
                      <span>{text}</span>
                    </Tooltip>
                  ),
            },
            {
                title: '异常所属文件',
                dataIndex: 'belongFile',
                key: 'belongFile',
                sorter: true,
            },
            {
                title: '异常页码',
                dataIndex: 'errorPage',
                key: 'errorPage',
                sorter: true,
            },
            {
                title: '基准要素名',
                dataIndex: 'standardElementName',
                key: 'standardElementName',
                sorter: true,
            },
            {
                title: '基准要素文本',
                dataIndex: 'standardElementText',
                key: 'standardElementText',
                sorter: true,
                ellipsis: true, 
                render: (text) => (
                    <Tooltip title={text} placement="right">
                      <span>{text}</span>
                    </Tooltip>
                  ),
            },
            {
                title: '基准所属文件',
                dataIndex: 'standardBelongFile',
                key: 'standardBelongFile',
                sorter: true,
            },
            {
                title: '基准要素页码',
                dataIndex: 'standardElementPage',
                key: 'standardElementPage',
                sorter: true,
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record, index) => (
                    <Button onClick={() => this.handleSelect(record,index)}>选择</Button>
                ),
            },
        ];
        return (
            <div style={{ padding: 20 }}>
                <Card
                    style={{
                        background: 'rgb(220, 220, 220)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <Flex
                        vertical
                        gap="small"
                    >
                        <Text style={{ fontSize: '20px' }}>文件异常信息表</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <Table dataSource={this.state.data} columns={columns} bordered={true} />
                        </Card>
                    </Flex>
                </Card>
                <Card
                    style={{
                        background: 'rgb(220, 220, 220)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <Flex
                        vertical
                        gap="small"
                    >
                        <Text style={{ fontSize: '20px' }}>原文位置</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <Splitter
                                style={{
                                    height: 200,
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                                    <Text>基准信息</Text>
                                    <ImageCropper ref={ref => ref && ref.handleBase64Image(this.state.base64Image)} bbox_={this.state.bbox}/>
                                </Splitter.Panel>
                                <Splitter.Panel>
                                    <Text style={{ marginLeft: '15px' }}>异常信息</Text>
                                    <ImageCropper ref={ref => ref && ref.handleBase64Image(this.state.base64ImageStandard)} bbox_={this.state.bbox_standard}/>
                                </Splitter.Panel>
                            </Splitter>
                        </Card>
                    </Flex>
                </Card>
            </div>
        );
    }
}

export default WrongMessage;