let choice;
let clients;

window.onload=loaddata;
function loaddata() {

    document.getElementById("nameInput").addEventListener("keyup", function () {
        nameFunction(this.value);
    }, false);
    document.getElementById("idInput").addEventListener("keyup", function () {
        idFunction(this.value);
    }, false);
    document.getElementById("phoneInput").addEventListener("keyup", function () {
        phoneFunction(this.value);
    }, false);
}

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ClientData.json', true);

    xhr.onload = function () {

        clients = JSON.parse(this.responseText);
    }
    xhr.send();


function nameSearch() {
    document.getElementById("nameInput").style.display= "inline";
    document.getElementById("idInput").style.display= "none";
    document.getElementById("phoneInput").style.display= "none";
    choice = 1;

    let xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'nameSearch.html', true);

    xhr1.onload = function () {
        document.getElementById('searchType').innerHTML = this.responseText;

    }
    xhr1.send();
}

    function idSearch() {
        document.getElementById("nameInput").style.display= "none";
        document.getElementById("idInput").style.display= "inline";
        document.getElementById("phoneInput").style.display= "none";
        choice = 2;

        let xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'idSearch.html', true);

        xhr2.onload = function () {
            document.getElementById('searchType').innerHTML = this.responseText;

        }
        xhr2.send();
    }

        function phoneSearch() {
            document.getElementById("nameInput").style.display= "none";
            document.getElementById("idInput").style.display= "none";
            document.getElementById("phoneInput").style.display= "inline";
            choice = 3;

            let xhr3 = new XMLHttpRequest();
            xhr3.open('GET', 'phoneSearch.html', true);

            xhr3.onload = function () {
                document.getElementById('searchType').innerHTML = this.responseText;

            }
            xhr3.send();
    }


function nameFunction(nameInput) {

        let output = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
        let arrayName;
        for (let i = 0; i < clients.length; i++) {
            let obj = clients[i];
            arrayName = obj.lastName;
            if (arrayName.startsWith(nameInput)) {

                output += "<tr><td>"
                output += obj.id
                output += "</td><td>"
                output += obj.firstName
                output += "</td><td>"
                output += obj.lastName
                output += "</td><td>"
                output += obj.address
                output += "</td><td>"
                output += obj.postalCode
                output += "</td><td>"
                output += obj.phone
                output += "</td><td>"
                output += obj.type
                output += "</td></tr>";
            }

        }


        document.getElementById("searchResults").innerHTML = output;


    }


    function idFunction(idInput) {
        let output = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
        let arrayID;
        for (let i = 0; i < clients.length; i++) {
            let obj = clients[i];
            arrayID = obj.id.toString();
            if (arrayID.startsWith(idInput)) {

                output += "<tr><td>"
                output += obj.id
                output += "</td><td>"
                output += obj.firstName
                output += "</td><td>"
                output += obj.lastName
                output += "</td><td>"
                output += obj.address
                output += "</td><td>"
                output += obj.postalCode
                output += "</td><td>"
                output += obj.phone
                output += "</td><td>"
                output += obj.type
                output += "</td></tr>";
            }

        }
        document.getElementById("searchResults").innerHTML = output;
    }


    function phoneFunction(phoneInput) {

        let output = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
        let arrayPhone;
        for (let i = 0; i < clients.length; i++) {
            let obj = clients[i];
            arrayPhone = obj.phone;
            if (arrayPhone.startsWith(phoneInput)) {

                output += "<tr><td>"
                output += obj.id
                output += "</td><td>"
                output += obj.firstName
                output += "</td><td>"
                output += obj.lastName
                output += "</td><td>"
                output += obj.address
                output += "</td><td>"
                output += obj.postalCode
                output += "</td><td>"
                output += obj.phone
                output += "</td><td>"
                output += obj.type
                output += "</td></tr>";
            }

        }
        document.getElementById("searchResults").innerHTML = output;
    }