const countUsers = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode: 'cors'
  };

  let response = await fetch("http://localhost:8080/api/usuarios/", requestOptions);
  let data = await response.json();
  console.log(data);
  return data; // Devuelve la cantidad de usuarios
};

export default countUsers;
