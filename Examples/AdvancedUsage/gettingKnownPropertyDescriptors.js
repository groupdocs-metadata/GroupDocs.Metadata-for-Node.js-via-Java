/**
* This code snippet demonstrates how to extract information about known properties that can be encountered in a particular package.
*/
const Constants = require('../../constants')

async function gettingKnownPropertyDescriptors(groupdocs) {
  try {
    const metadata = new groupdocs.metadata.Metadata(Constants.InputDoc);
    var root = metadata.getRootPackageGeneric();
    var descriptors = root.getDocumentProperties().getKnowPropertyDescriptors();
    for(var i=0;i<descriptors.getCount(); i++)
    {
      var descriptor = descriptors.get_Item(i);
      console.log(descriptor.getName());
      console.log(descriptor.getType().getRawValue());
      console.log(descriptor.getAccessLevel().getRawValue());

      var tags = descriptor.getTags();
      for(var j=0;j<tags.getCount(); j++)
        {
          console.log(tags.get_Item(j).getCategory().toString());
        }
      
      
    }
  } catch (error) {
    console.error('An error:', error);
  }
}

module.exports = gettingKnownPropertyDescriptors;