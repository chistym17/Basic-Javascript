function cubeNumber(number){

if(typeof(number)!='number'){
return 'please enter a number'

}
else{

return number**3


}

}


function matchFinder(string1,string2)
{
if(typeof(string1)!='string' || typeof(string2)!='string')
return 'invalid input.inputs have to be string'

else
{
if(string1.includes(string2))return true

return false

}

}


function sortMaker(arr)
{
num1=arr[0]
num2=arr[1]

if(num1<0 || num2<0) return 'invalid negative input'

if(num1==num2)return 'equal'

if(num1>num2)
return arr


else
{
arr[0]=num2
arr[1]=num1

return arr

}


}



function findAddress(object)
{
if(object.street==null)
console.log('__')
else
console.log(object.street)

if(object.house==null)
console.log('__')
else
console.log(object.house)

if(object.society==null)
console.log('__')
else
console.log(object.society)


}



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

