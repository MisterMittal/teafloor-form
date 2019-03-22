function toStage2(){
    document.getElementById("cust-info-form").classList.add("d-none");
    document.getElementById("shipping-info-form").classList.remove("d-none");
    document.getElementById("second-stage").classList.add("reached-stages");
}
function toStage3(){
    document.getElementById("shipping-info-form").classList.add("d-none");
    document.getElementById("payment-selection-form").classList.remove("d-none");
    document.getElementById("third-stage").classList.add("reached-stages");
}

function stage1Tab(){ // Alternative style A (checking first by loop)
    if(document.getElementById("second-stage").classList.contains("reached-stages")){ // Alternative style 1 (with KWs)
        document.getElementById("second-stage").classList.remove("reached-stages"); // Alternative style 1 (with KWs)
    }
    if(document.getElementById("third-stage").classList == "text-center form-stages reached-stages"){ // Alternative style 2 (with Operators)
        document.getElementById("third-stage").classList = ("text-center form-stages"); // Alternative style 2 (with Operators)
    }

    document.getElementById("cust-info-form").classList.remove("d-none");
    document.getElementById("shipping-info-form").classList.add("d-none");
    document.getElementById("payment-selection-form").classList.add("d-none");
}
function stage2Tab(){ // Alternative style B (Checking not mandatory as repeat/not-found won't occur)
    document.getElementById("second-stage").classList.add("reached-stages");
    document.getElementById("third-stage").classList.remove("reached-stages");

    document.getElementById("cust-info-form").classList.add("d-none");
    document.getElementById("shipping-info-form").classList.remove("d-none");
    document.getElementById("payment-selection-form").classList.add("d-none");
}
function stage3Tab(){ // Easiest styles combination
    document.getElementById("third-stage").classList.add("reached-stages");
    document.getElementById("second-stage").classList.add("reached-stages");

    document.getElementById("cust-info-form").classList.add("d-none");
    document.getElementById("shipping-info-form").classList.add("d-none");
    document.getElementById("payment-selection-form").classList.remove("d-none");
}