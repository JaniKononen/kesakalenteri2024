function tarkastaluukku() {
    if (paiva >= 0 && paiva <7 && kuukausi >= 5){
        document.getElementById("btn1").style.boxShadow = "0 8px 20px yellow";
    }
    if (paiva >= 7 && paiva <14 && kuukausi >= 5){
        document.getElementById("btn2").style.boxShadow = "0 8px 40px yellow";
    }
}
window.onload = function(){
    tarkastaluukku();
};