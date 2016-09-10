const fs = require('fs')
const path = require('path')
const parseString = require('xml2js').parseString

const convert = require('./util').convert

const dataFile = path.join(__dirname, '../data/LocListZh.xml')
const outFile = path.join(__dirname, '../lib/location.json')

fs.readFile(dataFile, (err, data) => {
  if (err) {
    console.error('readFile err:', err)
    return
  }
  parseString(data, (err, result) => {
    if (err) {
      console.error('parseString err:', err)
      return
    }
    const rows = convert(result)

    fs.writeFile(outFile, JSON.stringify(rows, null, 2), (err) => {
      if (err) console.error('writeFile err:', err)
    })
  })
})
