

const googleSearchButton = document.querySelector("#btnGoogleSearch");

googleSearchButton.addEventListener("click",function (event) {
    event.preventDefault();
    console.log(event);

    const form = document.querySelector("#googleSearch");

    const searchTerm = form.querySelector("input[name='q']").value;

    if (searchTerm === '') {
        alert('Írj már be valamit!')
    }else{
        form.submit();
        }
        
})


