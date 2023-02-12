import {
  Affix,
  Avatar,
  Badge,
  Button,
  Col,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
  Typography,
} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

import {
  FaStore,
  FaShoppingCart,
  FaRegUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import Search from "../form/Search";
import { FiLogOut, FiHeart } from "react-icons/fi";
import { RiAdminLine, RiHistoryFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/authAction";

export default function Header() {
  let cart = [2, 3];
  const [affixed, setAffixed] = React.useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  console.log(user);

  const logout = () => {
    firebase.auth().signOut();
    dispatch(logoutUser(null));
    // if (typeof window !== "undefined") localStorage.removeItem("cart");
    // dispatch({
    //   type: "ADD_TO_CART",
    //   payload: [],
    // });
    // history.replace("/login");
  };


  const renderButtonLoginWrapper = () => {
    return (
      <>
        <Button type="link" shape="round" size="large">
          <Link to="/login">Login</Link>
        </Button>
        <Button type="primary" shape="round" size="large">
          <Link to="/register">Register</Link>
        </Button>
      </>
    );
  };
  const renderDropdownMenu = () => {
    const iconSize = 22;
    const dropdownItemStyle = { borderRadius: 8 };
    const dropdownTextStyle = {
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: "bold",
    };
    const menu = (
      <Menu style={{ borderRadius: 8, padding: 8 }}>
        {user.role !== "admin" ? (
          <>
            <Menu.Item style={dropdownItemStyle} key="profile">
              <Link to="/user/history" style={dropdownTextStyle}>
                Profile <FaRegUserCircle size={iconSize} />
              </Link>
            </Menu.Item>
            <Menu.Item style={dropdownItemStyle} key="wishlist">
              <Link to="/user/wishlist" style={dropdownTextStyle}>
                Wishlist <FiHeart size={iconSize} />
              </Link>
            </Menu.Item>
            <Menu.Item style={dropdownItemStyle} key="history">
              <Link to="/user/history" style={dropdownTextStyle}>
                History <RiHistoryFill size={iconSize} />
              </Link>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item style={dropdownItemStyle} key="dashboard">
            <Link to="/admin/dashboard" style={dropdownTextStyle}>
              Dashboard <RiAdminLine size={iconSize} />
            </Link>
          </Menu.Item>
        )}
        <Menu.Item style={dropdownItemStyle} onClick={logout} key="logout">
          <span style={dropdownTextStyle}>
            <span style={{ fontWeight: "normal" }}>Logout</span>{" "}
            <FiLogOut size={iconSize} />
          </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown menu={menu} placement="bottomRight" arrow>
        <Space size="small" align="center">
          <Button
            size="large"
            shape="circle"
            ghost={!affixed}
            style={{
              height: 50,
              width: 50,
              padding: 2,
              backgroundColor: affixed
                ? "transparent"
                : "rgba(245, 103, 102, 0.1)",
            }}
          >
            <Avatar size="large" src={user.picture} alt="avatar" />
          </Button>
          <Typography.Text
            type="secondary"
            style={{ width: 80, fontWeight: "bold" }}
            ellipsis
          >
            {user.name}
          </Typography.Text>
          <FaChevronDown className="dropdown-caret" />
        </Space>
      </Dropdown>
    );
  };

  return (
    <>
      <div style={{ height: 0.1, backgroundColor: "transparent" }}></div>
      <Affix
        offsetTop={affixed && 0.000001}
        onChange={(affixed) => setAffixed(affixed)}
      >
        <Layout.Header
          style={{
            height: "auto",
            backgroundColor: affixed ? "#fff" : "transparent",
          }}
          className={affixed && "boxshadow"}
        >
          <Row justify="space-between" align="middle">
            <Col span={7}>
              <Row align="middle" style={{ height: 70 }}>
                <img
                  src="https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg"
                  alt="logo"
                  style={{ height: "inherit" }}
                />
                <Link to="/" style={{ fontSize: 28, fontWeight: "bold" }}>
                  SetUpStore
                </Link>
              </Row>
            </Col>
            <Col span={10}>
              <Search affixed={affixed} />
            </Col>
            <Col span={4}>
              <Row align="middle" justify="end">
                {!user ? renderButtonLoginWrapper() : renderDropdownMenu()}
              </Row>
            </Col>
            <Col span={3}>
              <Row align="middle" justify="end">
                <Menu
                  mode="horizontal"
                  style={{
                    lineHeight: "46px",
                    backgroundColor: "transparent",
                    borderBottom: "none",
                    zIndex: 10,
                  }}
                >
                  <Menu.Item key={"store"}>
                    <Link to="/store">
                      <FaStore size={30} />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key={"card"}>
                    <Badge count={cart?.length}>
                      <Link to="/cart">
                        <FaShoppingCart size={28} />
                      </Link>
                    </Badge>
                  </Menu.Item>
                </Menu>

              </Row>
            </Col>
          </Row>
        </Layout.Header>
      </Affix>
    </>
  )
}
