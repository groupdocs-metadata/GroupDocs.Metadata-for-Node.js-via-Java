/**
* This example demonstrates how to add some missing metadata properties to a file regardless of its format.
*/
const Constants = require('../../constants')
const fs = require('fs');
const java = require('java')
const Date = java.import('java.util.Date')

async function extractingMetadata(groupdocs) {
  try {
    fs.readdirSync(Constants.inputPath).forEach(file => {
            var metadata = new groupdocs.metadata.Metadata(Constants.inputPath + file);
            if (metadata.getFileFormat() != groupdocs.metadata.FileFormat.Unknown && !metadata.getDocumentInfo().isEncrypted()) {
                
                console.log(file);

                var searchSpecification = new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getPerson().getEditor()).or(new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getTime().getModified()));
                var metadataProperties = metadata.findProperties(searchSpecification);

                for (var i =0; i< metadataProperties.getCount(); i++) {
                    console.log(`Property name: ${metadataProperties.get_Item(i).getName()}, Property value: ${metadataProperties.get_Item(i).getValue()}`);
                }
            }
      });
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = extractingMetadata;