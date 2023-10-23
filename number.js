
// function find_max(arr)
// {

// let num=-1;

// for(let i=0;i<arr.length;i++)
// {
// if(arr[i]>num)
// {
// num=arr[i]
// }

// }

// return num;

// }



// let arr=[2,5,7,89,3];

// console.log(find_max(arr));

function find_median(arr)
{
let sum=0;
for(let i=0;i<arr.length;i++)
{
sum+=arr[i];

}
return sum/arr.length;

}


let arr=[2,5,7,89,3];
console.log(find_median(arr));