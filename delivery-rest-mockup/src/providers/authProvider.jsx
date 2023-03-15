import PocketBase from "pocketbase";

const apiUrl = "https://powerful-daybreak.pockethost.io";

const pb = new PocketBase(apiUrl);

const authProvider = {
  login: async ({ username, password }) => {
    const authData = await pb
      .collection("users")
      .authWithPassword(username, password);
    // console.log(`SE HA USADO LOGIN! CON USER: ${username} Y PWD: ${password}`)
    // console.log(authData.record.role);
    // console.log(pb.authStore.isValid);
    // console.log(pb.authStore.token);
    // console.log(pb.authStore.model.id);
    console.dir(authData);
    if (!pb.authStore.isValid) {
      return Promise.reject();
    }
    localStorage.setItem("username", authData.record.name);
    localStorage.setItem("email", authData.record.email);
    localStorage.setItem(
      "avatar",
      `https://powerful-daybreak.pockethost.io/api/files/_pb_users_auth_/${authData.record.id}/${authData.record.avatar}?thumb=100x100`
    );
    localStorage.setItem("permissions", authData.record.rol);
    localStorage.setItem("token", pb.authStore.token);
    return Promise.resolve();
  },

  logout: () => {
    pb.authStore.clear();
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    localStorage.removeItem("permissions");
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },

  getIdentity: () =>
    Promise.resolve({
      id: localStorage.getItem("username"),
    }),

  getPermissions: () => {
    const role = localStorage.getItem("permissions");
    // console.log("Permisos: " + role)
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export default authProvider;
