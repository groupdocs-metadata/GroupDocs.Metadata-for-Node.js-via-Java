/**
* This example demonstrates how to search for specific metadata properties using tags.
*/
const Constants = require('../../constants')

async function findMetadataProperties(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputPptx);

    // Fetch all the properties satisfying the predicate:
    // property contains the name of the last document editor OR the date/time the document was last modified
    var searchSpecification = new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getPerson().getEditor()).or(new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getTime().getModified()));
    var metadataProperties = metadata.findProperties(searchSpecification);

    for (var i =0; i< metadataProperties.getCount(); i++) {
        console.log(`Property name: ${metadataProperties.get_Item(i).getName()}, Property value: ${metadataProperties.get_Item(i).getValue()}`);
    }

  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = findMetadataProperties;

