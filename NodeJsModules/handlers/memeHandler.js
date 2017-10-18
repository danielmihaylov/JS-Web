const fs = require('fs');
const db = require('./../config/dataBase');
const qs = require('querystring');
const url = require('url');
const formidable = require('formidable');
const shortid = require('shortid');
const util = require('util');

const viawAllPath = './views/viewAll.html';
const viewAddPath = './views/addMeme.html';
const viewDetails = './views/details.html';

let fieldCheck = memeObject => {
    let legitimObject = true;

    for(let prop in memeObject){
        if(memeObject[prop] === ''){
            legitimObject = false;
        }
    }
    return legitimObject;
}

let memeGenerator = (id,title,memeSrc,description,privacy) => {
    return {
        id:id,
        title:title,
        memeSrc:memeSrc,
        description:description,
        privacy:privacy,
        dateStamp: Date.now()
    }
}

let defaultResponse = (res, data) => {
    res.writeHead(200,{
        'content-type':'text/html'
    })
    res.write(data);
    res.end();
}

let viewAll = (req,res) => {
    let memes = db.getDb();

    memes = memes.sort((a,b) => {
        return b.dateStamp - a.dateStamp;
    }).filter((currentMeme) => {
        return currentMeme.privacy === 'on'
    })

    fs.readFile(viawAllPath,'utf8',(err,data) => {
      if(err){
        console.log(err);
        return;
      }

       let memeString = '';
      for(let meme of memes){
          memeString +=  `<div class="meme">
          <a href="/getDetails?id=${meme.id}">
          <img class="memePoster" src="${meme.memeSrc}"/>          
          </div>`
      }
      data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>',memeString);
      defaultResponse(res,data);
    })
}

let viewAddMeme = (req,res) => {
  fs.readFile(viewAddPath,(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    defaultResponse(res,data);
  })
}

let addMeme = (req,res) => {
    let form = new formidable.IncomingForm()
    
      let dir = Math.floor(db.length / 10)
      let id = shortid.generate()
    
      let path = `./public/memeStorage/${dir}`
    
      form.on('fileBegin', function(name, file) {
        if (!fs.existsSync(path)){
          fs.mkdirSync(path);
        }
    
        file.path = path + `/${id}.jpg`
        console.log(file.path)
      });
      
      form.parse(req, function(err, fields, files) {
        
        let meme = memeGenerator(id, fields['memeTitle'], path + `/${id}.jpg`, fields['memeDescription'], fields['status'])
        db.add(meme)
        db.save();
    
        viewAll(req, res);
      })
}

let getDetails = (req,res) => {
    let index  = qs.parse(url.parse(req.url).query).id;
    let meme = db.getDb().find((searched) => {
        return searched.id === index;
    });

    fs.readFile(viewDetails,(err,data) => {
        if(err){
            console.log(err);
            return;
        }

        let remplacement = `<div class="content">
        <img src="${meme.memeSrc}" alt=""/>
        <h3>Title  ${meme.title}</h3>
        <p> ${meme.description}</p>
        <button><a href="${meme.posterSrc}">Download Meme</a></button>
        </div>`;  

        data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>',remplacement);

        defaultResponse(res,data);
    })
    
}


module.exports = (req, res) => {
  if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
    viewAll(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'GET') {
    viewAddMeme(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'POST') {
    addMeme(req, res)
  } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
    getDetails(req, res)
  } else {
    return true
  }
}

