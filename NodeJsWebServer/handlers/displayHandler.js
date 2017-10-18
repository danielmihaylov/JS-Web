const fs = require('fs')
const qs = require('querystring')
const db = require('./../config/dataBase')

let displayMovie = (movieUrl, index) => {
    let hrefDetails = `/movies/details/${index}`;
    return ` <a href = ${hrefDetails}><div class="movie">
    <img class="moviePoster" src="${movieUrl}"/>
    </div></a>
    `
}
module.exports = (req, res) => {
    if (req.pathname === '/viewAllMovies' && req.method == 'GET') {
        fs.readFile('./views/viewAll.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.writeHeader(200, {
                'content-type': 'text/html'
            })
            let allMovie = '';
            
            for (let index in db.movies.getAll()) {
                let key = db.movies.getAll()[index]
                let res = qs.parse(key['moviePoster'])
                for (let movieUrl in res) {
                    allMovie += displayMovie(movieUrl, index)
                }
            }
            data = data.replace('<div id="replaceMe">{{replaceMe}}</div>', allMovie)
            res.write(data)
            res.end()
        })
    } else {
        return true
    }
}