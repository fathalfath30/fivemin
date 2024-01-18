/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
*/

// output file and directory
const outputDir = "./.dist"
const zipTarget = "dist.zip"

// list file to be archived
const listFile = [
  "fxmanifest.lua", "server", "client", "ui"
];

// ---------------------------------------------------------------------------
// beyond this line you are not supposed to be edit anything ...
// ---------------------------------------------------------------------------
const fs = require('fs');
const zip = (require('node-zip'))();
const path = require('path');

// output file

function scan(scanPath, arrFile) {
  arrFile = arrFile || []
  if(!fs.statSync(scanPath).isDirectory()) {
    arrFile.push(scanPath);
  } else {
    fs.readdirSync(scanPath)
      .forEach((f) => {
        let dp = path.join(scanPath, f)
        if(!fs.existsSync(dp)) {
          console.error(`file ${dp} does not exists!`);
          process.exit(0);
        }

        if(fs.statSync(dp).isDirectory()) {
          arrFile = scan(dp, arrFile)
        } else {
          arrFile.push(dp)
        }
      })
  }

  return arrFile
}

try {
  let result = [];
  for(let i = 0; i < listFile.length; i++) {
    result.push(scan(listFile[i]))
  }

  for(let i = 0; i < result.length; i++) {
    for(let j = 0; j < result[i].length; j++) {
      zip.file(result[i][j], fs.readFileSync(result[i][j]))
    }
  }

  const targetOutput = path.join(outputDir, zipTarget)
  if(!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }
  if(fs.existsSync(targetOutput)) {
    fs.unlinkSync(targetOutput);
  }

  let data = zip
    .generate({
      base64: true, compression: 'DEFLATE'
    });

  fs.writeFileSync(targetOutput, data, 'base64');
} catch(e) {
  console.error("error while processing archive file: " + e.message)
}
