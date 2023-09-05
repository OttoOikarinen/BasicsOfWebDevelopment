function addHelloWorld() {
    const addHelloWorldButton = document.getElementById("my-button");

    addHelloWorldButton.addEventListener("click", function() {
        console.log("Hello world");
    })
}

addHelloWorld();