
//             const element = document.getElementById("selectCourse");
//             const checkValue = element.options[element.selectedIndex].value;
// const checkText = element.options[element.selectedIndex].text;
//             element.addEventListener("change", (e) => {
//   const dropdownValue = e.target.value;
//   const text = element.options[element.selectedIndex].text;
 
  // if (value) {
  //   document.getElementById("pick").textContent = `Value Selected: ${value}`;
  // } else {
  //   document.getElementById("pick").textContent = "";
  // }
// });

function validateForm() {
  let dropdownValue="";
  const element = document.getElementById("selectCourse");
  element.addEventListener("change", e => {
    dropdownValue = e.target.value;
  })

    let name= document.forms["vnsForm"]["name"].value;
let fathersName= document.forms["vnsForm"]["fathersName"].value;
let number= document.forms["vnsForm"]["number"].value;
let amount= document.forms["vnsForm"]["amount"].value;
let purpose= document.forms["vnsForm"]["purpose"].value;
    if (name == "" || fathersName=="" || number=="" || dropdown=="" || amount=="" || purpose=="" ||dropdownValue) {
      alert("Name must be filled out");
      return false;
    }else{
      console.log(name)
      console.log(fathersName)
      console.log(number)
      console.log(amount)
      console.log(purpose)
      console.log(dropdownValue)
      return true
    }
  }
