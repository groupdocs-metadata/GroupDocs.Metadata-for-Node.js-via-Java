# GroupDocs.Metadata-for-Node.js-via-Java
GroupDocs.Metadata for Node.js provides easy ways to [Manage Document Metadata via Node.js](https://products.groupdocs.com/metadata/nodejs). It enables you to read, write, update and remove metadata of a [wide range of file formats](https://docs.groupdocs.com/metadata/nodejs/supported-document-formats/) including documents, images, emails, archives and many more. It also provides the feature to search and update metadata in document files.


## Read, Write, Update & Remove Document Metadata

- Read, update and remove metadata from 60+ popular file formats.
- Search, update and remove particular metadata properties that satisfy a specification.
- Use tags to easily manipulate most common metadata properties in a unified manner.
- [Load & work with password-protected documents](https://docs.groupdocs.com/metadata/nodejs/load-a-password-protected-document/).
- Extract information about hidden document pages, digital signatures, user comments, revisions and more.
- Supports most popular metadata standards: IPTC, XMP, EXIF, Image Resources.
- Manipulate native metadata properties in various formats, extracting technical information from images, audio and video files.
- [Calculate common document statistics](https://docs.groupdocs.com/metadata/nodejs/get-document-info/).
- Auto-detect the format and MIME type of a file by its internal structure.
- Supports various audio tags including ID3, Lyrics & APE.

## Getting Started with GroupDocs.Metadata for Node.js via Java
### Installation

From the command line:

	npm i @groupdocs/groupdocs.metadata

### Run Examples

Run runExamles.js:

	node runExamples.js


## Get Document Info

```nodejs
// Constants.InputXlsx is an absolute or relative path to your document. Ex: @"C:\Docs\source.xlsx"
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
```

## Add or Update Metadata Properties Satisfying a Predicate

```nodejs
// Constants.InputVsdx is an absolute or relative path to your document. Ex: @"C:\Docs\source.vsdx"
const metadata = new groupdocs.metadata.Metadata(Constants.InputVsdx);

    // Set the value of each property that satisfies the predicate:
    // property contains the date/time the document was created OR modified
    var affected = metadata.setProperties(
        new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getTime().getCreated()).or(new groupdocs.metadata.ContainsTagSpecification(groupdocs.metadata.Tags.getTime().getModified())),
        new groupdocs.metadata.PropertyValue(new Date()));


    console.log(`Properties set: ${affected}`);

    metadata.save(Constants.InputVsdx);
}
```

[Home](https://www.groupdocs.com/) | [Product Page](https://products.groupdocs.com/metadata/nodejs) | [Documentation](https://docs.groupdocs.com/metadata/nodejs/) | [Demos](https://products.groupdocs.app/metadata/family) | [API Reference](https://apireference.groupdocs.com/nodejs/metadata) | [Examples](https://github.com/groupdocs-metadata/GroupDocs.metadata-for-Nodejs/tree/master/Examples) | [Blog](https://blog.groupdocs.com/category/metadata/) | [Search](https://search.groupdocs.com/) | [Free Support](https://forum.groupdocs.com/c/metadata) | [Temporary License](https://purchase.groupdocs.com/temporary-license)
