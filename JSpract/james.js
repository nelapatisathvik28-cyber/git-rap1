function showFormData() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const empId = document.getElementById("empId").value;
    const designation = document.getElementById("designation").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

  
    const gender = document.querySelector('input[name="gender"]:checked');
    const genderValue = gender ? gender.value : "Not selected";


const message = `
First Name: ${firstName}
Last Name: ${lastName}
Gender: ${genderValue}
Employee66 ID: ${empId}
Designation: ${designation}
Email: ${email}
Phone: ${phone}
    `;

 
    alert("Form Data:\n" + message);
}


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    showFormData(); 
});
