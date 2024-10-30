import React from 'react';
import { Layout, Menu } from 'antd';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Follow from "../views/Flow";
import Start from "../views/Start";
import Infomation from "../views/Infomation";
import SubMenu from "antd/es/menu/SubMenu";
import Abstract from "../views/Abstract";
import ImportFile from "../views/importFile";
import WrongMessage from "../views/WrongMessage";
import Flow from "../views/Flow";
import Search from "../views/Search";
import AISearch from "../views/AISearch";
import Regulation from "../views/Regulation";
import ImageTest from "../views/ImageTest";
import Projects from '../views/Projects';

const { Sider, Content } = Layout;

function AppRouter() {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider width={250} theme="dark" style={{height: '1500px'}}>
                    <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1','sub2','sub3','sub4']}>
                        <SubMenu key="sub1" title="项目">
                            <Menu.Item key="1">
                                <Link to="/Start">开始</Link>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <Link to="/importFile">新建工程</Link>
                            </Menu.Item>
                            <Menu.Item key="21">
                                <Link to="/Projects">打开工程</Link>
                            </Menu.Item>
                            {/*<Menu.Item key="2">*/}
                            {/*    <Link to="/flow">工作流</Link>*/}
                            {/*</Menu.Item>*/}
                        </SubMenu>
                        <SubMenu key="sub4" title="基础功能">
                            <Menu.Item key="3">
                                <Link to="/Abstract">摘要生成/文档归类</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/Infomation">固定要素提取</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/WrongMessage">异常信息显示</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/Search">信息查询</Link>
                            </Menu.Item>
                            <Menu.Item key="20">
                                <Link to="/ImageTest">图片</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="高级功能">
                            <Menu.Item key="7">
                                <Link to="/AISearch">AI检索</Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to="/AISearch">正则表达式生成</Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Link to="/AISearch">正则检索</Link>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <Link to="/Regulation">规则管理</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ minHeight: '100vh' }}>
                    <Content style={{ padding: '25px' }}>
                        <Routes>
                            <Route path="/flow" element={<Flow />} />
                            <Route path="/AISearch" element={<AISearch />} />
                            <Route path="/WrongMessage" element={<WrongMessage />} />
                            <Route path="/follow" element={<Follow />} />
                            <Route path="/Search" element={<Search />} />
                            <Route path="/Infomation" element={<Infomation />} />
                            <Route path="/importFile" element={<ImportFile />} />
                            <Route path="/Start" element={<Start />} />
                            <Route path="/Abstract" element={<Abstract />} />
                            <Route path="/Regulation" element={<Regulation />} />
                            <Route path="/ImageTest" element={<ImageTest />} />
                            <Route path="/Projects" element={<Projects />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
}

export default AppRouter;
