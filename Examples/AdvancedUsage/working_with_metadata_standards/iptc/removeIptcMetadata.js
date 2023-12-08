/**
* This code sample shows how to remove IPTC metadata from a file.
*/
const Constants = require('../../../../constants')

async function removeIptcMetadata(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.JpegWithIptc);
    var root = metadata.getRootPackage();
    root.setIptcPackage(null);
    metadata.save(Constants.OutputJpeg);
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = removeIptcMetadata;