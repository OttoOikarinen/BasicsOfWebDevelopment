function addHelloWorld() {
    const addHelloWorldButton = document.getElementById("my-button");

    addHelloWorldButton.addEventListener("click", () => {
        console.log("Hello world");
    })
}