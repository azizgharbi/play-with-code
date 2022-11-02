package main

import "fmt"

func romanToInt(s string) int {
	var count int = 0
	var dic = map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	for i := 0; i < len(s); i++ {
		count += dic[s[i]]
	}
	return count
}

func main() {
	fmt.Println(romanToInt("MCMXCIV"))
}
