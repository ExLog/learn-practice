package main

import "fmt"

// import "fmt"

type expense interface {
	cost() float64
}

type email struct {
	isSubscribed bool
	body         string
	toAdress     string
}

type sms struct {
	isSubscribed  bool
	body          string
	toPhoneNumber string
}

type invalid struct{}

func (i invalid) cost() float64 {
	return 0.0
}

// func getExpenseReport(e expense) (string, float64) {
// 	// check if expense is an email
// 	email, ok := e.(email)
// 	if ok {
// 		return email.toAdress, email.cost()
// 	}
//
// 	sms, ok := e.(sms)
// 	if ok {
// 		return sms.toPhoneNumber, sms.cost()
// 	}
//
// 	return "", 0.0
// }

func getExpenseReport(e expense) (string, float64) {
	// check if expense is an email
	switch v := e.(type) {
	case email:
		return v.toAdress, v.cost()
	case sms:
		return v.toPhoneNumber, v.cost()
	default:
		return "", 0.0
	}

}

func (e email) cost() float64 {
	if !e.isSubscribed {
		return float64(len(e.body)) * 0.05
	}

	return float64(len(e.body)) * 0.01
}

func (s sms) cost() float64 {
	if !s.isSubscribed {
		return float64(len(s.body)) * 0.1
	}

	return float64(len(s.body)) * 0.03

}

func main() {
	em := email{isSubscribed: true, toAdress: "suk@uwu.moe", body: "hello world"}
	fmt.Println(getExpenseReport(em))

	s := sms{isSubscribed: false, body: "hello from sms", toPhoneNumber: "+1232323"}
	fmt.Println(getExpenseReport(s))

	fmt.Println(getExpenseReport(invalid{}))

}
