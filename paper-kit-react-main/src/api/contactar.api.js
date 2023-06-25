const postContact = async (name,telefono,email,mensaje) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name": name,
      "telefono": telefono,
      "email": email,
      "mensaje": mensaje
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode:'cors'
    };
    
    let response = await fetch("http://localhost:8080/api/contactos/", requestOptions);
    let jsonData = await response.json();

    return jsonData;
}

export default postContact;
