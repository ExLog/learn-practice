package main

import (
	"fmt"
)

type rect struct {
	width, height float64
}

type authenticationInfo struct {
	Username string
	Password string
}

func (i authenticationInfo) getBasicAuth() string {
	return fmt.Sprintf("Authorization: Basic %v:%v", i.Username, i.Password)
}

func test(authInfo authenticationInfo) {
	fmt.Println(authInfo.getBasicAuth())
}

func main() {
	test(authenticationInfo{Username: "veirt", Password: "uwu123"})
}
