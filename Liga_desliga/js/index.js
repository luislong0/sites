$body = document.querySelector("body");
$slider = document.querySelector(".slider");

active = false;

$slider.addEventListener("click", (e) => {
    if (active){
        $body.classList.remove("active");
        active = false
    } else {
        $body.classList.add("active");
        active = true;
    }

    // if (active){
    //     $body.classList.toggle("active");
    //     active = false
    // } else {
    //     $body.classList.toggle("active");
    //     active = true;
    // }
})
    