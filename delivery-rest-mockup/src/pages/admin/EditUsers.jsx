import React from 'react'
import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'

const EditUsers = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="avatar" />
        <ReferenceInput source="idDomicilio" reference="domicilios" >
          <SelectInput />
        </ReferenceInput>
        <TextInput source="name" />
        <TextInput source="rol" />
        <TextInput source="username" />
      </SimpleForm>
    </Edit>
  )
}

export default EditUsers