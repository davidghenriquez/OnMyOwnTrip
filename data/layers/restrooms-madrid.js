// Aseos publicos fijos con publicidad -- distrito Centro y alrededores
// inmediatos (Madrid). Capa independiente del array de POIs turisticos: se
// carga bajo demanda solo cuando el usuario activa el toggle de aseos en el
// mapa (ver loadRestrooms en app.js). Financiados mediante publicidad, sin
// coste para el usuario, con criterios de diseno universal (accesibles).
// Fuente: Ayuntamiento de Madrid, Portal de Datos Abiertos
// (https://datos.madrid.es/dataset/300103-0-aseos-publicos-operativos),
// datos 2026. Licencia CC BY 4.0.
window.RESTROOMS = window.RESTROOMS || {};
RESTROOMS.madrid = [
  { id: '020035ASW', coords: [40.4184554, -3.7091287], barrio: 'CENTRO', status: 'operativa', address: 'PLAZA ISABEL II, 7', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020034ASW', coords: [40.4085893, -3.692684], barrio: 'CENTRO', status: 'operativa', address: 'PLAZA EMPERADOR CARLOS V, 9', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020059AS', coords: [40.4170173, -3.721598], barrio: 'CENTRO', status: 'operativa', address: 'PARQUE MADRID RIO', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020022AS', coords: [40.4216722, -3.6924174], barrio: 'CENTRO', status: 'operativa', address: 'PASEO RECOLETOS, 17', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020093AS', coords: [40.4146323, -3.6940378], barrio: 'CENTRO', status: 'operativa', address: 'PASEO PRADO, 10', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020054AS', coords: [40.4253813, -3.6916011], barrio: 'CENTRO', status: 'operativa', address: 'CALLE GENOVA, 29', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020027ASW', coords: [40.4046935, -3.7030565], barrio: 'ARGANZUELA', status: 'operativa', address: 'GLORIETA EMBAJADORES, 7', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020001ASW', coords: [40.4070824, -3.6927886], barrio: 'ARGANZUELA', status: 'operativa', address: 'CALLE MENDEZ ALVARO, 2', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020025ASW', coords: [40.4060911, -3.7117334], barrio: 'ARGANZUELA', status: 'operativa', address: 'CALLE TOLEDO, 127', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020039AS', coords: [40.4076676, -3.6893715], barrio: 'RETIRO', status: 'operativa', address: 'PASEO INFANTA ISABEL, 9', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020097ASW', coords: [40.4252537, -3.6881695], barrio: 'SALAMANCA', status: 'operativa', address: 'CALLE SERRANO, 32', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020026AS', coords: [40.4304627, -3.682382], barrio: 'SALAMANCA', status: 'operativa', address: 'CALLE NUÑEZ DE BALBOA, 70', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020096AS', coords: [40.4297261, -3.7053533], barrio: 'CHAMBERI', status: 'operativa', address: 'GLORIETA RUIZ JIMENEZ, 5', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020081ASW', coords: [40.4254088, -3.7185074], barrio: 'MONCLOA-ARAVACA', status: 'operativa', address: 'PASEO PINTOR ROSALES, 14', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020040AS', coords: [40.4207586, -3.7207892], barrio: 'MONCLOA-ARAVACA', status: 'operativa', address: 'GLORIETA SAN VICENTE, 1', tipo: 'wc', accesible: 'si', precio: 0 },
  { id: '020041AS', coords: [40.41448, -3.7040353], barrio: 'PUENTE DE VALLECAS', status: 'operativa', address: 'CALLE BENJAMIN PALENCIA, 2', tipo: 'wc', accesible: 'si', precio: 0 },
];
