/**
* This code snippet demonstrates how to extract the property value using the Type property.
*/
const Constants = require('../../../constants')
const java = require('java')
const Date = java.import('java.util.Date')

async function extractUsingType(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputDocx);
    var properties = metadata.findProperties(new groupdocs.metadata.AnySpecification());
    for(var i=0;i<properties.getCount(); i++){
      var property = properties.get_Item(i);
      // Process String and DateTime properties only
      if (property.getValue().getType().getRawValue() == groupdocs.metadata.MetadataPropertyType.String.getRawValue()) {
          console.log(property.getValue().toString());
      } else if (property.getValue().getType().getRawValue() == groupdocs.metadata.MetadataPropertyType.DateTime.getRawValue()) {
        console.log(property.getValue().toClass(Date.class));
      }
   } 
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = extractUsingType;