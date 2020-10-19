// 1) Given an array K with N integers from 1 to N+1 such 
// that the array has exactly one integer missing, write a Java 
// function that returns the missing integer. 
// e.g. given K = [3,5,4,1], the function should return 2 

// SOLUTION 1

function missingInt(array){
  array.sort()
  for (let i=0; i<=array.length; i++) {
    if(array[i] + 1 !== array[i+1]){
      return array[i] + 1
    }
  }
}

// SOLUTION 2
function missingInt(array){
  const total = (array.length + 1) * (array.length + 2)/2
  const arraySum = array.reduce((a,b) => a+b)
  return total - arraySum
}

// test
// console.log(missingInt([3,5,4,1]))
// console.log(missingInt([3,2,5,1,6,7,9,4]))


// 2. 

// 2) Given a string S of length N, write a Java function 
// that transforms the string by reversing characters in  groups 
// of four, and returns the transformed string. 
// e.g. when S = 'Lorem at' the output should be 'eroLta m' 
//  when S = ' Tempor ip' the output should be 'meT roppi'  



function reverseInGroups(str) {
  let finalStr = ''
  return str.split('').reverse().slice(4).join('')
}

function reverseInGroups(str) {
    let newArray = []
    str.split('')
    for (let elem of str) {
      const last = newArray[newArray.length - 1]
      if (!last || last.length === 4) {
        newArray.push([elem])
      } else {
        last.push(elem)
      }
    }
    for (let elem of newArray) {
      return elem.reverse().join('')
    }
  }


// console.log(reverseStr("abcdefg", 2))
// console.log(reverseInGroups('Lorem at'))