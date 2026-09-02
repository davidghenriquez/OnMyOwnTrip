// Fuentes de agua situadas en vias publicas de Alcala de Henares. Capa
// independiente del array de POIs turisticos: se carga bajo demanda solo
// cuando el usuario activa el toggle de bebederos en el mapa (ver
// loadWaterFountains en app.js).
// Fuente: Ayuntamiento de Alcala de Henares, Portal de Datos Abiertos
// (https://opendata.ayto-alcaladehenares.es/dataset/fuentes-de-agua),
// datos 2024.
window.WATER_FOUNTAINS = window.WATER_FOUNTAINS || {};
WATER_FOUNTAINS['alcala-de-henares'] = [
  { id: '1', coords: [40.487657, -3.355224], status: 'operativa', address: 'Pza. Carlos I – Diego de Urbina' },
  { id: '3', coords: [40.490407, -3.376486], status: 'operativa', address: 'Antonio Cabezó – Crta. Daganzo' },
  { id: '4', coords: [40.482149, -3.36436], status: 'operativa', address: 'Plaza Cervantes: fuente nº 1' },
  { id: '5', coords: [40.482806, -3.364246], status: 'operativa', address: 'Plaza Cervantes: fuente nº 2' },
  { id: '6', coords: [40.482806, -3.364246], status: 'operativa', address: 'Parque Vivero – Reyes Catolicos' },
  { id: '7', coords: [40.476694, -3.36225], status: 'operativa', address: 'C. Gran Canal – C. Rio Torote' },
  { id: '8', coords: [40.478656, -3.372026], status: 'operativa', address: 'Pza. de Santa Ana' },
  { id: '9', coords: [40.482052, -3.358622], status: 'operativa', address: 'C. Giner de los Rios: hay 2 fuentes' },
  { id: '10', coords: [40.479735, -3.370573], status: 'operativa', address: 'Pza. de la Victoria' },
  { id: '11', coords: [40.484883, -3.361143], status: 'operativa', address: 'Pza. de los Martires: ( 4 fuentes)' },
  { id: '12', coords: [40.488265, -3.364398], status: 'operativa', address: 'Paseo de la Estación' },
  { id: '13', coords: [40.48779, -3.356419], status: 'operativa', address: 'Pza. de la Amistad – Diego de Urbina' },
  { id: '14', coords: [40.474354, -3.383842], status: 'operativa', address: 'Camino del Juncal (arqueología)' },
  { id: '15', coords: [40.501386, -3.369625], status: 'operativa', address: 'Octavio Paz (lateral izq. Junta Distrito)' },
  { id: '16', coords: [40.501578, -3.369004], status: 'operativa', address: 'Octavio Paz (lateral dch. Junta Distrito)' },
  { id: '17', coords: [40.480821, -3.363857], status: 'operativa', address: 'C. Trinidad' },
  { id: '18', coords: [40.480582, -3.37246], status: 'operativa', address: 'Puerta de Madrid' },
  { id: '19', coords: [40.473235, -3.365033], status: 'operativa', address: 'Pza. Rio Jarama' },
  { id: '20', coords: [40.479366, -3.367726], status: 'operativa', address: 'C. Empecinado – Sta. Catalina' },
  { id: '21', coords: [40.484309, -3.34544], status: 'operativa', address: 'Plaza Pedro Blas' },
  { id: '81', coords: [40.479084, -3.365011], status: 'operativa', address: 'Calle Portilla' },
  { id: '83', coords: [40.483386, -3.352319], status: 'operativa', address: 'Travesía de Segovia' },
  { id: '106', coords: [40.474125, -3.362543], status: 'operativa', address: 'Parque Paseo del Henares.' },
  { id: '107', coords: [40.471186, -3.361567], status: 'operativa', address: 'Parque Paseo del Henares.' },
];
