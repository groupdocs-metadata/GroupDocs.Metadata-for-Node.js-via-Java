/**
* This example demonstrates how to add some missing metadata properties to a file regardless of its format.
*/
const Constants = require('../../constants')
const fs = require('fs');
const java = require('java')
const Date = java.import('java.util.Date')

async function addingMetadata(groupdocs) {
  try {
    fs.readdirSync(Constants.inputPath).forEach(file => {
            var metadata = new groupdocs.metadata.Metadata(Constants.inputPath + file);
            if (metadata.getFileFormat() != groupdocs.metadata.FileFormat.Unknown && !metadata.getDocumentInfo().isEncrypted()) {
                
                console.log(file);

                // Add a property containing the file last printing date if it's missing
                // Note that the property will be added to metadata packages that satisfy the following criteria:
                // 1) Only existing metadata packages will be affected. No new packages are added during this operation
                // 2) There should be a known metadata property in the package structure that fits the search condition but is actually missing in the package.
                // All properties supported by a certain package are usually defined in the specification of a particular metadata standard
                var affected = metadata.addProperties(new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getTime().getPrinted()), new groupdocs.metadata.PropertyValue(new Date()));

                console.log(`Affected properties: ${affected}`);
            }
      });
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = addingMetadata;