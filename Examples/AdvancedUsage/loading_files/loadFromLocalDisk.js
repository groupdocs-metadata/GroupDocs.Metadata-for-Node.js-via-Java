/**
* This example demonstrates how to load a file from a local disk.
*/
const Constants = require('../../../constants')
const java = require('java')
const Date = java.import('java.util.Date')

async function loadFromLocalDisk(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputOne);
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = loadFromLocalDisk;