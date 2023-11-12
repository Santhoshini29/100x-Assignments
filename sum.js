function sumAll(startIndex,endIndex){

var sum = 0;
for (var i= startIndex;i<=endIndex;i++){
    sum=sum+i;
}
return sum;
}
var sum = sumAll(1,4);
console.log(sum);