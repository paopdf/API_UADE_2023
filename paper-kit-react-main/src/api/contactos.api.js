const getContacts = async (token,setContacts) => {
    console.log("hasta aca vamos bien")

    if (!token) {
      console.log("no hay token")
      return;
    }    
    
    var myHeaders = new Headers();
    
    myHeaders.append("jwt",token);
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode:'cors'
    };
    
    try {
      let response = await fetch("http://localhost:8080/api/contactos/", requestOptions);
  
      if (response.status === 200) {
        let jsonData = await response.json();
        setContacts(jsonData);
        console.log(jsonData);
      } else {
        // La solicitud no fue exitosa, realizar la acción adecuada (por ejemplo, mostrar un mensaje de error)
        console.log("Error en la solicitud:", response.status);
      }
    } catch (error) {
      // Error en la solicitud, realizar la acción adecuada (por ejemplo, mostrar un mensaje de error)
      console.log("Error en la solicitud:", error);
    }
}

export default getContacts;
