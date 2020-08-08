// Первая задача

/* var n = 0;
var sum = 0;
function sumTo(n) {
    for(var i = 0; i<=n; i++){
        sum = sum + i; 
    }
        console.log(sum);
}*/ 

//Вторая задача 

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }(), 1000);
}
