/*star variable*/

var budget_btn = document.getElementById("budget-btn");
var budget = document.getElementById("budget");
var t_budget = document.getElementById("total-budget")

/* storage budjet in local storage*/

budget_btn.onclick = function (e) {
    e.preventDefault();

    if (budget.value != "") {


        localStorage.setItem("budjet", budget.value)
    }
    else {
        alert("Budget is empty");
    }
}