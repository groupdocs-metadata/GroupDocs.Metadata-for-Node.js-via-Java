const examples = require('./metadataExamples')

;(async () => {
  try {
    await examples.setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all([
      // NOTE: Please uncomment the example you want to try out

      // Basic usage

      examples.cleanMetadata(),
      examples.findMetadataProperties(),
      examples.getDocumentInfo(),
      examples.removeMetadataProperties(),
      examples.setMetadataProperties(),


      //Advanced usage

      examples.addingMetadata(),
      examples.updatingMetadata(),
      examples.removingMetadata(),
      examples.extractingMetadata(),
      examples.exportingMetadataProperties(),
      examples.gettingKnownPropertyDescriptors(),
      examples.workingWithInterpretedValues(),
      examples.extractUsingType(),
      examples.loadFromLocalDisk(),
      examples.readBasicExifProperties(),
      examples.removeExifMetadata(),
      examples.readBasicIptcProperties(),
      examples.removeIptcMetadata(),
      examples.readXmpProperties(),
      examples.removeXmpMetadata(),
      
    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()