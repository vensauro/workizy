import React from "react";
import { Avatar } from "antd";

export const Footer = ({ user, setTask }) => {
  return (
    <footer className="footer bg-fuchsia">
      {user.map(e => (
        <Avatar
          key={e.id}
          size={90}
          style={{ margin: 10, minWidth: "85px" }}
          src={e.picture}
          onClick={() => setTask(e.id)}
        />
      ))}
    </footer>
  );
};
