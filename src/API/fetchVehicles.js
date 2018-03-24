const fetchVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/';
  const raw = await fetch(url);
  const json = await raw.json();
  const vehiclesData = json.results.map(async vehicle => {
    return ({name: vehicle.name, model: vehicle.model,
      class: vehicle.vehicle_class, passengers: vehicle.passengers});
  });
  return Promise.all(vehiclesData);
};

export default fetchVehicles;