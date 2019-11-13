import React, { useState } from 'react'
import { Modal as AntModal, message, Input, DatePicker, Select } from 'antd';
import moment from 'moment';
import wretch from 'wretch'

const { Option } = Select;

const inputs = [
  'title',
  'description',
  'difficulty',
  'status',
  'deadline'
]

const difficultys = [
  'facil',
  'medio',
  'dificil'
]

const status = [
  'a fazer',
  'fazendo',
  'feito',
  'atrasada',
  'confirmada'
]

export const Modal = ({ visible, hide }) => {

  const [formValues, setFormValues] = useState({})

  function taskCreate() {
    message.info('Atividade Criada')
    message.info(JSON.stringify(formValues))
  }

  return (
    <AntModal
      title='Criar Task'
      visible={visible}
      onOk={taskCreate}
      onCancel={hide}
      okText='Criar'
      cancelText='Cancel'
    >
      <Input
        placeholder={'titulo'}
        value={formValues[inputs[0]]}
        onChange={e => {
          setFormValues({
            ...formValues,
            [inputs[0]]: e.target.value
          })
        }}
        style={{ marginTop: 10 }}
      />
      <Input
        placeholder={'descrição'}
        value={formValues[inputs[1]]}
        onChange={e => {
          setFormValues({
            ...formValues,
            [inputs[1]]: e.target.value
          })
        }}
        style={{ marginTop: 10 }}
      />
      <Select
        // defaultValue={0}
        placeholder='Selecione a dificuldade'
        style={{ width: '49%', marginTop: 10}}
        onChange={value => {
          setFormValues({
            ...formValues,
            [inputs[2]]: value
          })
        }}
      >
        {difficultys.map((difficulty, index) =>
          <Option key={index} value={index}>{difficulty}</Option>
        )}
      </Select>
      <Select
        // defaultValue={0}
        placeholder='Selecione o status'
        style={{ width: '49%', marginTop: 10, float: 'right' }}
        onChange={value => {
          setFormValues({
            ...formValues,
            [inputs[3]]: value
          })
        }}
      >
        {status.map((statusString, index) =>
          <Option key={index} value={index}>{statusString}</Option>
        )}
      </Select>
      <DatePicker
        size='large'
        placeholder='Selecione a data de termino'
        style={{ width: '100%', marginTop: 10 }}
        format='YYYY-MM-DD HH:mm:ss'
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        onChange={e => {
          setFormValues({
            ...formValues,
            [inputs[4]]: e.format()
          })
        }}
        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
      />
    </AntModal>
  )
}

const range = (start, end) => Array.from({ length: end - start }, (e, i) => start + i)

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment();
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, moment().hour()),
    disabledMinutes: () => range(0, moment().minute()),
    disabledSeconds: () => range(0, moment().second()),
  };
}
