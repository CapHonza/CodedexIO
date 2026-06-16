function isPalindrome(word) {
    let cleanWord = word.toLowerCase()
    let reversedWord = cleanWord.split("").reverse().join("")

    if (cleanWord === reversedWord) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("racecar"));