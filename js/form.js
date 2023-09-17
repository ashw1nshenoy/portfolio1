/*Form*/
function sendEmail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_1w2cff6"
    const templateID = "template_8b7mo9v"
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Thank You for the feedback!!")
  
      })
      .catch(err=>console.log(err));
  
  }
