import React, { FC } from "react";
import { Typography, Space } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

const { Title } = Typography;
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const Register: FC = () => {
  return (
    <div className={styles.registerPage}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title className={styles.title} level={2}>
            注册新用户
          </Title>
        </Space>
      </div>
      <div className={styles.registerCard}>
        <Form
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
            label="确认密码"
            name="confirmPassword"
            dependencies={["password"]}  // 依赖于password字段，当password字段发生变化时，confirmPassword字段也会重新校验
            rules={[
              { required: true, message: "请输入密码!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }else{
                  return Promise.reject(new Error("两次输入密码不一致"));
                  }
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickname"
            rules={[{ required: true, message: "请输入昵称!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to="/login">已有账号？去登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Register;
