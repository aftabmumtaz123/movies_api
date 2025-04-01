const express = require('express')
const axios = require('axios')

const port = 3000;
const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('', async (req,res)=>{
        res.render("index",{data: {Poster: "Please search first",imdbRating: "Search first",Year: "Search first",Title: "Search first",Plot: "Search first"}})
    })
app.post("/send", async (req,res)=>{

    try {
        const title = req.body.title
        const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=7f0d7d34`) 
        console.log(response.data)
        const data = response.data;
        res.render("index",{data: data})

    } catch (error) {
        res.render("index.ejs", {
            data: null,
            error: "There's some issue while fetching the data(Please check your internet connection and try again)"
        });
        console.log("Internet connection lost")
    }
})

app.listen(port,()=>{
    console.log(`App is running on port localhost:${port}`)
})