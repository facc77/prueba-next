"use client"
import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";

const items1: MenuProps['items'] = ['Home', 'Register', 'Login'].map((key) => ({
    key,
    label: `${key.toString()}`,
    // onClick: window.location.replace(`${key}`)
}));

const items2: any = ['Home', 'Register', 'Login'].map((key) => (
    <Link href={`/${key}`}>`${key.toString()}`</Link>
));

export default function example() {
    return (
        <Layout>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
        </Layout>
    );
}