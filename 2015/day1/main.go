package main

import (
	"fmt"
	"os"
)

func main() {

	var floor int
	var basement int

	// Open input.txt
	file, err := os.ReadFile("./input.txt")
	if err != nil {
		fmt.Print(err)
		return
	}

	// Loop through the characters in input.txt and do something
	for i := 0; i < len(file); i++ {

		if string(file[i]) == "(" {
			floor++
		} else if string(file[i]) == ")" {
			floor--
			if basement == 0 && floor < 0 {
				basement = i + 1
			}
		}

	}

	fmt.Println(floor)
	fmt.Println(basement)
}
