function workingJS() {
    const addHelloWorldButton = document.getElementById("my-button");
    const addTextButton = document.getElementById("add-data");

    addHelloWorldButton.addEventListener("click", function() {
        console.log("hello world");

        let title = document.getElementById("hello-world");
        title.innerText = "Moi maailma";
    })

    addTextButton.addEventListener("click", function() {
        console.log("Works!");
        
        const list = document.getElementById("LOTR-list");

        let newText = document.createElement("li");
        newText.innerText = document.getElementById("text-area").value;
        list.appendChild(newText);
    })
    
}

workingJS();