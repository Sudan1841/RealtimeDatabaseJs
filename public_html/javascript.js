/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const form = document.getElementById('contactForm');

// Get the alert element
//const alert = document.getElementById('.alert');
// Get the alert element
const alertElement = document.getElementById('myAlert');

// Get the close button element
//const closeBtn = alertElement.querySelector('.close-btn');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfLzg5Aeua0dA2TeWRAgslgyBXAeIzows",
  authDomain: "my-project-1562563201095.firebaseapp.com",
  databaseURL: "https://my-project-1562563201095.firebaseio.com",
  projectId: "my-project-1562563201095",
  storageBucket: "my-project-1562563201095.appspot.com",
  messagingSenderId: "212338060009",
  appId: "1:212338060009:web:ab28b665b26dd420e65e78",
  measurementId: "G-4ZLTP15DPZ"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("message");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const Fname = document.getElementById('Fname').value;
    const Lname = document.getElementById('Lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
   
    
    
    
    
    const inputAddress = document.getElementById('inputAddress').value;
    const inputAddress2 = document.getElementById('inputAddress2').value;
    const inputCity = document.getElementById('inputCity').value;
    const inputState = document.getElementById('inputState').value;
    const inputZip = document.getElementById('inputZip').value;
    const country = document.getElementById('country').value;
     const message = document.getElementById('message').value;
    
      
    
   saveMessage(Fname
   ,Lname
   ,email
   ,country
   ,message
   ,phone 
     ,inputAddress 
     ,inputAddress2 
     ,inputCity 
     ,inputState 
     ,inputZip );
    // Add click event listener to the close button
//    saveMessage
    
    

// Show the alert
alertElement.style.display = 'block';

// Set a timeout to hide the alert after 3 seconds (3000 milliseconds)
setTimeout(() => {
  alertElement.style.display = 'none';
}, 3000);


    
    
})
function saveMessage(Fname
,Lname
, email
,phone
,inputAddress
,country
, message
,inputAddress2,
 inputCity, 
  inputState, 
  inputZip){
    const newMessageRef = ref.push();
    newMessageRef.set({
        Fname:Fname,
        Lname:Lname,
        email:email,
        country:country,
        message:message,
        phone:phone,
        inputAddress:inputAddress,
        
        inputAddress2:inputAddress2,
        inputCity:inputCity, 
        inputState: inputState, 
        inputZip:inputZip  
       
        
    });
    
}



