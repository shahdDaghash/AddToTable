function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById("Submit").addEventListener("click", function (event) {
    event.preventDefault();
    let table = document.getElementById("Table");
    let name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    let address = document.getElementById("Address").value;
    let date = document.getElementById("Date").value;
    let email = document.getElementById("Email").value;
    if(validateEmail(email)==false){
        var msg = document.getElementById("msg");
        msg.innerHTML = 'Invalid Email. Please try again';
        const emailInput = document.querySelector("#Email");
        emailInput.value="";
        setTimeout(() => msg.innerHTML="" , 10000);
    }
    else{
    var cnt = table.rows.length;

    let row = table.insertRow(cnt);
    let cell0 = row.insertCell(0)
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    let cell5 = row.insertCell(5);

    cell0.innerHTML = '<input type="checkbox" id="check" unchecked></input>';
    cell1.innerHTML = name;
    cell2.innerHTML = gender;
    cell3.innerHTML = address;
    cell4.innerHTML = date;
    cell5.innerHTML = email;

    const nameInput = document.querySelector("#name");
    nameInput.value="";
    
    const addressInput = document.querySelector("#Address");
    addressInput.value="";

    const dateInput = document.querySelector("#Date");
    dateInput.value="";

    const emailInput = document.querySelector("#Email");
    emailInput.value="";
    }
});

document.getElementById("Delete").addEventListener("click", function (event) {
    event.preventDefault();
    let table = document.getElementById("Table");
    var cnt = table.rows.length;
    if(cnt!=1){
        table.deleteRow(cnt-1);
    }
});

document.getElementById("Clear").addEventListener("click", function (event) {
    event.preventDefault();
    let table = document.getElementById("Table");
    var cnt = table.rows.length;
    for (var i = cnt - 1; i > 0; i--) {
        table.deleteRow(i);
    }
});

document.getElementById("DeleteSelected").addEventListener("click", function (event) {
    event.preventDefault();
    let table = document.getElementById("Table");
    var cnt = table.rows.length;
    var checkBoxes = table.getElementsByTagName("INPUT");
    for(var i=0; i<cnt-1; i++){
        if(checkBoxes[i].checked == true){
            table.deleteRow(i+1);
            i--;
        }
    }
});
