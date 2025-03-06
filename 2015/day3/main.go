package main

import (
	"fmt"
	"os"
)

func main() {
	rx, ry := 0, 0
	sx, sy := 0, 0
	roboSanta := make(map[[2]int]bool)
	realSanta := make(map[[2]int]bool)
	var turn int

	// Open input.txt
	input, err := os.ReadFile("./input.txt")
	if err != nil {
		fmt.Print(err)
		return
	}

	// First houses is visited by default
	realSanta[[2]int{sx, sy}] = true

	// Visit the rest of the neighborhood
	for i := 0; i < len(input); i++ {
		switch string(input[i]) {
		case "^":
			if turn%2 == 0 || turn == 0 {
				ry++
			} else {
				sy++
			}
		case "v":
			if turn%2 == 0 || turn == 0 {
				ry--
			} else {
				sy--
			}
		case ">":
			if turn%2 == 0 || turn == 0 {
				rx++
			} else {
				sx++
			}
		case "<":
			if turn%2 == 0 || turn == 0 {
				rx--
			} else {
				sx--
			}
		default:
			continue
		}

		fmt.Printf("Turn %v \n", turn)

		if !roboSanta[[2]int{rx, ry}] && !realSanta[[2]int{rx, ry}] {
			fmt.Println("RoboSanta")
			roboSanta[[2]int{rx, ry}] = true
		}
		if !realSanta[[2]int{sx, sy}] && !roboSanta[[2]int{sx, sy}] {
			fmt.Println("RealSanta")
			realSanta[[2]int{sx, sy}] = true
		}

		turn++

	}

	fmt.Println(len(roboSanta) + len(realSanta))
}
