/*
You are given a positive integer num
consisting only of digits 6  and 9.
Return the maximum number you can get by changing at most one digit
(6 becomes 9, and 9 becomes 6).
*/

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func maximum69Number(num int) int {
	var numString []string = strings.Split(strconv.Itoa(num), "")
	var n, max int
	for i := 0; i <= len(numString)-1; i++ {

		if numString[i] == "9" {
			numString[i] = "6"
		} else {
			numString[i] = "9"
		}

		n, _ = strconv.Atoi(strings.Join(numString, ""))

		if n > max {
			max = n
		}

		numString = strings.Split(strconv.Itoa(num), "")
	}
	return max
}

func main() {
	fmt.Println(maximum69Number(9669))
}
