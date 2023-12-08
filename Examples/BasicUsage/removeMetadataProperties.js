/**
* This example demonstrates how to remove specific metadata properties using various criteria.
*/
const Constants = require('../../constants')

async function removeMetadataProperties(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputDocx);

    // Remove all the properties satisfying the predicate:
    // property contains the name of the document author OR
    // it refers to the last editor OR
    // the property value is a string that is equal to the given string "John" (to remove any mentions of John from the detected metadata)
    var affected = metadata.removeProperties(
        new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getPerson().getCreator()).or(
        new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getPerson().getEditor()))
        );

    console.log(`Properties removed: ${affected}`);

    metadata.save(Constants.OutputDocx);

  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = removeMetadataProperties;

