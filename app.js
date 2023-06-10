var budget_btn = document.getElementById("budget-btn");
var budget = document.getElementById("budget");
var t_budget = document.getElementById("total-budget");
var product_btn = document.getElementById("product-btn");
var title = document.getElementById("title");
var cost = document.getElementById("cost");
var expense_list = document.getElementById("expense-list");

budget_btn.onclick = function (e) {
    e.preventDefault();

    if (budget.value !== "") {
        localStorage.setItem("budget", budget.value);
        location.href = location.href;
    } else {
        alert("Budget is empty");
    }
};

product_btn.onclick = function (e) {
    e.preventDefault();
    if (title.value !== "" && cost.value !== "") {
        var p_title = title.value;
        var p_cost = cost.value;
        var data = { p_cost: p_cost, p_title: p_title };
        var string = JSON.stringify(data);
        localStorage.setItem("budget_" + title.value, string);
        location.href = location.href;
    }
};

function all_data() {
    var i;
    for (i = 0; i < localStorage.length; i++) {
        var all_keys = localStorage.key(i);
        if (all_keys.match("budget_")) {
            var json_data = localStorage.getItem(all_keys);
            var json_parse = JSON.parse(json_data);
            expense_list.innerHTML +=
                '<div class="row mt-3 b-border"><div class="col-md-6 mt-3 d-flex justify-content-between"><h5>' +
                json_parse.p_title +
                '</h5><h5>' +
                json_parse.p_cost +
                '</h5></div><div class="col-md-6 mt-3 d-flex justify-content-end "><i class="fa fa-edit" ></i> &nbsp; &nbsp;&nbsp; <i class="fa fa-trash" ></i></div></div>';
        }
    }
    t_budget.innerHTML = localStorage.getItem("budget");
}
all_data();
