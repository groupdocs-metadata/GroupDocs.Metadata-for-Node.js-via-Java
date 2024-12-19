require('dotenv').config()
const path = require('path');
const fs = require('fs');

const ResourcesPath = './Resources/';;
const InputPath = path.join(ResourcesPath, './SampleFiles/Input/');
const OutputPath = path.join(ResourcesPath, './SampleFiles/Output/');

module.exports = {
    resourcesPath: ResourcesPath,
    LicensePath: '',
    inputPath : InputPath,
    outputPath : OutputPath,


    InputDocx : InputPath + 'input.docx',
    InputPptx : InputPath + 'input.pptx',
    InputXlsx : InputPath + 'input.xlsx',
    InputVsdx : InputPath + 'input.vsdx',
    InputVdx : InputPath + 'input.vdx',
    InputPdf : InputPath + 'input.pdf',
    InputOne : InputPath + 'input.one',
    InputDoc : InputPath + 'input.doc',
    InputPpt : InputPath + 'input.ppt',
    InputXls : InputPath + 'input.xls',
    InputJpeg : InputPath + 'input.jpg',
    InputPng : InputPath + 'input.png',
    InputGif : InputPath + 'input.gif',
    InputMpp : InputPath + 'input.mpp',
    InputBmp : InputPath + 'input.bmp',
    InputJpeg2000 : InputPath + 'input.jp2',
    InputDicom : InputPath + 'input.dicom',
    InputAsf : InputPath + 'input.asf',
    InputAvi : InputPath + 'input.avi',
    InputFlv : InputPath + 'input.flv',
    InputMkv : InputPath + 'input.mkv',
    InputMov : InputPath + 'input.mov',
    InputWav : InputPath + 'input.wav',
    InputZip : InputPath + 'input.zip',
    InputVcf : InputPath + 'input.vcf',
    InputDxf : InputPath + 'input.dxf',
    InputEpub : InputPath + 'input.epub',
    InputEml : InputPath + 'input.eml',
    InputMsg : InputPath + 'input.msg',
    InputTtf : InputPath + 'input.ttf',
    InputTorrent : InputPath + 'input.torrent',
    PngWithXmp : InputPath + 'xmp.png',
    GifWithXmp : InputPath + 'xmp.gif',
    JpegWithXmp : InputPath + 'xmp.jpg',
    TiffWithExif : InputPath + 'exif.tiff',
    TiffWithIptc : InputPath + 'iptc.tiff',
    JpegWithExif : InputPath + 'exif.jpg',
    JpegWithIptc : InputPath + 'iptc.jpg',
    PsdWithIptc : InputPath + 'iptc.psd',
    PsdWithExif : InputPath + 'exif.psd',
    JpegWithIrb : InputPath + 'irb.jpg',
    JpegWithBarcodes : InputPath + 'barcode.jpg',
    PsdWithIrb : InputPath + 'irb.psd',
    ProtectedDocx : InputPath + 'protected.docx',
    SignedPdf : InputPath + 'signed.pdf',
    MkvWithSubtitles : InputPath + 'subtitles.mkv',
    MP3WithID3V1 : InputPath + 'id3v1.mp3',
    MP3WithID3V2 : InputPath + 'id3v2.mp3',
    MP3WithLyrics : InputPath + 'lyrics.mp3',
    MP3WithApe : InputPath + 'ape.mp3',
    CanonJpeg : InputPath + 'canon_raw.jpg',
    NikonJpeg : InputPath + 'nikon_raw.jpg',
    PanasonicJpeg : InputPath + 'panasonic_raw.jpg',
    SonyJpeg : InputPath + 'sony_raw.jpg',


    OutputDocx : OutputPath + 'output.docx',
    OutputPptx : OutputPath + 'output.pptx',
    OutputXlsx : OutputPath + 'output.xlsx',
    OutputVsdx : OutputPath + 'output.vsdx',
    OutputVdx : OutputPath + 'output.vdx',
    OutputPdf : OutputPath + 'output.pdf',
    OutputOne : OutputPath + 'output.one',
    OutputDoc : OutputPath + 'output.doc',
    OutputPpt : OutputPath + 'output.ppt',
    OutputXls : OutputPath + 'output.xls',
    OutputMpp : OutputPath + 'output.mpp',
    OutputJpeg : OutputPath + 'output.jpg',
    OutputPng : OutputPath + 'output.png',
    OutputGif : OutputPath + 'output.gif',
    OutputTiff : OutputPath + 'output.tiff',
    OutputPsd : OutputPath + 'output.psd',
    OutputBmp : OutputPath + 'output.bmp',
    OutputMp3 : OutputPath + 'output.mp3',
    OutputZip : OutputPath + 'output.zip',
    OutputEml : OutputPath + 'output.eml',
    OutputTorrent : OutputPath + 'output.torrent',
    OutputCsv : OutputPath + 'output.csv',
    OutputEpub : OutputPath + 'output.epub',
    OutputDxf : OutputPath + 'output.dxf',
}
