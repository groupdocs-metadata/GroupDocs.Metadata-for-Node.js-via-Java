/**
* This example demonstrates how to export metadata properties to an Excel workbook.
*/
const Constants = require('../../constants')
const java = require('java')
const Date = java.import('java.util.Date')

async function exportingMetadataProperties(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputDoc);
    var root = metadata.getRootPackage();

    if (root != null) 
    {
      // Initialize the export manager with the root metadata package to export the whole metadata tree
      var manager = new groupdocs.metadata.ExportManager(root);

      manager.export(Constants.OutputXls, groupdocs.metadata.ExportFormat.Xls);
    }
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = exportingMetadataProperties;