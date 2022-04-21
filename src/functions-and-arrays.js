//Iteration #1: Find the maximum

     //whithout sort()
        console.log("Iteration #1 ")

        const maxOfTwoNumbers=(num1,num2)=>{
            num1>num2?console.log(num1):console.log(num2)
        }
        maxOfTwoNumbers(500,1000)

        //With sort()
        const twoNumbers=[]
        const maxOfTwoNumbersWithSort=((num1,num2)=>{
          twoNumbers.push(num1,num2)
          console.log(twoNumbers.sort((a,b)=>b-a)[0])        
        })      
        maxOfTwoNumbersWithSort(500,1000)

        //Iteration #2: Find the longest word

        //whithout sort()
        console.log("Iteration #2")

        const words = ['mystery', 'brother', 'aviator',"co", 'crocodile', 'pearl', 'orchard', 'crackpot'];
        const findTheShortestWord=(myArray)=>{
            let value = myArray[0];
            for(let element of words){
                if(element.length > value.length){
                value =element;
                }
            }  
            console.log(value)
        }
        findTheShortestWord(words);

        //With sort()
        const findTheShortestWord2=(words)=>{
        console.log(words.sort((a, b)=> b.length -a.length)[0])
        }

        findTheShortestWord2(words);

        //Iteration #3: Calculate the sum        
        console.log("Iteration #3")

        const arrConst=[6 ,  12 ,  1 ,  18 ,  13 ,  16 ,  2 ,  1 ,  8 ,  10 ] ;
        let addItems=0
        const sumNumbers=(arr)=>{
            for (i of arr){    
                addItems=addItems+i
            }      
            console.log(addItems)
        }  
        sumNumbers(arrConst)

        //Bonus - Iteration #3.1: A generic sum() function
        //The goal: Learn how to refactor your code.
        console.log("Iteration #3.1")

        const mixedArr=[6 ,  12 ,  'miami' ,  1 ,  true ,  'barca' ,  '200' ,  'lisboa' ,  8 ,  10 ] ;
        let addValues=0
        const sum=(arr)=>(arr.map((acc)=>{ 
            typeof(acc)==="string"? addValues+= acc.length:null
            typeof(acc)==="number"?addValues+=acc:null
            if(typeof(acc)==="boolean"){
            acc===true?addValues+=1:addValues+=0
            }
        }))
        sum(mixedArr)
        console.log(addValues)

        //Iteration #4: Calculate the average
        //Level 1: Array of numbers
        console.log("Iteration  #4 Level 1")

        let prom
        const numbers = [2 ,  6 ,  9 ,  10 ,  7 ,  4 ,  1 ,  9];
        const averageNumbers =(numbers)=>numbers.reduce((a,b)=>{ 
            
            return (a + b )
        })
        console.log(averageNumbers(numbers)/numbers.length) 

        //Level 2: Array of strings
        console.log("// Iteration 4 Level 2")

        const words2 =  ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'] ;
        const averageWordLength =(numbers)=>numbers.reduce((a,b)=>{ 
        return a + b        
        })
        console.log(averageWordLength(words2).length/words2.length)

        //Bonus - Iteration #4.1: A generic avg() function
        console.log("Bonus - Iteration #4.1")

        let addValues2=0
        let coco
        const avg=(arr)=>(arr.map((acc)=>{ 
            typeof(acc)==="string"? addValues2+= acc.length:null
            typeof(acc)==="number"?addValues2+=acc:null
            if(typeof(acc)==="boolean"){
            acc===true?addValues2+=1:addValues2+=0
            }
            
        }))
        avg(mixedArr)
        console.log(coco=addValues2/mixedArr.length)

        //Iteration #5: Unique arrays
        console.log("Iteration #5")
        
        const  palabras  =  [ 'crab','poison','contagious','simple','bring','sharp','playground','poison','communion','simple','bring'] ;
        const uniquifyArray=(words)=>{ 
        let words3=[] 
        for (i of palabras){
            words3.indexOf(i) ===-1?words3.push(i):null
        }
        console.log(words3)
        }
        uniquifyArray(palabras)

        //Iteration #6: Find elements
        console.log("Iteration #6s")

        const  words4  =  ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'] ;        
        let com
        const doesWordExist = (words,searchWord)=>{
            for (i of words){
            if(i===searchWord){ 
                com =(i===searchWord); 
                break; }  
                com =(i===searchWord)  
            }          
            console.log(com)
        }
        doesWordExist(words4, "trouble")

        //Iteration #7: Count repetition
        console.log("Iteration #7: Count repetition")
        
        const words5=['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter' ]
        const howManyTimes=(items,searchWord)=>{
        let repeatItems=0
            for (i of items){
            searchWord.indexOf(i)===0?repeatItems++:null
            }
            console.log(repeatItems)
        }
        howManyTimes(words5,"matter")




// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
