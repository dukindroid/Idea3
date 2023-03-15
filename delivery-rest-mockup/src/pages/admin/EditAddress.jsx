// Debe listar  todos  usuarios, y poder editarlios y borrarlos.
import React from "react";
import {
  Datagrid,
  // ImageField,
  List,
  TextField,
  // useRecordContext,
} from "react-admin";
// import AvatarField from "../../components/AvatarField";

export const EditAddress = () => (
  <Edit>
      <SimpleForm>
          <TextInput source="calle" />
          <ReferenceInput source="collectionId" reference="collections" />
          <TextInput source="collectionName" />
          <DateInput source="created" />
          <TextInput source="id" />
          <NumberInput source="numero" />
          <DateInput source="updated" />
          <TextInput source="expand" />
      </SimpleForm>
  </Edit>
);



/*
// Debe listar  todos  usuarios, y poder editarlios y borrarlos.
import React, { useState } from "react";
import {
  Title,
  Datagrid,
  // ImageField,
  List,
  TextField,
  useGetList,
  ResourceContextProvider,
} from "react-admin";
import {
  Card,
  TextField as MuiTextField,
  Button,
  Toolbar
} from '@mui/material';
// import AvatarField from "../../components/AvatarField";

export const ListAddress = () => {
  // const apiUrl = "https://powerful-daybreak.pockethost.io/api";
  // const record = useRecordContext();
  // console.dir(record);
  // const src = `${apiUrl}/${record.collectionId}/${record.id}/${record.avatar}?thumb=100x100`;
  // console.log(src);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data, total, isLoading } = useGetList('domicilios', {
      filter: { q: filter },
      pagination: { page, perPage },
      sort: { field: 'id', order: 'ASC' }
  });
  const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
  }
  
  if (isLoading) {
      return <div>Loading...</div>;
  }
  return (
    <ResourceContextProvider value="domicilios">
      <Title title={<ResourceName />} />
      <Card>      
        <Datagrid data={data} >
          <TextField source="calle" />
          <TextField source="numeor" />
        </Datagrid>
      </Card>
      <Toolbar>
        {page > 1 && <Button onClick={() => setPage(page - 1)}>Previous page</Button>}
        {page < total / perPage && <Button onClick={() => setPage(page + 1)}>Next page</Button>}
      </Toolbar>
    </ResourceContextProvider>
  );
};
*/