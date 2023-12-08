/**
* This example demonstrates how to use interpreted property values.
*/
const Constants = require('../../constants')

async function workingWithInterpretedValues(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputDoc);
    var root = metadata.getRootPackageGeneric();
    var properties = metadata.findProperties(new groupdocs.metadata.OfTypeSpecification(groupdocs.metadata.MetadataPropertyType.Integer));
      for(var i=0;i<properties.getCount(); i++){
        var property = properties.get_Item(i);
        if(property.getInterpretedValue() != null)
        {
          console.log(property.getName());
          console.log(property.getValue().getRawValue());
          console.log(property.getInterpretedValue().getRawValue());
        }
          
      }
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = workingWithInterpretedValues;