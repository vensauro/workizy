import React from 'react'
import { Icon, Typography, Menu, Dropdown, message } from 'antd';
import { useGlobalState } from 'hooks';

const { Title } = Typography;

const menu = (
  <Menu onClick={() => message.info('Click on menu item.')}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

export function Header({ onClick }) {
  const [user] = useGlobalState()

  return (
    <header className="header bg-white">
      <div />
      <Title>Workeezy</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evelyn',
          alignItems: 'center',
          margin: 15
        }}
      >
        <Icon
          type="file-add"
          style={{ fontSize: '2rem', margin: 15 }}
          onClick={onClick}
        />
        <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
          {user.name}
        </Dropdown.Button>
      </div>
    </header>
  )
}
