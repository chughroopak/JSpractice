//PART ONE
// let re;
//NORMAL
// re = /hello/;

//FLAGS--
// re = /hello/i;//i = CASE INSESITIVE
// re = /hello/g;//g = GLOBAL SEARCH/ALL INSTANCES NOT JUST ONE

// console.log(re);
// console.log(re.source);

//exec() - RETURNS RESULT IN AN ARRAY OR NULL
// const result = re.exec('hello World');

// console.log(result);
// console.log(result.index);
// console.log(result[0]);
// console.log(result.input);


//test() - RETURNS TRUE OR FALSE
// const result = re.test('Hello');
// console.log(result);


//match() - RETURNS RESULT ARRAY OR NULL// similiar to exec() but works vice versa
// const string = 'Hello There';
// const result = string.match(re);
// console.log(result);


//search()- RETURNS THE INDEX OF THE FIRST MATCH IF NOT FOUND RETURNS -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

//replace() - RETURNS NEW STRING WITH SOME OR ALL MATCHES OF A PATTERN
// const str = 'Hello There';
// const newStr = str.replace(re,'Hi');
// console.log(newStr);

//====================================================================

//PART 2 -METACHARACTER SYMBOLS

let re;
// LITERAL CHARACTERS
re=/hello/;
re = /hello/i;

//METACHARACTER SYMBOLS
re = /^h/i; //MUST START WITH
re = /d$/i;
re = /world$/i; //MUST END WITH
re = /^hello$/i; //MUST START AND END WITH
re = /h.llo/i; //. = any one character
re = /h*llo/i; //* = any character 0 or more times
re = /gre?a?y\?/i;//? means optional --  \ is used to escape special metacharacters

//PART 3 - CHARACTER SETS AND QUANTIFIERS

//Brackets [] - Character sets
re =/gr[ae]y/i; //must be an a or e
re = /[GF]ray/;
re = /[^GF]ray/;//MATCH ANYTHING EXCEPT A G OR F
re = /^[GF]ray/; //MUST START WITH A G OR F
re = /[A-Z]ray/; //MATCH ANY UPPER CASE LETTER
re = /[a-z]ray/; //MATCH ANY LOWER CASE LETTER
re = /[A-Za-z]ray/; //MATH ANY LETTER
re = /[0-9]ray/; //MATCH ANY DIGIT
re = /[0-9][0-9]ray/; //twice any numbers

//Braces {} - QUANTIFIERS
re = /Hel{2}o/i; //Must occur exactly {m} times
re = /Hel{2,4}o/i; //MUST OCCUR IN BETWEERN m and n times {m,n}
re = /Hel{2,}o/i; //MUST OCCUR Atleast m times

// Parenthesis () -grouing
re = /([0-9]x){3}$/;



//PART-4 SHORTHAND CHARACTER CLASSES
re = /\w/;  //word character - alphanumeric character or _
re = /\w+/; //+ = one or more
re = /\W/; //NON WORD CHARACTER
re = /\d/; //MATCH ANY 
re = /\d+/; //MATCH ONE OR MORE DIGIT
re = /\D/; //NON DIGIT CHARACTER
re = /\s/; // MATCH WHITE SPACE CHARACTER
re = /\S/; //MATCH NON WHITE SPACE CHARACTER
re = /Hell\b/i; //WORD BOUNDRY gets the exact word not a word inside another word

// ASSERTIONS
re = /x(?=y)/; //MATCH x ONLY IF FOLLOWED BY A y
re = /x(?!y)/; //MATCH x ONLY IF FOLLOWED BY A y

//string to match
const str='ahdjhsaxay';
const result=re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT matches ${re.source}`);
  }
}

reTest(re, str);

