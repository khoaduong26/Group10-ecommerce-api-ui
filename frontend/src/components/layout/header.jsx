import React, { useContext, useState } from 'react';
import { UsergroupAddOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Modal } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const navigate = useNavigate();
    const { auth, logout } = useContext(AuthContext);

    const [current, setCurrent] = useState('mail');

    const confirmLogout = () => {
        Modal.confirm({
            title: 'Confirm logout',
            content: 'Are you sure you want to log out?',
            okText: 'Log out',
            cancelText: 'Cancel',
            onOk: () => {
                logout();
                setCurrent('home');
                navigate('/login');
            }
        });
    };

    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        ...(auth.isAuthenticated ? [{
            label: <Link to={auth?.user?.role === 'ADMIN' ? "/admin/profile" : "/user/profile"}>Profile</Link>,
            key: 'profile',
            icon: <UsergroupAddOutlined />,
        }] : []),

        {
            label: `Welcome ${auth?.user?.email ?? "Guest"}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                ...(auth.isAuthenticated ? [{
                    label: <span onClick={confirmLogout}>Đăng xuất</span>,
                    key: 'logout',
                }] : [
                    {
                        label: <Link to={"/login"}>Đăng nhập</Link>,
                        key: 'login',
                    },
                ]),
            ],
        },
    ];

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;