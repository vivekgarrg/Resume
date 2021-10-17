
function startCounter()
{
    var number = parseInt(document.getElementById("number").value);

    var currentNo = document.querySelector(" .current");
    var nextNo = document.querySelector(" .next");
    var count = 0;


   interval = setInterval(function(){
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000)
}



function increaseCount(currentNo, nextNo) {

    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);

}