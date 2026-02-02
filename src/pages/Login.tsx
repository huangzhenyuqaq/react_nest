import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Space, Typography, Form, Input, Button, Checkbox } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styles from "./Login.module.scss";
// import {useSearchParams} from 'react-router-dom';
const { Title } = Typography;
const onFinish = (values: any) => {
  console.log("Success:", values);
  const { username, password, remember } = values;
  if (remember) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }
};
const getRememberedCredentials = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  return { username, password };
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const Login: FC = () => {
  useEffect(() => {
    const { username, password } = getRememberedCredentials() || {};
    form.setFieldsValue({ username, password, remember: true });
  }, []);
  const [form] = Form.useForm();
  return (
    <div className={styles.registerPage}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title className={styles.title} level={2}>
            登录
          </Title>
        </Space>
      </div>
      <div className={styles.registerCard}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: "请输入用户名!" },
              {
                type: "string",
                min: 6,
                max: 20,
                message: "用户名长度必须在6-20之间",
              },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: "用户名只能包含字母、数字和下划线",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to="/register">没有账号？去注册</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
