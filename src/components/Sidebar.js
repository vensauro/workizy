import React from "react";
import { Card, Icon, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";

export const Sidebar = ({
  tasks,
  loading,
  updateModalState,
  openModal
}) => (
    <section className="sidebar">
      {tasks.map(task =>
        <Cardezoka
          key={task.id}
          description={task.description}
          title={task.title}
          photoSrc={task.user.picture}
          status={task.status}
          loading={loading}
          onClick={() => {
            console.log('yuke')
            updateModalState({
              ...task,
              isUpdate: true
            })
            openModal(true)
          }}
        />
      )}
    </section>
  );

function Cardezoka({
  description,
  title,
  loading = true,
  photoSrc,
  onClick,
  status
}) {
  return (
    <Card
      loading={loading}
      style={{ width: "100%" }}
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" onClick={onClick} />,
        <StatusIcon num={status} key="status" />
      ]}
    >
      <Meta
        avatar={<Avatar src={photoSrc} />}
        title={title}
        description={description}
      />
    </Card>
  );
}

const status = ["a fazer", "fazendo", "feito", "atrasada", "confirmada"];

function StatusIcon({ num }) {
  switch (num) {
    case 0:
      return <Icon type="info-circle" />
    case 1:
      return <Icon type="clock-circle" />
    case 2:
      return <Icon type="issues-close" />
    // return < Icon type="ellipsis" />
    case 3:
      return <Icon type="warning" />
    case 4:
      return <Icon type="check-circle" />

    default:
      return <Icon type="loading" />
  }
}
