import React, { useState, useEffect } from 'react';
import './styles.css'
import { Menu } from 'components/Menu'
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { Footer } from 'components/Footer';
import { Modal } from 'components/Modal';
import { LoggedContextEvolution } from 'App';

function Dashboard() {

  const [collapsed, setCollapsed] = useState(true)
  const [modal, setModal] = useState(false)

  const [global, setGlobal] = LoggedContextEvolution()


  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    setGlobal(user)
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
