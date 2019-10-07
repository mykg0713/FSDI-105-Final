const salon={
    name:"Jaden's Pet Salon",
    phone:"866-898-1456",
    address:{
        street:"Elm St",
        number:"1313-5",
        city:"Santa Barbara",
        state:"CA"
    },
    workingHours:{
        days: 'Mon-Fri',
        open: '9:00 am',
        close: '6:00 pm'
    },
    pets:[]
}

let{name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

document.querySelector('.info').innerHTML=`<h1> Welcome to ${name} <br> </h1> <br> <p> Contact us: ${phone} <br>  <br> ${street} ${number} <br> We are available ${open} to ${close} .</p>`;


document.querySelector('footer .info').innerHTML=`${name} </h1> <br> <p> Contact us ${phone}, ${street} ${number} <br> Hours of operation: ${open} to ${close} </p>`;

var petCounter=0;


class Pet {
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
        this.hunger=10;
        this.happiness=5;
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.id="pet"+petCounter;
        petCounter+=1; //incrementing one by one
       
    }

    status=function(){
        console.log("happiness:" + this.happiness + "hunger:" +this.hunger);
    }
    feed=function(){
        this.hunger-=10;
        this.happiness+=5;
        console.log("Feeding...");
    }
    ownerContact=function(){
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact phone:" + this.contactPhone);
    }


}

var txtname = document.getElementById('name');
var txtage = document.getElementById('age');
var txttype = document.getElementById('type');
var txtgender = document.getElementById('gender');
var txtbreed = document.getElementById('breed');
var txtservice = document.getElementById('service');
var txtownerName = document.getElementById('ownerName');
var txtcontactPhone = document.getElementById('contactPhone');

function register(){
    const thePet=new Pet(txtname.value,txtage.value,txttype.value,txtgender.value,txtbreed.value, txtservice.value, txtownerName.value, txtcontactPhone.value);
    
   salon.pets.push(thePet);
   alert("Thank you for registering your pet");
   displayTable(thePet);
  
    
   
}

function clean(){
    txtname.value="";
    txtage.value="";
    txtgender.value="";
    txttype.value="";
    txtservice.value="";
    txtbreed.value="";
    txtownerName="";
    txtcontactPhone="";
}



function displayTable(aPet){
    var tBody =document.getElementById('listBody');
    var row = `<tr id="${aPet.id}">
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.type}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownerName}</td>
    <td>${aPet.contactPhone}</td>
    <td> <button onclick="remove('${aPet.id}');"> Delete </button></td> 
    <td> <button onclick="search('${aPet.search}');> Search </button></td>
</tr>`;

 tBody.innerHTML+=row;

}

function remove(petId){
    console.log('You want to delete ' + petId);
    var tr = document.getElementById(petId);
    //var indexDelete=0;

    for( var i=0;i<salon.pets.length;i++)
    {
        var selectedPet=salon.pets[i];
        
        if(selectedPet.id==petId) 
        {

               indexDelete=i;
        }    
    }

    salon.pets.splice(indexDelete,1);
    tr.remove();
}

/* function search(){
    var searchString = document.getElementById('inputSearch').value;
    var theFoundedPet;
    for( var i=0;i<salon.pets.length;i++)
    {
        
        var searchedPet=salon.pets[i];
        
        if(searchedPet.id==searchString) 
        {

               theFoundedPet=j;
               document.getElementById('pet' + theFoundedPet);
               ('class','selected');

               
        }    
    }
} */

function myFunction(aPet) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("petTable");
    tr = table.getElementsByTagName("tr");
  
     for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }









