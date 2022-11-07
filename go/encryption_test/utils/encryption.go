package utils

import (
	"errors"
	"regexp"
	"strconv"
	"strings"
)

func encryptionLogic(password string, keyTotal int) string {
	var j int = 0
	var n_password string
	for _, p := range password {
		n_p := string(rune(int(p) + keyTotal))
		is_lettre, _ := regexp.Compile(`[a-z]`)
		if is_lettre != nil && j%2 == 0 {
			n_password += strings.ToUpper(n_p)
		} else {
			n_password += n_p
		}
		j++
	}
	return n_password
}

func decryptionLogic(password string, keyTotal int) string {
	var j int = 0
	var n_password string
	for _, p := range password {
		n_p := string(rune(int(p) - keyTotal))
		is_lettre, _ := regexp.Compile(`[A-Z]`)

		if is_lettre != nil && j%2 == 0 {
			n_password += strings.ToLower(n_p)
		} else {
			n_password += n_p
		}
		j++
	}
	return n_password
}

func keyTotal(key int) int {
	var total int = 0
	s_key := strconv.Itoa(key)
	for i := 0; i < len(s_key); i++ {
		x, _ := strconv.Atoi(string(s_key[i]))
		total += x
	}
	return total
}

func Encryption(password string, key int) (string, error) {
	if key > 32 || key < 10 {
		return "", errors.New("key should be between 10 and 32")
	}
	total := keyTotal(key)
	n_password := encryptionLogic(password, total)

	return n_password, nil
}

func Decryption(password string, key int) (string, error) {
	if key > 32 || key < 10 {
		return "", errors.New("key should be between 10 and 32")
	}
	total := keyTotal(key)
	n_password := decryptionLogic(password, total)
	return n_password, nil
}
