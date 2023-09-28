function sendMail(event){
    event.preventDefault()

    var params ={
        name: document.getElementById("yname").value,
        email: document.getElementById("yemail").value,
        message: document.getElementById("ycomment").value
    }

    console.log("here the");
const serviceID = "service_usl519v";
const templateID = "template_grh32ub"

emailjs.send(serviceID, templateID, params).then(res => {
    document.getElementById("yname").value = "";
    document.getElementById("yemail").value = "";
    document.getElementById("ycomment").value = "";
    console.log(res);
    alert("Your message has been sent successfully");
}).catch(err => console.log(err));

}
