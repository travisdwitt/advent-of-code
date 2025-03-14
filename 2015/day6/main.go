package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
)

func main() {

	input, err := os.Open("input.txt")
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer input.Close()

	grid := [1000][1000]int{}
	reTurnOn := regexp.MustCompile(`^turn on (\d+),(\d+) through (\d+),(\d+)$`)
	reTurnOff := regexp.MustCompile(`^turn off (\d+),(\d+) through (\d+),(\d+)$`)
	reToggle := regexp.MustCompile(`^toggle (\d+),(\d+) through (\d+),(\d+)$`)

	scanner := bufio.NewScanner(input)
	for scanner.Scan() {
		line := scanner.Text()

		if matches := reTurnOn.FindStringSubmatch(line); matches != nil {
			x1, _ := strconv.Atoi(matches[1])
			y1, _ := strconv.Atoi(matches[2])
			x2, _ := strconv.Atoi(matches[3])
			y2, _ := strconv.Atoi(matches[4])
			// Increase brightness by 1
			for x := x1; x <= x2; x++ {
				for y := y1; y <= y2; y++ {
					grid[x][y]++
				}
			}
		} else if matches := reTurnOff.FindStringSubmatch(line); matches != nil {
			x1, _ := strconv.Atoi(matches[1])
			y1, _ := strconv.Atoi(matches[2])
			x2, _ := strconv.Atoi(matches[3])
			y2, _ := strconv.Atoi(matches[4])
			// Decrease brightness by 1, don't allow negative numbers
			for x := x1; x <= x2; x++ {
				for y := y1; y <= y2; y++ {
					if grid[x][y] > 0 {
						grid[x][y]--
					}
				}
			}
		} else if matches := reToggle.FindStringSubmatch(line); matches != nil {
			x1, _ := strconv.Atoi(matches[1])
			y1, _ := strconv.Atoi(matches[2])
			x2, _ := strconv.Atoi(matches[3])
			y2, _ := strconv.Atoi(matches[4])
			// Increase brightness by 2
			for x := x1; x <= x2; x++ {
				for y := y1; y <= y2; y++ {
					grid[x][y] += 2
				}
			}
		}
	}

	totalBrightness := 0
	for i := 0; i < 1000; i++ {
		for j := 0; j < 1000; j++ {
			totalBrightness += grid[i][j]
		}
	}

	fmt.Println(totalBrightness)
}
