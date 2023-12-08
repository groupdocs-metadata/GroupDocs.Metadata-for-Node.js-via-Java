/**
* This example demonstrates how to extract basic format information from a file.
*/
const Constants = require('../../constants')

async function getDocumentInfo(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputXlsx);

    if (metadata.getFileFormat() != groupdocs.metadata.FileFormat.Unknown) {
        var info = metadata.getDocumentInfo();
        console.log(`File format: ${info.getFileType().getFileFormat()}`);
        console.log(`File extension: ${info.getFileType().getExtension()}`);
        console.log(`MIME Type: ${info.getFileType().getMimeType()}`);
        console.log(`Number of pages: ${info.getPageCount()}`);
        console.log(`Document size: ${info.getSize()}`);
        console.log(`Is document encrypted: ${info.isEncrypted()}`);
    }
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = getDocumentInfo;

