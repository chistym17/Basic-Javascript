function canPay(changeArray,totalDue)
{
if(changeArray.length==0)
return 'invalid.No money'

let sum=0
for(let i=0;i<changeArray.length;i++)
{
sum+=changeArray[i]

}

if(sum<totalDue)return false

return true

}

console.log(canPay([1,2],10))