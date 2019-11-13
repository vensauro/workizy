import React, { useState, useEffect } from 'react'
import { Card, Icon, Avatar } from 'antd'
import Meta from 'antd/lib/card/Meta'

export const Sidebar = ({
  description = "This is the description",
  title = "Card title",
  loading
}) =>
  <section className="sidebar">
    <Cardezoka description={description} title={title} loading={loading}/>
    <Cardezoka description={description} title={title} loading={loading}/>
    <Cardezoka description={description} title={title} loading={loading}/>
    <Cardezoka description={description} title={title} loading={loading}/>
  </section>



function Cardezoka({
  description,
  title,
  loading = false
}) {

  const [photoSrc, setPhotoSrc] = useState('')
  const [photoLoading, setPhotoLoading] = useState(true)

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=picture')
      .then(res => res.json())
      .then(res => setPhotoSrc(res.results[0].picture.large))
      .then(() => setPhotoLoading(false))
  }, [])

  return (
    <Card
      loading={loading || photoLoading}
      style={{ width: '100%' }}
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={photoSrc} />}
        title={title}
        description={description}
      />
    </Card>
  )
}
