package main

import "fmt"

type employee interface {
	getName() string
	getSalary() int
}

type contractor struct {
	Name         string
	HourlyPay    int
	HoursPerYear int
}

func (c contractor) getName() string {
	return c.Name
}

func (c contractor) getSalary() int {
	return c.HourlyPay * c.HoursPerYear
}

type fullTime struct {
	Name   string
	Salary int
}

func (ft fullTime) getName() string {
	return ft.Name
}

func (ft fullTime) getSalary() int {
	return ft.Salary
}

func test(e employee) {
	fmt.Printf("%v's salary: %v\n", e.getName(), e.getSalary())
}

func main() {
	test(contractor{"Jack", 50, 200})
	test(fullTime{"Bob", 100000})
}
