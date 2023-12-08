/**
* This code sample shows how to remove XMP metadata from a file.
*/
const Constants = require('../../../../constants')

async function removeXmpMetadata(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.JpegWithXmp);
    var root = metadata.getRootPackage();
    root.setXmpPackage(null);
    metadata.save(Constants.OutputJpeg);
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = removeXmpMetadata;
