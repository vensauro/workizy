import React, { useState, useEffect } from "react";
import { Menu } from "components/Menu";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import { Footer } from "components/Footer";
import { Modal } from "components/Modal";
import { useGlobalState } from "hooks";
import { api } from "api";
import "./styles.css";
import wretcher from "wretch";

function Dashboard() {
  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([])
  const [task, setTask] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setGlobal] = useGlobalState();

  // const [photoSrc, setPhotoSrc] = useState('')
  // const [photoLoading, setPhotoLoading] = useState(true)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setGlobal(user);
    console.log("useEffect");
  }, []); // eslint-disable-line

  useEffect(() => {
    setLoading(true)
    api()
    .url('/users')
    .get()
    .json(async res => {
      const { data } = res
      const photos = await wretcher(`https://randomuser.me/api/?inc=picture&results=${data.length}`).get().json()
      const picture = photos.results.map(pic => pic.picture.medium)
      
      const usuarios = data.map((usuario, index) => {
        usuario.picture = picture[index]
        return usuario
      })

      setUser(usuarios)
      setLoading(false)
    })
  }, []);
 
  function setTasks(id) {
    setLoading(true)

    api()
      .url(`/task/${id}`)
      .get()
      .json(res => {
        console.log(res)
        setTask(res.data)
        setLoading(false)
      })
  }

  return (
    <div className="container">
      <Header onClick={() => setModal(true)} />
      <Modal hide={() => setModal(false)} visible={modal} />
      <Menu
        collapsed={collapsed}
        onCollapse={changeColapsed => setCollapsed(changeColapsed)}
      />
      <main className="main bg-red">main</main>
      <Sidebar tasks={task} loading={loading} user={task.length > 0 ? user.map(e => e.id === task[0].user_id) : {}}/>
      <Footer user={user} setTask={setTasks}/>
    </div>
  );
}

export default Dashboard;
