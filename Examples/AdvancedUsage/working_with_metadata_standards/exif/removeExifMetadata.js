/**
* This code sample shows how to remove EXIF metadata from a file.
*/
const Constants = require('../../../../constants')

async function removeExifMetadata(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.TiffWithExif);
    var root = metadata.getRootPackage();
    root.setExifPackage(null);
    metadata.save(Constants.OutputJpeg);
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = removeExifMetadata;