import React, { useState, useEffect } from "react";
import { Modal as AntModal, message, Input, DatePicker, Select } from "antd";
import moment from "moment";
import { api } from "api";

const { Option } = Select;

const inputs = ["title", "description", "difficulty", "user_id", "status", "deadline"];

const difficultys = ["facil", "medio", "dificil"];

const status = ["a fazer", "fazendo", "feito", "atrasada", "confirmada"];

export const Modal = ({ visible, hide }) => {
  const [formValues, setFormValues] = useState({});
  const [usersData, setUsers] = useState([]);

  function taskCreate() {
    api()
      .url('/tasks')
      .post(formValues)
      .json(res => {
        message.info("Atividade Criada")
        hide()
        // message.info(JSON.stringify(formValues, null, 2));
      });
  }

  useEffect(() => {
    if (visible === true)
      api()
        .url('/users')
        .get()
        .json(res => {
          const a = res.data.map(({ id, name }) => ({ id, name }))
          setUsers(a)
          // message.info(JSON.stringify(res));
        });
  }, [visible]) // eslint-disable-line

  return (
    <AntModal
      title="Criar Task"
      visible={visible}
      onOk={taskCreate}
      onCancel={hide}
      okText="Criar"
      cancelText="Cancel"
    >
      <Input
        placeholder={"titulo"}
        value={formValues[inputs[0]]}
        onChange={e => {
          setFormValues({
            ...formValues,
            [inputs[0]]: e.target.value
          });
        }}
        style={{ marginTop: 10 }}
      />
      <Input
        placeholder={"descrição"}
        value={formValues[inputs[1]]}
        onChange={e => {
          setFormValues({
            ...formValues,
            [inputs[1]]: e.target.value
          });
        }}
        style={{ marginTop: 10 }}
      />
      <Select
        // defaultValue={0}
        placeholder="Dificuldade"
        style={{ width: "30%", marginTop: 10 }}
        onChange={value => {
          setFormValues({
            ...formValues,
            [inputs[2]]: value
          });
        }}
      >
        {difficultys.map((difficulty, index) => (
          <Option key={index} value={index}>
            {difficulty}
          </Option>
        ))}
      </Select>
      <Select
        // defaultValue={0}
        placeholder="Status"
        style={{ width: "30%", marginTop: 10, float: "right", marginLeft: 25 }}
        onChange={value => {
          setFormValues({
            ...formValues,
            [inputs[4]]: value
          });
        }}
      >
        {status.map((statusString, index) => (
          <Option key={index} value={index}>
            {statusString}
          </Option>
        ))}
      </Select>
      <Select
        // defaultValue={0}
        placeholder="Usuario"
        style={{ width: "30%", marginTop: 10, float: "right" }}
        onChange={value => {
          setFormValues({
            ...formValues,
            [inputs[3]]: value
          });
        }}
      >
        {usersData.map((user, index) => (
          <Option key={user.id} value={user.id}>
            {user.name}
          </Option>
        ))}
      </Select>
      <DatePicker
        size="large"
        placeholder="Selecione a data de termino"
        style={{ width: "100%", marginTop: 10 }}
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        // disabledTime={disabledDateTime}
        onChange={e => {
          setFormValues({
            ...formValues,
            [inputs[5]]: e.format()
          });
        }}
        showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
      />


    </AntModal>
  );
};

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment();
}
