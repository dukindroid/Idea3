// import { stringify } from "query-string";
import { fetchUtils } from "react-admin";
import PocketBase from "pocketbase";

// const pb = new PocketBase('http://31.220.49.30:8090');
// const apiUrl = 'https://henryhealthy.shop/pb/api/collectionas';

const apiUrl = "https://powerful-daybreak.pockethost.io/api/collections";
// const pb = new PocketBase(apiUrl);
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  // console.log(localStorage.getItem('token'))
  const { token } = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const myDataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    // console.log("Params: " + JSON.stringify(params))
    const sortQuery =
      order === "DESC" ? "sort=+".concat(field) : "sort=-".concat(field);
    // const filter =  params.filter;
    // &${(filter)?  `filter=(${stringify(filter)})` : ''}
    const url = `${apiUrl}/${resource}/records?${page ? `page=` + page : ""}&${
      perPage ? `perPage=` + perPage : ""
    }&${sortQuery}`;

    // console.log("sortQuery: " + sortQuery)
    // console.log("URL: " + url)
    // const url = `${apiUrl}/${resource}/records`;

    return httpClient(url).then(({ json }) => {
      // console.dir(json);
      return {
        data: json.items,
        total: json.totalItems,
      };
    });
  },
  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/records/${params.id}`).then(
      ({ json }) => {
        // console.log("Get one: " + JSON.stringify(json))
        const obj = { data: json };
        return obj;
      }
    ),

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}/records?${query}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/records/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/records/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/records`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),
};

export default myDataProvider;
/*

// in src/dataProvider.ts
import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "https://powerful-daybreak.pockethost.io/api/";
const httpClient = fetchUtils.fetchJson;

// TypeScript users must reference the type `DataProvider`
export const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}/records?${stringify(query)}`;
    console.log(`Me pidieron getList ${url}`);
    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(
        (headers.get("content-range") || "0").split("/").pop() || 0,
        10
      ),
    }));
  },
  getOne: (resource, params) => {
    console.log(`Me pidieron getOne ${url}`);
    return httpClient(`${apiUrl}/${resource}/records/${params.id}`).then(
      ({ json }) => ({
        data: json,
      })
    );
  },
  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}/records?${stringify(query)}`;
    console.log(`Me pidieron getMany ${url}`);
    return httpClient(url).then(({ json }) => ({ data: json }));
  },
  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}/records?${stringify(query)}`;

    console.log(`Me pidieron getManyRef ${url}`);
    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(
        (headers.get("content-range") || "0").split("/").pop() || 0,
        10
      ),
    }));
  },
  update: (resource, params) => {
    console.log(`Me pidieron create ${url}`);
    return httpClient(`${apiUrl}/${resource}/records/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    console.log(`Me pidieron updateMany ${url}`);
    return httpClient(`${apiUrl}/${resource}/records?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
  create: (resource, params) => {
    console.log(`Me pidieron create ${url}`);
    httpClient(`${apiUrl}/${resource}/records`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
  delete: (resource, params) => {
    console.log(`Me pidieron delete ${url}`);
    httpClient(`${apiUrl}/${resource}/records/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}/records?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
};
*/
