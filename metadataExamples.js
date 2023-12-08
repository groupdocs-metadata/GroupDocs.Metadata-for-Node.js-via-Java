const metadata = require('./groupdocs.metadata')

// Constant Variables 
const Constants = require('./constants')

const setLicense = require('./QuickStart/setLicense')
const setMeteredLicense = require('./QuickStart/SetMeteredLicense')

const cleanMetadata = require('./Examples/BasicUsage/cleanMetadata')
const findMetadataProperties = require('./Examples/BasicUsage/findMetadataProperties')
const getDocumentInfo = require('./Examples/BasicUsage/getDocumentInfo')
const removeMetadataProperties = require('./Examples/BasicUsage/removeMetadataProperties')
const setMetadataProperties = require('./Examples/BasicUsage/setMetadataProperties')

const addingMetadata = require('./Examples/AdvancedUsage/addingMetadata')
const exportingMetadataProperties = require('./Examples/AdvancedUsage/exportingMetadataProperties')
const gettingKnownPropertyDescriptors = require('./Examples/AdvancedUsage/gettingKnownPropertyDescriptors')
const workingWithInterpretedValues = require('./Examples/AdvancedUsage/workingWithInterpretedValues')
const extractUsingType = require('./Examples/AdvancedUsage/extracting_property_values/extractUsingType')
const loadFromLocalDisk = require('./Examples/AdvancedUsage/loading_files/loadFromLocalDisk')
const readBasicExifProperties = require('./Examples/AdvancedUsage/working_with_metadata_standards/exif/readBasicExifProperties')
const removeExifMetadata = require('./Examples/AdvancedUsage/working_with_metadata_standards/exif/removeExifMetadata')
const readBasicIptcProperties = require('./Examples/AdvancedUsage/working_with_metadata_standards/iptc/readBasicIptcProperties')
const removeIptcMetadata = require('./Examples/AdvancedUsage/working_with_metadata_standards/iptc/removeIptcMetadata')
const readXmpProperties = require('./Examples/AdvancedUsage/working_with_metadata_standards/xmp/readXmpProperties')
const removeXmpMetadata = require('./Examples/AdvancedUsage/working_with_metadata_standards/xmp/removeXmpMetadata')

class MetadataExamples {
  constructor() {
    // Initialize the License
    let lic = Constants.LicensePath
    if (!lic || !lic.endsWith('.lic')) console.log('License is not found, continuing with demo version!')
    else this.licensePath = lic

    // Initialize the model
    this.metadata = metadata
  }

  async cleanMetadata() {
    return cleanMetadata(this);
  }

  async findMetadataProperties() {
    return findMetadataProperties(this);
  }

  async getDocumentInfo() {
    return getDocumentInfo(this);
  }

  async removeMetadataProperties() {
    return removeMetadataProperties(this);
  }

  async setMetadataProperties() {
    return setMetadataProperties(this);
  }

  async exportingMetadataProperties() {
    return exportingMetadataProperties(this);
  }
  async gettingKnownPropertyDescriptors() {
    return gettingKnownPropertyDescriptors(this);
  }
  async workingWithInterpretedValues() {
    return workingWithInterpretedValues(this);
  }
  async extractUsingType() {
    return extractUsingType(this);
  }
  async loadFromLocalDisk() {
    return loadFromLocalDisk(this);
  }
  async readBasicExifProperties() {
    return readBasicExifProperties(this);
  }
  async removeExifMetadata() {
    return removeExifMetadata(this);
  }
  async readBasicIptcProperties() {
    return readBasicIptcProperties(this);
  }
  async removeIptcMetadata() {
    return removeIptcMetadata(this);
  }
  async readXmpProperties() {
    return readXmpProperties(this);
  }
  async removeXmpMetadata() {
    return removeXmpMetadata(this);
  }

  async addingMetadata() {
    return addingMetadata(this);
  }
  
  async setMeteredLicense() {
    return setMeteredLicense(this);
  }

  async setLicense(licensePath = '') {
    if (this.licensePath) return setLicense(this, licensePath || this.licensePath)
  }
}

module.exports = new MetadataExamples()
