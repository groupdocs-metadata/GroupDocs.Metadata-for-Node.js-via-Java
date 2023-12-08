
/**
* This example demonstrates how to extract XMP metadata from a file.
*/
const Constants = require('../../../../constants')

async function readXmpProperties(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.PngWithXmp);
    var root = metadata.getRootPackage();
            if (root.getXmpPackage() != null) {
                if (root.getXmpPackage().getSchemes().getXmpBasic() != null) {
                    console.log(root.getXmpPackage().getSchemes().getXmpBasic().getCreatorTool());
                    console.log(root.getXmpPackage().getSchemes().getXmpBasic().getCreateDate());
                }

                if (root.getXmpPackage().getSchemes().getDublinCore() != null) {
                    console.log(root.getXmpPackage().getSchemes().getDublinCore().getFormat());
                    console.log(root.getXmpPackage().getSchemes().getDublinCore().getCoverage());
                }

                if (root.getXmpPackage().getSchemes().getPhotoshop() != null) {
                    console.log(root.getXmpPackage().getSchemes().getPhotoshop().getColorMode());
                    console.log(root.getXmpPackage().getSchemes().getPhotoshop().getIccProfile());
                }
            }
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = readXmpProperties;
