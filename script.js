function firstNonRepeatedChar(str) {
 // Write your code here
	if (str.length === 0) {
        return null;
    }
    
    // Step 1: Create a map to store character counts
    const charCount = {};
    
    // Step 2: Iterate through the string to populate charCount
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    // Step 3: Find the first character with count 1 in the original string order
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // Step 4: If no non-repeated character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
