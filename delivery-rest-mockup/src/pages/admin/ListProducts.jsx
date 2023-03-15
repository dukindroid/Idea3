// Debe listar  todos  usuarios, y poder editarlios y borrarlos.
import React from "react";
import { Datagrid, List, TextField } from "react-admin";
import MyImageField from "../../components/MyImageField";

export const ListProducts = () => {
  return (
    <>
      {/* The rest of your application */}
      <div>ListProducts</div>
      <List>
        <Datagrid rowClick="edit">
          <MyImageField source="imagen" />
          <TextField source="nombre" />
          <TextField source="precio" />
        </Datagrid>
      </List>
    </>
  );
};
