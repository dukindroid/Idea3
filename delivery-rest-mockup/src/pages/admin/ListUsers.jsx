// Debe listar  todos  usuarios, y poder editarlios y borrarlos.
import React from "react";
import {
  Datagrid,
  // ImageField,
  List,
  TextField,
  useRecordContext,
} from "react-admin";
import AvatarField from "../../components/AvatarField";

export const ListUsers = () => {
  // const apiUrl = "https://powerful-daybreak.pockethost.io/api";
  // const record = useRecordContext();
  // console.dir(record);
  // const src = `${apiUrl}/${record.collectionId}/${record.id}/${record.avatar}?thumb=100x100`;
  // console.log(src);

  return (
    <>
      <div>ListUsers</div>
      <List>
        <Datagrid rowClick="edit">
          <AvatarField source="avatar" />
          <TextField source="name" />
          <TextField source="rol" />
        </Datagrid>
      </List>
    </>
  );
};
