package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	niceWords := 0

	// Open input.txt
	input, err := os.Open("./input.txt")
	if err != nil {
		fmt.Print(err)
		return
	}

	fileScanner := bufio.NewScanner(input)
	fileScanner.Split(bufio.ScanLines)

	for fileScanner.Scan() {
		line := fileScanner.Text()

		if isANiceWord(line) {
			niceWords++
		}
		// hasVowels := checkVowels(line)
		// hasDoubles := checkDoubles(line)
		// hasBadWords := checkBadWords(line)
		// if hasVowels && hasDoubles && !hasBadWords {
		// 	niceWords++
		// }
	}

	fmt.Println(niceWords)
}

func isANiceWord(word string) bool {

	// Checks for letters that repeat with a different letter between them.
	for i := 0; i < len(word)-2; i++ {
		if word[i] == word[i+2] {
			return true
		}
	}

	// Check for multiples of non-overlapping pairs
	pairs := make(map[string]bool)
	for i := 0; i < len(word)-1; i++ {
		pair := string(word[i]) + string(word[i+1])
		if _, exists := pairs[pair]; exists {
			return true
		}
		pairs[pair] = true
	}

	return false
}

// func checkVowels(word string) bool {
// 	var count int
// 	chars := []string{"a", "e", "i", "o", "u"}
// 	for _, letter := range chars {
// 		count += strings.Count(word, string(letter))
// 	}
// 	return count >= 3
// }

// func checkDoubles(word string) bool {
// 	var count int
// 	var prev rune
// 	for _, letter := range word {
// 		if string(prev) == string(letter) {
// 			count++
// 		}
// 		prev = letter

// 	}
// 	return count > 0
// }

// func checkBadWords(word string) bool {
// 	badwords := []string{"ab", "cd", "pq", "xy"}

// 	for _, badword := range badwords {
// 		if strings.Contains(word, badword) {
// 			return true
// 		}
// 	}
// 	return false
// }
