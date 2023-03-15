import React from 'react'
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'

const CreateUsers = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="avatar" />
        <ReferenceInput source="idDomicilio" reference="domicilios" >
          <SelectInput />
        </ReferenceInput>
        <TextInput source="name" />
        <TextInput source="rol" />
        <TextInput source="username" />
      </SimpleForm>
    </Create>
  )
}

export default CreateUsers