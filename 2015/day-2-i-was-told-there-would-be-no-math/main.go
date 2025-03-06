package main

// TODO: Make this actually work

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	var totalSqFt int

	// Open input.txt
	input, err := os.Open("./input.txt")
	if err != nil {
		fmt.Print(err)
		return
	}

	// Convert input.txt into an array of int arrays
	fileScanner := bufio.NewScanner(input)
	fileScanner.Split(bufio.ScanLines)
	var parsedInput [][]int
	for fileScanner.Scan() {
		line := fileScanner.Text()
		parsedArray := strings.Split(line, "x")
		integerArray := make([]int, len(parsedArray))
		for i := 0; i < len(parsedArray); i++ {
			num, err := strconv.Atoi(string(parsedArray[i]))
			if err != nil {
				fmt.Println(err)
				return
			}
			integerArray[i] = num
		}
		parsedInput = append(parsedInput, integerArray)
	}

	// Close the input file
	input.Close()

	for _, dims := range parsedInput {
		totalSqFt += calculateSurfaceArea(dims[0], dims[1], dims[2])

	}

	fmt.Println(totalSqFt)
}

// Do all the math
func calculateSurfaceArea(l, w, h int) int {
	lw := 2 * l * w
	wh := 2 * w * h
	hl := 2 * h * l
	sides := []int{lw, wh, hl}
	minSide := sides[0]
	for _, side := range sides[1:] {
		if side < minSide {
			minSide = side
		}
	}
	return lw + wh + hl + minSide
}
