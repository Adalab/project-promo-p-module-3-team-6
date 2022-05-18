//componente que contiene el fetch
function dataApi(data) {
  return fetch('//localhost:4000/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
}

export default dataApi;
