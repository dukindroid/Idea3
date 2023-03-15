// in src/App.js
import * as React from "react";
import {
  Admin,
  // Resource
  CustomRoutes,
  EditGuesser,
  Resource,
} from "react-admin";
// import simpleRestProvider from "ra-data-simple-rest";
import { ListUsers } from "./pages/admin/ListUsers";
import { ListProducts } from "./pages/admin/ListProducts";
import // QueryClient,
// QueryClientProvider,
// useQuery
"react-query";
import { Route } from "react-router-dom";
import authProvider from "./providers/authProvider";
import MyLayout from "./layouts/MyLayout";
import MainView from "./pages/mainview";
import { default as myDataProvider } from "./providers/dataProvider";
import { ListAddress } from "./pages/admin/ListAddress";
import EditUsers from "./pages/admin/EditUsers";
import CreateUsers from "./pages/admin/CreateUser";
import { EditProducts } from "./pages/admin/EditProducts";
import { CreateProducts } from "./pages/admin/CreateProducts";
import { CreateAddress } from "./pages/admin/CreateAddress";
import { EditAddress } from "./pages/admin/EditAddress";

const App = () => {
  // const queryClient = new QueryClient();
  return (
    <>
      <Admin
        dataProvider={myDataProvider}
        authProvider={authProvider}
        layout={MyLayout}
      >
        <Resource name="users" list={<ListUsers />} edit={<EditUsers/>} create={<CreateUsers />} />
        <Resource name="domicilios" recordRepresentation="calle" edit={<EditAddress />} list={<ListAddress />} create={<CreateAddress />} />
        <Resource name="productos" list={<ListProducts />} edit={<EditProducts />} create={<CreateProducts />} />
        {/* 
        <Resource name="productos" list={<ListProducts />} />
        <CustomRoutes>
          <Route path="/listusers" element={<ListUsers />} />
          <Route path="/listaddress" element={<ListAddress />} />
          <Route path="/listproducts" element={<ListProducts />} /> 
          <Route path="/mainview" element={<MainView />} />
        </CustomRoutes>
        */}
      </Admin>
    </>
  );
};

{
  /*
  <CustomRoutes noLayout>
    <Route path="/mainview" element={<MainView />} />
  </CustomRoutes>
     <Resource name="users" list={ListUsers} />
      <Resource name="productos" list={ListProducts} />
    </Admin> */
}
export default App;
