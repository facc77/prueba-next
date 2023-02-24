"use client"

import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "../../styles/register.module.css";
import {PrismaClient} from "@prisma/client";

const prisma =  new PrismaClient();

export default function Regiter() {
    const method = async () => {
        const user = await prisma.user.create({
            data: {
                name: "admin",
                email: "andrescuellotrabajo@gmail.com",
                password: "123456"
            }
        })
        console.log(user)
    }
    
    method()

    const [form, setform] = useState({
        username: "",
        password: "",
        email: "",
    })

    const onChange = (e: any) => {
        let { value, name } = e.target;
        setform({ ...form, [name]: value })
    }
    const Resgiter = () => {
        if (/^[^\s]+[^\s]+[^\s]+$/.test(form.username) == false) {
            console.error("Invalid username");
        } else {
            console.log(form)
        }
    }
    return (
        <div className={styles.register_body}>
            <Form
                name="basic"
                labelCol={{ span: 30 }}
                wrapperCol={{ span: 30 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                layout="vertical"
                className={styles.form_style}
            >
                <Form.Item>
                    <div className={styles.register_title}>
                        <i>Registro de usuario</i>
                    </div>
                </Form.Item>
                <Form.Item
                    label="Usuario"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input name="username" onChange={onChange} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name="email" onChange={onChange} />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password name="password" onChange={onChange} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 30, span: 30 }}>
                    <Checkbox>Es mayorista?</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 30, span: 30 }}>
                    <Button onClick={Resgiter} type="primary" block htmlType="submit">
                        Registro
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}