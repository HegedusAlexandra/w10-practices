// form js-sel,timeout,save

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

    setInterval(save,5000);


    async function save() {
        const textarea = document.querySelector("#doc-text");
        const docText = textarea.value;

        const saveText = document.querySelector("#save-in-progress-text");
        saveText.classList.remove("hidden");
        await fetch("http://127.0.0.1:3000/save", {
            method: "POST",
            body: docText
        });
        saveText.classList.add("hidden");
    }


// form js-sel,timeout,save vége
