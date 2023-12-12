import Navigation from "../../components/Navigation/Navigation.component";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet} from 'react-router'

const { Header, Content, Footer } = Layout;

const MainLayout = () =>{
    return (
        <Layout className="layout">
            <Navigation />
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ background: "white" }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    )
}

export default MainLayout