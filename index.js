let string = "";
let nums = document.querySelectorAll(".num");
Array.from(nums).forEach((num) => {
    num.addEventListener("click", (e)=>{
        if (e.target.innerHTML == "=")
        {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "C")
        {
            string = " ";
            document.querySelector("input").value = string;
        }
        else
        {
            string  += e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
});