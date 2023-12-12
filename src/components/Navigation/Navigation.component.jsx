import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Link} from "react-router-dom";

const { Header, Content, Footer } = Layout;

// const

const Navigation = () =>{
    return(
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{"color":"white"}} >
                <Link to={"/"}>FIREBASE STORE</Link>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={
                    [
                        {
                            key: 1,
                            label:<Link to={"/"}>Home</Link>
                        },
                        {
                            key: 2,
                            label:<Link to={"/categories"}>Categories</Link>
                        },
                        {
                            key: 3,
                            label:<Link to={"/auth"}>Sign In</Link>
                        },
                    ]
                }
            />
        </Header>
    )
}

export default Navigation