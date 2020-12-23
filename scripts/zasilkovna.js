const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', function () {
        file.close(resolve);
      });
    }).on('error', function (err) { // Handle errors
      fs.unlink(dest);
      if (cb) reject(err.message);
    });
  }
  )
}

const run = async () => {
  const tmpFileName = "tmp.json";
  await download("https://www.zasilkovna.cz/api/v4/41494564a70d6de6/branch.json", tmpFileName);
  const data = fs.readFileSync(tmpFileName, 'utf8');
  const json = Object.values(JSON.parse(data).data).filter(x=>x.country==="cz").map((x) => ({ id: x.id, name: x.name }))
  fs.writeFileSync("./static/shipping/zasilkovna_cz.json", JSON.stringify(json));
}


run()
