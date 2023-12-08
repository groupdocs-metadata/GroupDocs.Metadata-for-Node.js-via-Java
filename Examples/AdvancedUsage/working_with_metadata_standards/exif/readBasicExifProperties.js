/**
* This code sample demonstrates how to extract basic EXIF metadata properties.
*/
const Constants = require('../../../../constants')

async function readBasicExifProperties(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.TiffWithExif);
    var root = metadata.getRootPackage();
            if (root.getExifPackage() != null) {
                console.log(root.getExifPackage().getArtist());
                console.log(root.getExifPackage().getSoftware());

                // ...

                console.log(root.getExifPackage().getExifIfdPackage().getBodySerialNumber());

                // ...

                console.log(root.getExifPackage().getGpsPackage().getAltitude());

                // ...
            }
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = readBasicExifProperties;