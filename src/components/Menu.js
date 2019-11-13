import React from 'react';
import { Layout, Menu as AntMenu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu, Item } = AntMenu;

export function Menu({ collapsed, onCollapse }) {
  return (
    <Sider
      style={{ 
        height: '100%',
        gridArea: 'menu',
        zIndex: 9,
        borderRight: '1px solid #e8e8e8'
      }}
      // trigger={null}
      onCollapse={onCollapse}
      collapsible
      collapsed={collapsed}
      theme="light"
    >
      <div className="logo" />
      <AntMenu mode="inline" defaultSelectedKeys={['1']}>
        {/* <div className="logo" /> */}
        {/* <AntMenu defaultSelectedKeys={['1']} mode="inline"> */}
          <Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Item>
          <Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <AntMenu.Item key="3">Tom</AntMenu.Item>
            <AntMenu.Item key="4">Bill</AntMenu.Item>
            <Item key="5">Alex</Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Item key="6">Team 1</Item>
            <Item key="8">Team 2</Item>
          </SubMenu>
          <Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Item>
        </AntMenu>
      {/* </AntMenu> */}
    </Sider>
  )
}
