import React, { useState, useEffect } from 'react';
import { Menu } from 'components/Menu'
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { Footer } from 'components/Footer';
import { Modal } from 'components/Modal';
import { useGlobalState } from 'hooks';
import './styles.css'

function Dashboard() {

  const [collapsed, setCollapsed] = useState(true)
  const [modal, setModal] = useState(false)

  const [, setGlobal] = useGlobalState()


  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setGlobal(user)
    console.log('useEffect')
  }, []) // eslint-disable-line
  
  return (
    <div className="container">
      <Header onClick={() => setModal(true)}/>
      <Modal hide={() => setModal(false)} visible={modal} />
      <Menu collapsed={collapsed} onCollapse={changeColapsed => setCollapsed(changeColapsed)} />
      <main className="main bg-red">main</main>
      <Sidebar />
      <Footer />
    </div>
  )
}

export default Dashboard;
