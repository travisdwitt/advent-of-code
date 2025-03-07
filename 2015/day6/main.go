package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {

	grid := make([][]bool, 1000)
	for i := range grid {
		grid[i] = make([]bool, 1000)
	}

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
		parts := strings.Fields(line)

		// TODO: parse instructions correctly to getRange and the below for loops work

		start := getRange(lightRange)
		xa, ya := start[0], start[1]
		xb, yb := start[2], start[3]

		for i := xa; i <= xb; i++ {
			for j := ya; j <= yb; j++ {
				switch action {
				case "toggle":
					grid[i][j] = !grid[i][j]
				case "turn on":
					grid[i][j] = true
				case "turn off":
					grid[i][j] = false
				}
			}
		}
	}

	count := 0
	for i := range grid {
		for j := range grid[i] {
			if grid[i][j] {
				count++
			}
		}
	}

	fmt.Println(count)

}

func getRange(input string) [4]int {
	parsedInput := strings.Split(input, " ")
	corners := parsedInput[1] + "," + parsedInput[3]
	values := strings.Split(corners, ",")
	var result [4]int
	for i, value := range values {
		result[i], _ = strconv.Atoi(value)
	}

	return result
}
