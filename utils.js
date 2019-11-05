
const fs = require("fs");
const playerFile = __dirname + '/players.json'
const weaponFile = __dirname + '/weapons.json'

module.exports = {
  readData: async function (){
    var content = await fs.readFileSync(playerFile, 'utf8')
    console.log("Reading", playerFile)
    return JSON.parse(content)
  },
  readWeap: async function (){
    var content2 = await fs.readFileSync(weaponFile, 'utf8')
    console.log("Reading", weaponFile)
    return JSON.parse(content2)
  },
  putWeap: async function (data2) {
      fs.writeFile(weaponFile, JSON.stringify(data2, null, 2), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
      console.log(JSON.stringify(data2, null, 2))
    })
  },
  putData: async function (data) {
      fs.writeFile(playerFile, JSON.stringify(data, null, 2), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
      console.log(JSON.stringify(data, null, 2))
    })
  }
}
