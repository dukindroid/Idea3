// in src/App.js
import * as React from "react";
import {
  Admin,
  // Resource
  CustomRoutes,
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

const App = () => {
  // const queryClient = new QueryClient();
  return (
    <>
      <Admin
        dataProvider={myDataProvider}
        authProvider={authProvider}
        layout={MyLayout}
      >
        <Resource name="users" list={<ListUsers />} />
        <Resource name="domicilios" list={<ListAddress />} />
        <Resource name="productos" list={<ListProducts />} />
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
