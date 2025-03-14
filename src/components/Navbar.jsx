import React from "react";
import { useState, useEffect } from 'react';
import "../css/navbar.css"
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../assets/images/pp logo.png"
import { Input, Button, Row, Col, Popover, Menu } from 'antd';
import { Link } from "react-router-dom";
import Cart from "./Cart";
const Navbar = () => {

    const [showMenuIcon, setShowMenuIcon] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowMenuIcon(scrollPosition >= 1025);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    const content = (
        <Menu mode="vertical" style={{ width: "400px", border: "none", textAlign: "center" }}>
            <Menu.Item>
                <Link to='/'>
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/shop'>
                    Shop
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/about'>
                    About
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/contact'>
                    Contact Us
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <div className="navbar-section">
                <div className="navbar-container">

                    <div className='responsive-navbar'>

                        <Popover
                            content={content}
                            title={null}
                            trigger="click"

                        >
                            <div className='menu-icon'>
                                <MenuOutlined style={{ fontSize: "25px", color: '#fff' }} />
                            </div>
                        </Popover>

                        <div className="responsive-logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className='search-bar' style={{ display: "flex", justifyContent: "center" }}>
                            <Input
                                style={{ borderRadius: "20px", border: "1px solid #1e81b0" }}
                                placeholder="Search"
                                prefix={<SearchOutlined style={{}} />}
                                className="search-input"
                            />
                        </div>
                    </div>

                    <div className={`navbar-box ${isMenuOpen ? 'menu-open' : ''}`}>
                        <Row gutter={{ xs: 24, sm: 6, md: 12, lg: 32 }}>
                            <Col md={12}>
                                <div className='col-left'>
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="navbar-items">
                                        <Menu mode="horizontal">
                                            <Menu.Item>
                                                <Link to='/'>
                                                    Home
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link to='/shop'>
                                                    Shop
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link to='/about'>
                                                    About
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link to='/contact'>
                                                    Contact Us
                                                </Link>
                                            </Menu.Item>
                                        </Menu>
                                    </div>
                                </div>

                            </Col>
                            <Col md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className='col-right'>
                                    <div className='search-bar'>
                                        <Input
                                            style={{ borderRadius: "20px", border: "1px solid #1e81b0" }}
                                            placeholder="Search"
                                            prefix={<SearchOutlined style={{}} />}
                                            className="search-input"
                                        />
                                    </div>
                                    <div className='wishlist'>
                                        <HeartOutlined style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className='cart'>
                                       
                                       <Link to='/cart'> <ShoppingCartOutlined style={{ fontSize: '24px' ,color:'black'} } />
                                    </Link></div>
                                    <div className="auth-buttons">
                                    <Link to='/login' className="login-button" >
                                            Login
                                        </Link>
                                        
                                        <Link to='/login'className="signup-button">
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>

                            </Col>
                        </Row>

                    </div>
                </div>
            </div>




        </>

    )
}

export default Navbar