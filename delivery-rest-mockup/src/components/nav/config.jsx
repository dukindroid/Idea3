// component
import SvgColor from "../svg-color";

// ----------------------------------------------------------------------

const icon = (name) => {
  console.log(`icono: ${name}`);
  return (
    <SvgColor
      src={`/assets/icons/navbar/${name}.svg`}
      sx={{ width: 1, height: 1 }}
    />
  );
};
const navConfig = []
  /*
  {
    title: "Mis Fincas",
    path: "/dashboard/main/farms",
    icon: icon("ic_fincas"),
  },
  {
    title: "Autodiagnóstico",
    path: "/dashboard/main/farms",
    icon: icon("ic_fincas"),
  },
  {
    title: "Huella de carbono",
    path: "/dashboard/main/hdc",
    icon: icon("ic_huellaCarbono"),
  },
  {
    title: "Evotranspiración",
    path: "/dashboard/main/evotranspiration",
    icon: icon("ic_evaporation"),
  },
  {
    title: "Necesidades de riego",
    path: "/dashboard/main/blog",
    icon: icon("ic_watering"),
  },
  {
    title: "Datos agronómicos",
    path: "/dashboard/main/blog",
    icon: icon("ic_chart"),
  },
  {
    title: "Pronósticos climáticos",
    path: "/dashboard/main/blog",
    icon: icon("ic_weather"),
  },
  {
    title: "login",
    path: "/login",
    icon: icon("ic_lock"),
  },
  {
    title: "Not found",
    path: "/404",
    icon: icon("ic_disabled"),
  },
];

*/
export default navConfig;