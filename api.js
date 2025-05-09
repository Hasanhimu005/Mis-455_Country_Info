function start() {
    var searchTerm = document.getElementById("searchBox").value;

    var url = `https://restcountries.com/v3.1/name/${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => process(data))
        .catch(error => {
            var display = document.getElementById("displayArea");
            display.innerHTML = "<p style='color:red;'>Country not found or an error occurred. Please try again.</p>";
        });
}

function process(data) {
    var oldContent = document.getElementById("displayArea");
    oldContent.textContent = "";
    for (var a = 0; a < data.length; a++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("innerStyle");
        newDiv.innerHTML = `Country Name: ${data[a].name.common} <br><br>

                            Population: ${data[a].population}<br><br>
                            Country Flag: <img src="${data[a].flags.png}"> <br><br>
                            Capital : ${data[a].capital}  <br><br>
                            Region: ${data[a].region} <br><br>
                            Currency: ${data[a].currencies} <br><br>
                            Languages: ${data[a].languages}<br><br>
                           
                            
                            <strong>Google Maps Link:</strong> <a href="${data[a].maps.googleMaps}" target="_blank">Open in Google Maps</a><br><br>
                            <iframe
                                width="100%"
                                height="300"
                                frameborder="0"
                                style="border:0"
                                referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps?q=${data[a].latlng[0]},${data[a].latlng[1]}&hl=es;z=6&output=embed"
                                allowfullscreen>
                            </iframe>
                            `;

        oldContent.appendChild(newDiv);
    }
}


