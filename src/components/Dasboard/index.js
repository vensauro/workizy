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
  const [modalState, setModalState] = useState({})
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
        const newTasks = res.data.map(element => {
          element.user = user.filter(e => e.id === element.user_id)[0]
          return element
        })
        console.log(newTasks)
        setTask(newTasks)
        setLoading(false)
      })
  }

  const [updateTaskss, setUpdateTaskss] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (user.length > 0)
      api()
        .url(`/tasks`)
        .get()
        .json(res => {
          const newTasks = res.data.map(element => {
            element.user = user.filter(e => e.id === element.user_id)[0]
            return element
          })
          console.log(newTasks)
          setTask(newTasks)
          setLoading(false)
        })
  }, [user, updateTaskss])

  return (
    <div className="container">
      <Header onClick={() => setModal(true)} handleButtonClick={() => setUpdateTaskss(!updateTaskss)} />
      <Modal
        hide={() => setModal(false)}
        visible={modal}
        state={modalState}
        setState={setModalState}
        updateTaskss={() => setUpdateTaskss(!updateTaskss)}
      />
      <Menu
        collapsed={collapsed}
        onCollapse={changeColapsed => setCollapsed(changeColapsed)}
      />
      <main className="main bg-red">main</main>
      <Sidebar tasks={task} loading={loading} updateModalState={setModalState} openModal={() => setModal(true)} />
      <Footer user={user} setTask={setTasks} />
    </div>
  );
}

export default Dashboard;
