package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	gonanoid "github.com/matoous/go-nanoid/v2"
)

type Response struct {
	Url string `json:"url"`
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/images/", http.StripPrefix("/images", http.FileServer(http.Dir("./out"))))
	mux.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./dist"))))

	mux.HandleFunc("POST /upload", func(w http.ResponseWriter, r *http.Request) {
		defer r.Body.Close()
		file, header, err := r.FormFile("image")
		defer file.Close()

		if err != nil {
			fmt.Fprintf(w, "Failed to get image")
			return
		}

		buf := bytes.NewBuffer(nil)
		if _, err := io.Copy(buf, file); err != nil {
			fmt.Fprintf(w, "Failed to allocate buffer for the image")
			return
		}

		id, err := gonanoid.New()
		fileName := header.Filename
		ext := fileName[len(fileName)-4:]
		outDir := "./out/"
		outPath := outDir + id + ext
		os.WriteFile(outPath, buf.Bytes(), 0666)

		res, _ := json.Marshal(Response{
			Url: "/images/" + id + ext,
		})

		w.Header().Set("Content-Type", "application/json")
		w.Write(res)

	})

	http.ListenAndServe("localhost:3000", mux)
}
