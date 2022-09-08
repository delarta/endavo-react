import React, { useState } from "react";
import { Button, Card, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const findUser = response.data.find((user) => {
        if (email === user.email && username === user.username) {
          return true;
        }

        return false;
      });

      if (findUser) {
        navigate("/");
      } else {
        notification.error({
          message: "Login Failed!",
          description: "Email or username is incorrect",
        });
      }
    });
  };

  return (
    <div className="login-wrapper">
      <Card>
        <h2>Login</h2>
        <Form labelCol={{ span: 8 }} onFinish={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="false"
              name="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="false"
              name="username"
            />
          </div>
          <div className="form-group">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
