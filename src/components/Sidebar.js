import React, { useState, useEffect } from "react";
import { Card, Icon, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";

export const Sidebar = ({
  tasks,
  loading,
  user,
  description = "This is the description",
  title = "Card title",
  photoSrc = '',
  photoLoading = false
}) => (
  <section className="sidebar">
    {console.log(user)}
    {tasks.map(task =>
      <Cardezoka
        description={task.description}
        title={task.title}
        photoSrc={task}
        loading={loading}
        photoLoading={false}
      />
    )}
    
    <Cardezoka description={description} title={title} loading={loading} />
    <Cardezoka description={description} title={title} loading={loading} />
    <Cardezoka description={description} title={title} loading={loading} />
  </section>
);

function Cardezoka({
  description,
  title,
  loading = false,
  photoLoading,
  photoSrc
}) {
  return (
    <Card
      loading={loading || photoLoading}
      style={{ width: "100%" }}
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />
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
