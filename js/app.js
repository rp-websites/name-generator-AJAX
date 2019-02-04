//Variables
const genderForm = document.getElementById("generate-names");


//Event Listeners
genderForm.addEventListener('submit', loadRegion);



//Functions
function loadRegion(e) {
    e.preventDefault();

    //Get Values from inputs
    let url = `https://uinames.com/api/?`;
    let origin = document.getElementById("country").value;
    let gender = document.getElementById("gender").value;
    let amount = document.getElementById("quantity").value;

    //Read the origin and append to URL
    if (origin !== "") {
        url += `region=${origin}&`
    }
    //Read the gender and append to URL
    if (gender !== "") {
        url += `gender=${gender}&`
    }
    //Read the quantity and append to URL
    if (amount !== "") {
        url += `amount=${amount}&`
    }
    //AJAX call
    const xhr = new XMLHttpRequest();

    //Open connection
    xhr.open('GET', url, true);

    //Execute the function
    xhr.onload = function () {
        if (this.status === 200) {
            const names = JSON.parse(this.responseText);
            console.log(names)

            //Insert in HTML
            let html = `<h2>Generated Names</h2><ul class="list">`;
            names.forEach(name => {
                html += `<li>${name.name}</li>`
            })
            html += `</ul>`

            let result = document.getElementById("result").innerHTML = html;

        }


    }

    //Send the Request
    xhr.send();

}