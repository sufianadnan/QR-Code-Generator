let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");


qrText.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        qrCodeGenerator();
    }
});

function qrCodeGenerator() {
    let data = qrText.value;
    if (data === '') {
        // alert("You must write something");
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    } else {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
        imgBox.classList.add("show-img");
        qrText.classList.add("correct");
        setTimeout(()=>{
            qrText.classList.remove("correct");
        },3000);

    }
}