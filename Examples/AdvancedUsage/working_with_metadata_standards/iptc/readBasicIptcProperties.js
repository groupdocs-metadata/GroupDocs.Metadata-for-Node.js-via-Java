/**
* This example shows how to read basic IPTC metadata properties.
*/
const Constants = require('../../../../constants')

async function readBasicIptcProperties(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.JpegWithIptc);
    var root = metadata.getRootPackage();
            if (root.getIptcPackage() != null) {
                if (root.getIptcPackage().getEnvelopeRecord() != null) {
                    console.log(root.getIptcPackage().getEnvelopeRecord().getDateSent());
                    console.log(root.getIptcPackage().getEnvelopeRecord().getDestination());
                    console.log(root.getIptcPackage().getEnvelopeRecord().getFileFormat());
                    console.log(root.getIptcPackage().getEnvelopeRecord().getFileFormatVersion());

                    // ...
                }

                if (root.getIptcPackage().getApplicationRecord() != null) {
                    console.log(root.getIptcPackage().getApplicationRecord().getHeadline());
                    console.log(root.getIptcPackage().getApplicationRecord().getByLine());
                }   
            }
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = readBasicIptcProperties;
