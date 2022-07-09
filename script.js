var a_parent = document.querySelectorAll(".a_parent");
var dd_menu_a = document.querySelectorAll(".dd_menu_a");


a_parent.forEach(function(a_parent_item){
    a_parent_item.addEventListener("click", function(){
        a_parent.forEach(function(a_parent_item){
            a_parent_item.classList.remove("active");
        })
        a_parent_item.classList.add("active");
    })
})

dd_menu_a.forEach(function(dd_menu_a_item){
    dd_menu_a_item.addEventListener("click", function(){
        dd_menu_a.forEach(function(dd_menu_a_item){
            dd_menu_a_item.classList.remove("active");
        })
        dd_menu_a_item.classList.add("active");
    })
})