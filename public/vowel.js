/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/

function isVowel(letter) {

	if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" 
		|| letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
		return true;
	}
	return false;
}

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/


/* Below is the function I wrote before I read the directions

function countVowels(word) {
	var vowelcount = 0;  
	word = word.toLowerCase(); 

	for (i=0; i < word.length; i++) {
		if (word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" 
		|| word.charAt(i) === "o" || word.charAt(i) === "u") {
		vowelcount++;
		}
	}
	return vowelcount;

}*/

function countVowels(word) {
	var vowelcount = 0;  
	word = word.toLowerCase(); 

	for (i=0; i < word.length; i++) {
		if (isVowel(word[i])) {
		vowelcount++;
		}
	}
	return vowelcount;

}

