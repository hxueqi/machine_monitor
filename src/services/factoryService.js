const getDepartments = () => fetch('http://intranet.taionline.net:14036/api/loadtfunction', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    FuncName: 'Tai.Backend.Qplant',
    ActiveActor: 'WKU11',
    FuncParam01: 'OEEMONITOR2',
    FuncParam02: 'SPAIN',
    FuncParam03: '',
    FuncParam04: '',
    FuncParam05: '',
    TraceLog: 'Y',
  }),
})
  .then((response) => response.json())
  .catch((error) => {
    throw new Error(error);
  });

export default getDepartments;
