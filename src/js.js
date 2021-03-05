// // const companies = [
// //     {name: "Company One", category: "Finance", start: 1981, end: 2003},
// //     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
// //     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
// //     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
// //     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
// //     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
// //     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
// //     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
// //     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
// // ];


// // const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // LOOP START HERE

// // For LOOP
// // ES5
// // function Company (companies) {
// //     for (let i = 0; i < companies.length; i++) {
// //         console.log(companies[i])
// //     }
// // }
// // console.log(Company(companies))

// // FOR LOOP
// // ES6
// // function Company (companies) {
// //     for (let company of companies) {
// //         console.log(company)
// //     }
// // }
// // console.log(Company(companies))

// // FOREACH LOOP
// // ES5

// // function Company (companies) {
// //     companies.forEach(function(company) {
// //         console.log(company)
// //     })
// // }

// // console.log(Company(companies))

// // FOREACH LOOP
// // ES6

// // function Company (companies) {
// //     companies.forEach(company => console.log(company))
// // }

// // console.log(Company(companies))


// // MAP
// // ES5

// // function Company (companies) {
// //     companies.map(function(company) {
// //         console.log(company)
// //     })
// // }

// // console.log(Company(companies))

// // MAP
// // ES6

// // function Company (companies) {
// //     companies.map(company => console.log(company))
// // }
// // console.log(Company(companies))


// // FILTER
// // ES5

// // function Company (companies) {
// //     companies.filter(function(company) {
// //         console.log(company)
// //     })
// // }

// // console.log(Company(companies))

// // FILTER
// // ES6

// // function Company (companies) {
// //     companies.forEach((company) => console.log(company))
// // }
// // console.log(Company(companies))

// // LOOPS END HERE



// // SORT 
// // function Sort(a, b) {
// //     return a - b
// // }


// // const sortArr = companies.map(a.sort() => console.log(a.start))


// // REDUCE


// //Filter with for loop

// // for (let canDrink of ages) 
// // {
// //     if (canDrink >= 21) 
// //     {
// //         console.log(canDrink)
// //     }
// // }

// // const canDrink = ages.filter(canDrink => canDrink >= 21)
// // console.log(canDrink)
// //Filter with forEach loop

// // OR

// // const canDrink = ages.filter(canDrink => {
// //     if (canDrink >= 21) {
// //         console.log(canDrink)
// //     }
// // })
// // console.log(canDrink)

// // const retails = companies.filter(b => {
// //     if (b.category === "Retail") {
// //         console.log(b.category)
// //     }
// // })
// // console.log(retails)


// // const retails = companies.filter(b => b.category === "Retail")
// // console.log(retails)



// // function AddTwo (nums, target) {
// //     let result = []
// //     for (let i = 0; i < nums.length; i++) {
// //         for (let j = i + 1; i < nums.length; j++) {
// //             if (nums[i] + nums[j] == target) {
// //                 console.log(i)
// //             }
// //         }
// //     }
// //     return result
// // }


// // // let nums = [2,7,11,15]
// // // let target = 9

// // console.log(AddTwo([2,7,11,15], 9))


// var maxOperations = function(nums, k) {
//     let result = []
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i--])
//         // if (nums[i] + nums[i++] === k) {
//         //     result.push(k)
//         // } else if (nums[i--] + nums[i] === k) {
//         //     result.push(k)
//         // }
//     }
//     console.log(result)
// };

// console.log(maxOperations([1,2,3,4], 5))
