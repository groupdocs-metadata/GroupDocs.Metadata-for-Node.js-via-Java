/**
* This example demonstrates how to set specific metadata properties using different criteria.
*/
const Constants = require('../../constants')
const java = require('java')
const Date = java.import('java.util.Date')

async function setMetadataProperties(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputVsdx);

    // Set the value of each property that satisfies the predicate:
    // property contains the date/time the document was created OR modified
    var affected = metadata.setProperties(
        new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getTime().getCreated()).or(new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getTime().getModified())),
        new groupdocs.metadata.PropertyValue(new Date()));


    console.log(`Properties set: ${affected}`);

    metadata.save(Constants.InputVsdx);

  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = setMetadataProperties;

