const array= [1,2,3,4,5,6,7];
 const MyArray =array.map(a=>a%2===0)
 console.log(MyArray);

 const sum= array.reduce((num1, num2)=>{

    return num1 + num2;
    
   
 });
 console.log(sum);

 const order = [

    {

     userId:1,
     amount:13

    },
    {
      userId:2,
     amount:11,

    },

    {
        userId:1,
       amount:11,
  
    },

    {
        userId:2,
       amount:17,
  
    },
 
 ];
 const a=order.filter(order=>order.userId===2)
 .map(order=>order.amount)
 .reduce((a,b)=>a+b)

 console.log(a)