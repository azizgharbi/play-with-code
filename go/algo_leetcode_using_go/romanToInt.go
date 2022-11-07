package main

import (
	"fmt"
)

func romanToInt(s string) int {
	var count int = 0
	var dic = map[string]int{
		"I":  1,
		"V":  5,
		"X":  10,
		"L":  50,
		"C":  100,
		"D":  500,
		"M":  1000,
		"IV": 4,
		"IX": 9,
		"XL": 40,
		"XC": 90,
		"CD": 400,
		"CM": 900,
	}

	if len(s) == 1 {
		return dic[s]
	}

	var i int = 0

	for i <= len(s)-1 {
		if i == len(s)-1 {
			return count + dic[string(s[i])]
		}
		var exp string = string(s[i]) + string(s[i+1])
		if dic[exp] != 0 {
			count += dic[exp]
			i += 2
		} else {
			count += dic[string(s[i])]
			i++
		}
	}
	return count
}

func main() {
	fmt.Println(romanToInt("MI"))

}
