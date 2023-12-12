import {Form, Input, Button} from "antd";

const SignIn = () =>{
    return(
        <div style={{marginRight: "10%"}}>
            <h2>Sign In</h2>
            <div>
                <Form>
                    <Form.Item>
                        <Input placeholder={"E-mail"} />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={"Password"}  />
                    </Form.Item>
                    <Button>Sign In</Button>
                    <Button>Sign In with google</Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn