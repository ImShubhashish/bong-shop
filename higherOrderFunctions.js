const company = [ 
    { name: 'Pratik', salary: 56000, married: true},
    { name: 'Manish', salary: 16000, married: false},
    { name: 'Sourav', salary: 36000, married: true},
    { name: 'Bihari', salary: 50000, married: false},
    { name: 'Shubh', salary: 26000, married: true},
    { name: 'Ravi', salary: 20000, married: true},
    { name: 'Raj', salary: 45000, married: false}
];

const ages =[12,23,11,33,32,18,17,45];


// forEach() function

// var result=ages.forEach((age)=> {
//     console.log(age);
// })

// var result= company.forEach((company) => {
//     console.log(company);
// });
//  result();

//-------------------------------------------------------------------------

// map() function

// let result = company.map((company)=> {
//     console.log("The company details are here:- " + "Name: "+(company.name)+ " | Salary: "
//     + (company.salary)+ " | Married: " +((company.married)? "Yes" : "No") );
// });
// result ();

//--------------------------------------------------------------------

// filter() function 

// var result = company.filter((company)=> {
//         if((company.salary)>30000)
//         console.log(company);
// })
// result();

// filter() along with map() function 

// var finalResult = company.filter((company)=> {
//     if((company.salary)>30000);
//     {console.log(company);
// })
// .map((company)=>{
//     console.log(
//         "Mentioned are the employees having Salary more than Rs30000 : "
//         + "Name: "+(company.name)+" | Salary: "+(company.salary)
//     );
// });

// finalResult();

//-------------------------------------------------

// reduce() function :---

// find the sum of the total ages from age array:

// const sum = ages.reduce((total,currentValue)=> {
//     return total + currentValue ;
// },0);

// console.log(sum);

//-------------------------------------------------------

// sort("provide compare function") function : --

// var sorted=ages.sort((a,b)=> a-b);
// console.log(sorted);
