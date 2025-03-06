package main

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"strconv"
)

func main() {
	var input string = "yzbqklnj"
	var i int

	// There's probably a way better way to do this
	// because this infinite loop is scary.
	for {
		hashInput := input + strconv.Itoa(i)
		hash := md5.Sum([]byte(hashInput))
		adventHash := hex.EncodeToString(hash[:])
		zeros := fmt.Sprintf("%.*s", 5, adventHash)
		if zeros == "000000" {
			fmt.Println(adventHash)
			fmt.Println(hashInput)
			break
		}
		i++
	}
}
