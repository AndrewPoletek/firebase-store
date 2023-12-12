import {Form, Input, Button} from "antd";

const SignUp = () =>{
    return(
        <div>
        <h2>Sign Up</h2>
            <div>
                <Form>
                    <Form.Item>
                        <Input placeholder={"E-mail"} />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={"First Name"} />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={"Last Name"} />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={"Password"}  />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={"Password again"}  />
                    </Form.Item>
                    <Button>Sign Up</Button>
                </Form>
            </div>
        </div>
    )
}

export default SignUp