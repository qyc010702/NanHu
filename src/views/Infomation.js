import React, { Component } from 'react';
import { Table, Button, Card, Typography, Image, Tooltip } from 'antd';
import { Flex } from 'antd'; // 假设你已经有一个 Flex 组件
import ImageCropper from './Cropper';
const { Text } = Typography;

class Infomation extends Component {
    state = {
        data: [],
        error: null,
        imageUrl: null, // 存储图片 URL
        imageUrl: '',
        base64Image: '',
        bbox:[],
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
          console.log(data);
          this.setState({ base64Image: data.data }); // 假设返回的 JSON 中包含 base64 编码的图片
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
            const response = await fetch(`http://10.88.10.89:8080/sqlite/fileElement?id=${id}`);
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
    };

    handleSelect = (item,index) => {
        console.log(this.state.data[index].filePngPath);
        this.setState({ imageUrl: this.state.data[index].filePngPath }); // 设置选中项的图片 URL
        this.setState({ bbox: JSON.parse(this.state.data[index].frameLocation)}); // 设置选中项的图片 URL
        console.log(JSON.parse(this.state.data[index].frameLocation))
        this.fetchImage(this.state.data[index].filePngPath);
    };

    render() {
        const { imageUrl, base64Image } = this.state;
        const columns = [
            {
                title: '要素名',
                dataIndex: 'elementName',
                key: 'elementName',
                sorter: true,
            },
            {
                title: '要素页码',
                dataIndex: 'elementPage',
                key: 'elementPage',
                sorter: true,
            },
            {
                title: '要素所属文件',
                dataIndex: 'belongFile',
                key: 'belongFile',
                sorter: true,
            },
            {
                title: '要素外包框位置',
                dataIndex: 'frameLocation',
                key: 'frameLocation',
                sorter: true,
            },
            {
                title: '要素文本',
                dataIndex: 'elementText',
                key: 'elementText',
                sorter: true,
                ellipsis: true, 
                render: (text) => (
                    <Tooltip title={text} placement="right">
                      <span>{text}</span>
                    </Tooltip>
                  ),
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
                <Card style={{ background: 'rgb(220, 220, 220)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Flex vertical gap="small">
                        <Text style={{ fontSize: '20px' }}>文件信息表</Text>
                        <Card style={{ background: 'rgb(255, 255, 255)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <Table dataSource={this.state.data} columns={columns} bordered={true} />
                        </Card>
                    </Flex>
                </Card>
                <Card style={{ background: 'rgb(220, 220, 220)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Flex vertical gap="small">
                        <Text style={{ fontSize: '20px' }}>原文位置</Text>
                        <Card style={{ background: 'rgb(255, 255, 255)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            {base64Image && (
                                <div>
                                    <h2>显示图片：</h2>
                                    <ImageCropper ref={ref => ref && ref.handleBase64Image(this.state.base64Image)} bbox_={this.state.bbox}/>
                                </div>
                            )}
                        </Card>
                    </Flex>
                </Card>
            </div>
        );
    }
}

export default Infomation;
