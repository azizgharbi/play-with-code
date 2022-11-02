package main

import (
	"fmt"

	"example.com/packages/utils"
)

func main() {
	password, err := utils.Encryption("zabourwmiboun200", 23)
	if err != nil {
		fmt.Println("[ERROR:]", err)
	}
	fmt.Println("[NEW_PASSWORD]", password)

	old_password, err := utils.Decryption(password, 23)
	if err != nil {
		fmt.Println("[ERROR:]", err)
	}

	fmt.Println("[NEW_PASSWORD]", password)
	fmt.Println("[NEW_PASSWORD]", old_password)
}
