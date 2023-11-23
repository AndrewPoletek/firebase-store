import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

// const

const Navigation = () =>{
    return(
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{"color":"white"}} >
                FIREBASE STORE
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={
                    [
                        {
                            key: 1,
                            label:"Home"
                        },
                        {
                            key: 2,
                            label:"Categories"
                        },
                        {
                            key: 3,
                            label:"Sign In"
                        },
                    ]
                }
                // items={new Array(15).fill(null).map((_, index) => {
                //     const key = index + 1;
                //     return {
                //         key,
                //         label: `nav ${key}`,
                //     };
                // })}
            />
        </Header>
    )
}

export default Navigation