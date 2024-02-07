package main

import (
	"fmt"
	"time"
)

type message interface {
	getMessage() string
}

type birthdayMessage struct {
	BirthdayTime  time.Time
	RecipientName string
}

func (bm birthdayMessage) getMessage() string {
	return fmt.Sprintf("Hi %s, it is your birthday on %s", bm.RecipientName, bm.BirthdayTime)
}

type sendingReport struct {
	ReportName    string
	NumberOfSends int
}

func (sr sendingReport) getMessage() string {
	return fmt.Sprintf(`Your "%s" report is ready. You've sent it %v time(s).`, sr.ReportName, sr.NumberOfSends)
}

func test(m message) {
	fmt.Println(m.getMessage())
}

func main() {
	test(birthdayMessage{BirthdayTime: time.Date(2020, 1, 1, 0, 0, 0, 0, time.Local), RecipientName: "Rey"})
	test(sendingReport{ReportName: "X", NumberOfSends: 5})
}
