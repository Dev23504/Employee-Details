var myfm=document.getElementById("form")
console.log(myfm)
const collectionofdata=[]
 
//attach the event handler to the form for the "submit" event
myfm.addEventListener("submit",handlesubmit);
 
 
  
function handlesubmit(event){
    event.preventDefault()

    var Name = document.getElementById('name').value
    var Id = document.getElementById('empId').value
    var Department = document.getElementById('department').value
    var experice = document.getElementById('exp').value
    var Email = document.getElementById('mail').value
    var number = document.getElementById('number').value

    console.log("Name :-",Name)
    console.log("Employee Id :-",Id)
    console.log("Department :-",Department)
    console.log("Experice :-",experice)
    console.log("Email :-",Email)
    console.log("Number :-",number)




    const data = {
        DName:            Name,
        DEmployeeId:      Id,
        DDepartment:      Department,
        DExperice:        experice,
        Demail:            Email,
        DNumber:          number 

    };
    console.log(data)
    
   

    collectionofdata.push(data)
    console.log(collectionofdata)

    Display(collectionofdata);
     document.querySelector("form").reset()
    }

    function Display(collectionofdata){
        document.querySelector("tbody").innerHTML ="";
    
    collectionofdata.forEach(function(data){
        //console.log(data)
        let tr =document.createElement("tr");


        let name =document.createElement("td");
        name.innerText=data.DName;

        let id =document.createElement("td");
        id.innerText=data.DEmployeeId;

        let department =document.createElement("td");
        department.innerText=data.DDepartment;

        let  experice =document.createElement("td");
        experice.innerText=data.DExperice;

        let  Email =document.createElement("td");
        Email.innerText=data.Demail;

        let  number =document.createElement("td");
        number.innerText=data. DNumber;


        let role =document.createElement("td");
        let roleText =giveRole(data.DExperice)
        role.innerText = roleText; 




        let DeleteElement =document.createElement("td");

        DeleteElement.innerText ="Delete"
        DeleteElement.style.cursor ="Pointer"

        DeleteElement.addEventListener("click",function(event){
        event.target.parentNode.remove()

        })

        DeleteElement.style.backgroundColor="Red"




       tr.append(name,id,department,experice,Email,number,role,DeleteElement);
       document.querySelector("tbody").append(tr);
    })
}

function giveRole(DExperice){
    if(DExperice>5){
        return "Senior"
    }

    else if (DExperice>=2 && DExperice){
        return "Junior"
    }

    else if (DExperice<=1){
        return "Fresher"
    }
}
      