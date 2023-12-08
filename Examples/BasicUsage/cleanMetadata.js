
/**
* This example demonstrates how to remove all detected metadata packages/properties from a file.
*/
const Constants = require('../../constants')

async function сleanMetadata(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputPdf);

    // Remove detected metadata packages
    var affected = metadata.sanitize();
    console.log(`\nProperties removed: ${affected}.`);

    metadata.save(Constants.OutputPdf);
  } catch (error) {
    console.error('An error occurred during the sanitize document:', error);
  }
}

module.exports = сleanMetadata;

