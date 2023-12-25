const path = require('path')
const java = require('java')
const os = require('os')

if (os.platform() === 'darwin') {
  java.options.push('-Djava.awt.headless=true')
}

java.asyncOptions = {
  asyncSuffix: 'Async',
  syncSuffix: '',
}

java.classpath.push(path.join(__dirname, '/groupdocs-metadata-23.10.jar'))

exports = module.exports

function __typeof__(objClass) {
  if (objClass !== undefined && objClass.constructor) {
    const strFun = objClass.constructor.toString()
    let className = strFun.substr(0, strFun.indexOf('('))
    className = className.replace('function', '')
    return className.replace(/(^\s*)|(\s*$)/gi, '')
  }
  return typeof objClass
}

/** STREAM HELPERS * */
exports.readDataFromStream = function (readStream, callback) {
  const inputStreamBuffer = new exports.StreamBuffer()
  readStream.on('data', chunk => {
    inputStreamBuffer.write(chunk)
  })
  readStream.on('end', () => {
    callback(inputStreamBuffer.toInputStream())
  })
}

exports.readBytesFromStream = function (readStream, callback) {
  const inputStreamBuffer = new exports.StreamBuffer()
  readStream.on('data', chunk => {
    inputStreamBuffer.write(chunk)
  })
  readStream.on('end', () => {
    const array = Array.from(inputStreamBuffer.toByteArray())
    const javaArray = java.newArray('byte', array)
    callback(javaArray)
  })
}

exports.Cr2AFConfigIndex = {
	AFAccelDecelTracking : 3,
	AFAreaSelectionMethod : 13,
	AFAssistBeam : 8,
	AFConfigTool : 1,
	AFPointDisplayDuringFocus : 16,
	AFPointSwitching : 4,
	AFStatusViewfinder : 18,
	AFTrackingSensitivity : 2,
	AIServoFirstImage : 5,
	AIServoSecondImage : 6,
	AutoAFPointSelEOSiTRAF : 10,
	InitialAFPointInServo : 19,
	LensDriveWhenAFImpossible : 11,
	ManualAFPointSelPattern : 15,
	OneShotAFRelease : 9,
	OrientationLinkedAF : 14,
	SelectAFAreaSelectionMode : 12,
	Unknown1 : 0,
	USMLensElectronicMF : 7,
	VFDisplayIllumination : 17,
},
exports.Cr2AFInfo2Index = {
	AFAreaHeights : 9,
	AFAreaMode : 1,
	AFAreaWidths : 8,
	AFAreaXPositions : 10,
	AFAreaYPositions : 11,
	AFImageHeight : 7,
	AFImageWidth : 6,
	AFInfoSize : 0,
	AFPointsInFocus : 12,
	AFPointsSelected : 13,
	CanonImageHeight : 5,
	CanonImageWidth : 4,
	NumAFPoints : 2,
	PrimaryAFPoint : 14,
	ValidAFPoints : 3,
},
exports.Cr2AFInfoIndex = {
	AFAreaHeight : 7,
	AFAreaWidth : 6,
	AFAreaXPositions : 8,
	AFAreaYPositions : 9,
	AFImageHeight : 5,
	AFImageWidth : 4,
	AFPointsInFocus : 10,
	CanonImageHeight : 3,
	CanonImageWidth : 2,
	NumAFPoints : 0,
	PrimaryAFPoint : 12,
	PrimaryAFPointAFInfo : 11,
	ValidAFPoints : 1,
},
exports.Cr2AFMicroAdjIndex = {
	AFMicroAdjMode : 1,
	AFMicroAdjValue : 2,
	Unknown1 : 0,
},
exports.Cr2AspectInfoIndex = {
	AspectRatio : 0,
	CroppedImageHeight : 2,
	CroppedImageLeft : 3,
	CroppedImageTop : 4,
	CroppedImageWidth : 1,
},
exports.Cr2CameraSettingsIndex = {
	AESetting : 33,
	AFPoint : 19,
	CameraIso : 16,
	CanonExposureMode : 20,
	CanonFlashMode : 4,
	CanonImageSize : 10,
	ColorTone : 43,
	ContinuousDrive : 5,
	Contrast : 13,
	DigitalZoom : 12,
	DisplayAperture : 35,
	EasyMode : 11,
	FlashActivity : 28,
	FlashBits : 29,
	FocalUnits : 25,
	FocusContinuous : 32,
	FocusMode : 7,
	FocusRange : 18,
	ImageStabilization : 34,
	LensType : 22,
	MacroMode : 1,
	ManualFlashOutput : 41,
	MaxAperture : 26,
	MaxFocalLength : 23,
	MeteringMode : 17,
	MinAperture : 27,
	MinFocalLength : 24,
	PhotoEffect : 40,
	Quality : 3,
	RecordMode : 9,
	Saturation : 14,
	SelfTimer : 2,
	Sharpness : 15,
	SpotMeteringMode : 39,
	SRAWQuality : 47,
	Unknown1 : 0,
	Unknown10 : 48,
	Unknown11 : 49,
	Unknown12 : 50,
	Unknown2 : 6,
	Unknown3 : 8,
	Unknown4 : 21,
	Unknown5 : 38,
	Unknown6 : 42,
	Unknown7 : 44,
	Unknown8 : 45,
	Unknown9 : 46,
	ZoomSourceWidth : 36,
	ZoomTargetWidth : 37,
},
exports.Cr2ColorBalanceIndex = {
	WB_RGGBBlackLevels : 37,
	WB_RGGBLevelsAuto : 1,
	WB_RGGBLevelsCloudy : 13,
	WB_RGGBLevelsDaylight : 5,
	WB_RGGBLevelsFlash : 25,
	WB_RGGBLevelsFluorescent : 21,
	WB_RGGBLevelsKelvin : 33,
	WB_RGGBLevelsShade : 9,
	WB_RGGBLevelsTungsten : 17,
},
exports.Cr2ColorInfoIndex = {
	ColorSpace : 3,
	ColorTone : 2,
	Saturation : 1,
	Unknown1 : 0,
},
exports.Cr2CropInfoIndex = {
	CropBottomMargin : 3,
	CropLeftMargin : 0,
	CropRightMargin : 1,
	CropTopMargin : 2,
},
exports.Cr2FileInfoIndex = {
	BracketMode : 3,
	BracketShotNumber : 5,
	BracketValue : 4,
	FileNumberOrShutterCount : 1,
	FilterEffect : 14,
	FlashExposureLock : 25,
	FocusDistanceLower : 21,
	FocusDistanceUpper : 20,
	LiveViewShooting : 19,
	LongExposureNoiseReduction2 : 8,
	MacroMagnification : 16,
	RawJpgQuality : 6,
	RawJpgSize : 7,
	RFLensType : 61,
	ShutterMode : 23,
	ToningEffect : 15,
	Unknown1 : 0,
	Unknown2 : 10,
	Unknown3 : 11,
	Unknown4 : 17,
	Unknown5 : 18,
	WBBracketMode : 9,
	WBBracketValueAB : 12,
	WBBracketValueGM : 13,
},
exports.Cr2FilterInfoIndex = {
	FisheyeFilter : 1281,
	GrainyBWFilter : 257,
	MiniatureFilter : 1025,
	MiniatureFilterOrientation : 1026,
	MiniatureFilterParameter : 1028,
	MiniatureFilterPosition : 1027,
	PaintingFilter : 1537,
	SoftFocusFilter : 513,
	ToyCameraFilter : 769,
	WatercolorFilter : 1793,
},
exports.Cr2FocalLengthIndex = {
	FocalLength : 1,
	FocalPlaneXSize : 2,
	FocalPlaneYSize : 3,
	FocalType : 0,
},
exports.Cr2Functions1DIndex = {
	AEBSequenceAutoCancel : 9,
	AFPointActivationArea : 17,
	AFPointIllumination : 10,
	AFPointSelection : 11,
	AFPointSpotMetering : 13,
	AIServoContinuousShooting : 21,
	AIServoTrackingSensitivity : 20,
	ExposureLevelIncrements : 6,
	FillFlashAutoReduction : 14,
	FinderDisplayDuringExposure : 1,
	FocusingScreen : 0,
	ISOSpeedExpansion : 3,
	LCDPanels : 8,
	LensAFStopButton : 19,
	ManualTv : 5,
	MirrorLockup : 12,
	SafetyShiftInAvOrTv : 16,
	ShutterAELButton : 4,
	ShutterCurtainSync : 15,
	ShutterReleaseNoCFCard : 2,
	SwitchToRegisteredAFPoint : 18,
	USMLensElectronicMF : 7,
},
exports.Cr2Functions2Index = {
	AccelerationTracking : 1304,
	AddAspectRatioInfo : 2062,
	AddIPTCInformation : 2069,
	AddOriginalDecisionData : 2063,
	AEBAutoCancel : 260,
	AEBSequence : 261,
	AEBShotCount : 262,
	AELockMeterModeAfterFocus : 276,
	AEMicroadjustment : 272,
	AFAreaSelectMethod : 1307,
	AFAssistBeam : 1294,
	AFDuringLiveView : 1297,
	AFMicroadjustment : 1287,
	AFOnAELockButtonSwitch : 1794,
	AFPointAreaExpansion : 1288,
	AFPointAutoSelection : 1291,
	AFPointBrightness : 1293,
	AFPointDisplayDuringFocus : 1292,
	AFPointSelectionMethod : 1295,
	AIServoFirstImagePriority : 1305,
	AIServoImagePriority : 1283,
	AIServoSecondImagePriority : 1306,
	AIServoTrackingMethod : 1284,
	AIServoTrackingSensitivity : 1282,
	ApertureRange : 269,
	ApplyShootingMeteringMode : 270,
	AssignFuncButton : 1803,
	AudioCompression : 2070,
	AutoAFPointColorTracking : 1308,
	AutoLightingOptimizer : 516,
	AvSettingWithoutLens : 1799,
	ButtonFunctionControlOff : 1802,
	ContinuousShootingSpeed : 1552,
	ContinuousShotLimit : 1553,
	ControlRingRotation : 1810,
	CustomControls : 1804,
	CustomizeDials : 1813,
	DefaultEraseOption : 2067,
	DialDirectionTvAv : 1798,
	DisplayAllAFPoints : 1300,
	ETTLII : 772,
	ExposureCompAutoCancel : 275,
	ExposureLevelIncrements : 257,
	ExposureModeInManual : 267,
	FEMicroadjustment : 273,
	FlashButtonFunction : 1806,
	FlashFiring : 774,
	FlashSyncSpeedAv : 271,
	FocusDisplayAIServoAndMF : 1301,
	FocusingScreen : 2059,
	FocusRingRotation : 1811,
	HighISONoiseReduction : 514,
	HighlightTonePriority : 515,
	InfoButtonWhenShooting : 1033,
	InitialAFPointAIServoAF : 1310,
	ISOSpeedIncrements : 258,
	ISOSpeedRange : 259,
	LCDDisplayAtPowerOn : 2065,
	LCDIlluminationDuringBulb : 1032,
	LensAFStopButton : 1286,
	LensDriveNoAF : 1285,
	LiveViewExposureSimulation : 2064,
	LockMicrophoneButton : 1801,
	LongExposureNoiseReduction : 513,
	LVShootingAreaDisplay : 1035,
	LVShootingAreaDisplay2 : 1036,
	ManualAFPointSelectPattern : 1299,
	ManualTv : 1797,
	MemoAudioQuality : 2066,
	MirrorLockup : 1551,
	MultiControllerWhileMetering : 1303,
	MultiFunctionLock : 1807,
	OrientationLinkedAFPoint : 1302,
	QuickControlDialInMeter : 1795,
	RestrictDriveModes : 1554,
	RetractLensOnPowerOff : 2068,
	RFLensMFFocusRingSensitivity : 1812,
	SafetyShift : 264,
	SameExposureForNewAperture : 274,
	SelectableAFPoint : 1289,
	SelectAFAreaSelectMode : 1298,
	SetButtonWhenShooting : 1796,
	ShortReleaseTimeLag : 2061,
	ShutterAELock : 1793,
	ShutterCurtainSync : 773,
	ShutterReleaseWithoutLens : 1809,
	ShutterSpeedRange : 268,
	SpotMeterLinkToAFPoint : 263,
	StartMovieShooting : 1805,
	SwitchToRegisteredAFPoint : 1290,
	TimerLength : 2060,
	TrashButtonFunction : 1808,
	Unknown1 : 0,
	Unknown2 : 277,
	Unknown3 : 1280,
	UsableMeteringModes : 266,
	UsableShootingModes : 265,
	USMLensElectronicMF : 1281,
	VFDisplayIllumination : 1309,
	ViewfinderWarnings : 1034,
	ViewInfoDuringExposure : 1031,
	WBMediaImageSizeSetting : 1800,
},
exports.Cr2LightingOptIndex = {
	AutoLightingOptimizer : 2,
	DigitalLensOptimizer : 10,
	HighISONoiseReduction : 5,
	HighlightTonePriority : 3,
	LongExposureNoiseReduction : 4,
	PeripheralIlluminationCorr : 1,
	Unknown1 : 0,
},
exports.Cr2LogInfoIndex = {
	CanonLogVersion : 11,
	ColorMatrix : 10,
	ColorSpace2 : 9,
	ColorTone : 8,
	CompressionFormat : 4,
	Saturation : 7,
	Sharpness : 6,
},
exports.Cr2MakerNoteIndex = {
	AFConfig : 16424,
	AFInfo3 : 60,
	AFMicroAdj : 16403,
	AFPointsInFocus1D : 148,
	AmbienceInfo : 16416,
	AspectInfo : 154,
	BatteryType : 56,
	CameraInfo : 13,
	CameraSettings : 1,
	CanonAFInfo : 18,
	CanonAFInfo2 : 38,
	CanonFileInfo : 147,
	CanonFlags : 176,
	Categories : 35,
	ColorBalance : 169,
	ColorData1 : 16385,
	ColorInfo : 16387,
	ColorSpace : 180,
	ColorTemperature : 174,
	ContrastInfo : 39,
	CropInfo : 152,
	CRWParam : 16386,
	CustomFunctions : 15,
	CustomFunctions1D : 144,
	CustomFunctions2 : 153,
	CustomPictureStyleFileName : 16400,
	DateStampMode : 28,
	DustRemovalData : 151,
	FaceDetect1 : 36,
	FaceDetect2 : 37,
	FaceDetect3 : 47,
	FileLength : 14,
	FileNumber : 8,
	FilterInfo : 16420,
	FirmwareVersion : 7,
	Flavor : 16389,
	FocalLength : 2,
	HDRInfo : 16421,
	ImageType : 6,
	ImageUniqueID : 40,
	LensInfo : 16409,
	LensModel : 149,
	LightingOpt : 16408,
	LogInfo : 16422,
	MeasuredColor : 170,
	ModelID : 16,
	ModifiedInfo : 177,
	MovieInfo : 17,
	MultiExp : 16417,
	MyColors : 29,
	OriginalDecisionDataOffset : 131,
	OwnerName : 9,
	Panorama : 5,
	PersonalFunctions : 145,
	PersonalFunctionValues : 146,
	PictureStylePC : 16393,
	PictureStyleUserDef : 16392,
	PreviewImageInfo : 182,
	ProcessingInfo : 160,
	RawBurstModeRoll : 16447,
	RawDataOffset : 129,
	SensorInfo : 224,
	SerialInfo : 150,
	SerialNumber : 12,
	SerialNumberFormat : 21,
	SharpnessFreqTable : 163,
	SharpnessTable : 162,
	ShotInfo : 4,
	SuperMacro : 26,
	ThumbnailImageValidArea : 19,
	TimeInfo : 53,
	ToneCurveMatching : 178,
	ToneCurveTable : 161,
	VignettingCorr : 16405,
	VignettingCorr2 : 16406,
	VRDOffset : 208,
	WBInfo : 41,
	WhiteBalanceMatching : 179,
	WhiteBalanceTable : 164,
},
exports.Cr2ModifiedInfoIndex = {
	ModifiedColorTemp : 9,
	ModifiedDigitalGain : 11,
	ModifiedPictureStyle : 10,
	ModifiedSensorBlueLevel : 5,
	ModifiedSensorRedLevel : 4,
	ModifiedSharpness : 2,
	ModifiedSharpnessFreq : 3,
	ModifiedToneCurve : 1,
	ModifiedWhiteBalance : 8,
	ModifiedWhiteBalanceBlue : 7,
	ModifiedWhiteBalanceRed : 6,
},
exports.Cr2MovieInfoIndex = {
	AudioBitrate : 108,
	AudioChannels : 112,
	AudioSampleRate : 110,
	Duration : 106,
	FrameCount : 2,
	FrameCount2 : 4,
	FrameRate : 1,
	FrameRate2 : 6,
	VideoCodec : 116,
},
exports.Cr2MultiExpIndex = {
	MultiExposure : 1,
	MultiExposureControl : 2,
	MultiExposureShots : 3,
	Unknown1 : 0,
	Unknown2 : 5,
},
exports.Cr2PanoramaIndex = {
	PanoramaDirection : 5,
	PanoramaFrameNumber : 2,
},
exports.Cr2PersonalFuncsIndex = {
	PF0CustomFuncRegistration : 1,
	PF10RetainProgramShift : 11,
	PF13DrivePriority : 14,
	PF14DisableFocusSearch : 15,
	PF15DisableAFAssistBeam : 16,
	PF16AutoFocusPointShoot : 17,
	PF17DisableAFPointSel : 18,
	PF18EnableAutoAFPointSel : 19,
	PF19ContinuousShootSpeed : 20,
	PF1DisableShootingModes : 2,
	PF20LimitContinousShots : 21,
	PF21EnableQuietOperation : 22,
	PF23SetTimerLengths : 24,
	PF24LightLCDDuringBulb : 25,
	PF25DefaultClearSettings : 26,
	PF26ShortenReleaseLag : 27,
	PF27ReverseDialRotation : 28,
	PF28NoQuickDialExpComp : 29,
	PF29QuickDialSwitchOff : 30,
	PF2DisableMeteringModes : 3,
	PF30EnlargementMode : 31,
	PF31OriginalDecisionData : 32,
	PF3ManualExposureMetering : 4,
	PF4ExposureTimeLimits : 5,
	PF5ApertureLimits : 6,
	PF6PresetShootingModes : 7,
	PF7BracketContinuousShoot : 8,
	PF8SetBracketShots : 9,
	PF9ChangeBracketSequence : 10,
	Unknown1 : 0,
},
exports.Cr2PersonalFuncValuesIndex = {
	PF19ShootingSpeedHigh : 10,
	PF19ShootingSpeedLow : 9,
	PF1Value : 1,
	PF20MaxContinousShots : 11,
	PF23FELockTime : 13,
	PF23PostReleaseTime : 14,
	PF23ShutterButtonTime : 12,
	PF25AEMode : 15,
	PF25AFMode : 18,
	PF25AFPointSel : 19,
	PF25ColorMatrix : 23,
	PF25DriveMode : 17,
	PF25ImageSize : 20,
	PF25MeteringMode : 16,
	PF25Parameters : 22,
	PF25WBMode : 21,
	PF27Value : 24,
	PF2Value : 2,
	PF3Value : 3,
	PF4ExposureTimeMax : 5,
	PF4ExposureTimeMin : 4,
	PF5ApertureMax : 7,
	PF5ApertureMin : 6,
	PF8BracketShots : 8,
	Unknown1 : 0,
},
exports.Cr2ProcessingIndex = {
	ColorTemperature : 9,
	DigitalGain : 11,
	PictureStyle : 10,
	SensorBlueLevel : 5,
	SensorRedLevel : 4,
	Sharpness : 2,
	SharpnessFrequency : 3,
	ToneCurve : 1,
	Unknown1 : 0,
	WBShiftAB : 12,
	WBShiftGM : 13,
	WhiteBalance : 8,
	WhiteBalanceBlue : 7,
	WhiteBalanceRed : 6,
},
exports.Cr2SensorInfoIndex = {
	BlackMaskBottomBorder : 12,
	BlackMaskLeftBorder : 9,
	BlackMaskRightBorder : 11,
	BlackMaskTopBorder : 10,
	SensorBottomBorder : 8,
	SensorHeight : 2,
	SensorLeftBorder : 5,
	SensorRightBorder : 7,
	SensorTopBorder : 6,
	SensorWidth : 1,
	Unknown1 : 0,
	Unknown2 : 3,
	Unknown3 : 4,
},
exports.Cr2ShotInfoIndex = {
	AEBBracketValue : 17,
	AFPointsInFocus : 14,
	AutoExposureBracketing : 16,
	AutoISO : 1,
	AutoRotate : 27,
	BaseISO : 2,
	BulbDuration : 24,
	CameraTemperature : 12,
	CameraType : 26,
	ControlMode : 18,
	ExposureCompensation : 6,
	ExposureTime : 22,
	FlashExposureComp : 15,
	FlashGuideNumber : 13,
	FlashOutput : 33,
	FNumber : 21,
	FocusDistanceLower : 20,
	FocusDistanceUpper : 19,
	MeasuredEV : 3,
	MeasuredEV2 : 23,
	NDFilter : 28,
	OpticalZoomCode : 10,
	SelfTimer2 : 29,
	SequenceNumber : 9,
	SlowShutter : 8,
	TargetAperture : 4,
	TargetExposureTime : 5,
	Unknown1 : 0,
	Unknown2 : 11,
	Unknown3 : 25,
	Unknown4 : 30,
	Unknown5 : 31,
	Unknown6 : 32,
	WhiteBalance : 7,
},
exports.Cr2TimeInfoIndex = {
	DaylightSavings : 3,
	TimeZone : 1,
	TimeZoneCity : 2,
	Unknown1 : 0,
},
exports.Cr2VignettingCorr2Index = {
	ChromaticAberrationSetting : 6,
	DigitalLensOptimizerSetting : 9,
	DistortionCorrectionSetting : 7,
	PeripheralLightingSetting : 5,
},
exports.Cr2WBInfoIndex = {
	Unknown1 : 3,
	Unknown2 : 11,
	Unknown3 : 19,
	Unknown4 : 27,
	Unknown5 : 35,
	Unknown6 : 43,
	Unknown7 : 51,
	Unknown8 : 59,
	Unknown9 : 67,
	WB_GRBGLevelsAuto : 2,
	WB_GRBGLevelsCloudy : 18,
	WB_GRBGLevelsCustom1 : 66,
	WB_GRBGLevelsCustom2 : 74,
	WB_GRBGLevelsDaylight : 10,
	WB_GRBGLevelsFlash : 50,
	WB_GRBGLevelsFluorescent : 34,
	WB_GRBGLevelsFluorHigh : 42,
	WB_GRBGLevelsTungsten : 26,
	WB_GRBGLevelsUnderwater : 58,
},
exports.ExifTagID = {
	ExposureProgram : 34850,
	ExposureTime : 33434,
	FNumber : 33437,
	GPSInfo : 34853,
	ISOSpeedRatings : 34855,
	MakerNoteCanon : 37500,
	SpectralSensitivity : 34852,
},
exports.GpsIfdIndex = {
	GPSAltitude : 6,
	GPSAltitudeRef : 5,
	GPSAreaInformation : 28,
	GPSDateStamp : 29,
	GPSDestBearing : 24,
	GPSDestBearingRef : 23,
	GPSDestDistance : 26,
	GPSDestDistanceRef : 25,
	GPSDestLatitude : 20,
	GPSDestLatitudeRef : 19,
	GPSDestLongitude : 22,
	GPSDestLongitudeRef : 21,
	GPSDifferential : 30,
	GPSDOP : 11,
	GPSHPositioningError : 31,
	GPSImgDirection : 17,
	GPSImgDirectionRef : 16,
	GPSLatitude : 2,
	GPSLatitudeRef : 1,
	GPSLongitude : 4,
	GPSLongitudeRef : 3,
	GPSMapDatum : 18,
	GPSMeasureMode : 10,
	GPSProcessingMethod : 27,
	GPSSatellites : 8,
	GPSSpeed : 13,
	GPSSpeedRef : 12,
	GPSStatus : 9,
	GPSTimeStamp : 7,
	GPSTrack : 15,
	GPSTrackRef : 14,
	GPSVersionID : 0,
},
exports.InteroperabilityIFDPointerIndex = {
	TagInteropIndex : 1,
	TagInteropVersion : 2,
},
exports.RawExifIndex = {
	Acceleration : 37892,
	ApertureValue : 37378,
	BodySerialNumber : 42033,
	BrightnessValue : 37379,
	CameraElevationAngle : 37893,
	CameraOwnerName : 42032,
	CFAPattern : 41730,
	ColorSpace : 40961,
	ComponentsConfiguration : 37121,
	CompositeImage : 42080,
	Contrast : 41992,
	CustomRendered : 41985,
	DateTimeDigitized : 36868,
	DateTimeOriginal : 36867,
	DeviceSettingDescription : 41995,
	DigitalZoomRatio : 41988,
	ExifVersion : 36864,
	ExposureBiasValue : 37380,
	ExposureIndex : 41493,
	ExposureMode : 41986,
	ExposureProgram : 34850,
	ExposureTime : 33434,
	FileSource : 41728,
	Flash : 37385,
	FlashEnergy : 41483,
	FlashpixVersion : 40960,
	FNumber : 33437,
	FocalLength : 37386,
	FocalLengthIn35mmFilm : 41989,
	FocalPlaneResolutionUnit : 41488,
	FocalPlaneXResolution : 41486,
	FocalPlaneYResolution : 41487,
	GainControl : 41991,
	Gamma : 42240,
	Humidity : 37889,
	ImageUniqueID : 42016,
	InteroperabilityIFDPointer : 40965,
	ISOSpeed : 34867,
	ISOSpeedLatitudeyyy : 34868,
	ISOSpeedLatitudezzz : 34869,
	LensMake : 42035,
	LensModel : 42036,
	LensSerialNumber : 42037,
	LensSpecification : 42034,
	LightSource : 37384,
	MakerNote : 37500,
	MaxApertureValue : 37381,
	MeteringMode : 37383,
	OECF : 34856,
	OffsetTime : 36880,
	OffsetTimeDigitized : 36882,
	OffsetTimeOriginal : 36881,
	PhotographicSensitivity : 34855,
	PixelXDimension : 40962,
	PixelYDimension : 40963,
	Pressure : 37890,
	RecommendedExposureIndex : 34866,
	RelatedSoundFile : 40964,
	Saturation : 41993,
	SceneCaptureType : 41990,
	SceneType : 41729,
	SensingMethod : 41495,
	SensitivityType : 34864,
	Sharpness : 41994,
	ShutterSpeedValue : 37377,
	SourceExposureTimesOfCompositeImage : 42082,
	SourceImageNumberOfCompositeImage : 42081,
	SpatialFrequencyResponse : 41484,
	SpectralSensitivity : 34852,
	StandardOutputSensitivity : 34865,
	SubjectArea : 37396,
	SubjectDistance : 37382,
	SubjectDistanceRange : 41996,
	SubjectLocation : 41492,
	SubSecTime : 37520,
	SubSecTimeDigitized : 37522,
	SubSecTimeOriginal : 37521,
	Temperature : 37888,
	UserComment : 37510,
	WaterDepth : 37891,
	WhiteBalance : 41987,
},
exports.RawTagType = {
	Ascii : 2,
	Byte : 1,
	Double : 12,
	Float : 11,
	Long : 4,
	Rational : 5,
	SByte : 6,
	Short : 3,
	SLong : 9,
	SRational : 10,
	SShort : 8,
	SubIfd : 13,
	Undefined : 7,
},

exports.Metadata = java.import("com.groupdocs.metadata.Metadata");
exports.AviHeader = java.import("com.groupdocs.metadata.core.AviHeader");
//exports.Cmyk = java.import("com.groupdocs.metadata.core.Cmyk");
//exports.Container = java.import("com.groupdocs.metadata.core.Container");
//exports.Context = java.import("com.groupdocs.metadata.core.Context");
exports.Cr2AFConfigPackage = java.import("com.groupdocs.metadata.core.Cr2AFConfigPackage");
exports.Cr2AFInfo2Package = java.import("com.groupdocs.metadata.core.Cr2AFInfo2Package");
exports.Cr2AFInfoPackage = java.import("com.groupdocs.metadata.core.Cr2AFInfoPackage");
exports.Cr2AFMicroAdjPackage = java.import("com.groupdocs.metadata.core.Cr2AFMicroAdjPackage");
exports.Cr2AspectInfoPackage = java.import("com.groupdocs.metadata.core.Cr2AspectInfoPackage");
exports.Cr2CameraSettingsPackage = java.import("com.groupdocs.metadata.core.Cr2CameraSettingsPackage");
exports.Cr2ColorBalancePackage = java.import("com.groupdocs.metadata.core.Cr2ColorBalancePackage");
exports.Cr2ColorInfoPackage = java.import("com.groupdocs.metadata.core.Cr2ColorInfoPackage");
exports.Cr2CropInfoPackage = java.import("com.groupdocs.metadata.core.Cr2CropInfoPackage");
exports.Cr2FileInfoPackage = java.import("com.groupdocs.metadata.core.Cr2FileInfoPackage");
exports.Cr2FocalLengthPackage = java.import("com.groupdocs.metadata.core.Cr2FocalLengthPackage");
exports.Cr2Functions1DPackage = java.import("com.groupdocs.metadata.core.Cr2Functions1DPackage");
exports.Cr2LightingOptPackage = java.import("com.groupdocs.metadata.core.Cr2LightingOptPackage");
exports.Cr2LogInfoPackage = java.import("com.groupdocs.metadata.core.Cr2LogInfoPackage");
exports.Cr2MakerNotePackage = java.import("com.groupdocs.metadata.core.Cr2MakerNotePackage");
exports.Cr2ModifiedInfoPackage = java.import("com.groupdocs.metadata.core.Cr2ModifiedInfoPackage");
exports.Cr2MovieInfoPackage = java.import("com.groupdocs.metadata.core.Cr2MovieInfoPackage");
exports.Cr2MultiExpPackage = java.import("com.groupdocs.metadata.core.Cr2MultiExpPackage");
exports.Cr2PanoramaPackage = java.import("com.groupdocs.metadata.core.Cr2PanoramaPackage");
exports.Cr2PersonalFuncsPackage = java.import("com.groupdocs.metadata.core.Cr2PersonalFuncsPackage");
exports.Cr2PersonalFuncValuesPackage = java.import("com.groupdocs.metadata.core.Cr2PersonalFuncValuesPackage");
exports.Cr2ProcessingPackage = java.import("com.groupdocs.metadata.core.Cr2ProcessingPackage");
exports.Cr2SensorInfoPackage = java.import("com.groupdocs.metadata.core.Cr2SensorInfoPackage");
exports.Cr2ShotInfoPackage = java.import("com.groupdocs.metadata.core.Cr2ShotInfoPackage");
exports.Cr2TimeInfoPackage = java.import("com.groupdocs.metadata.core.Cr2TimeInfoPackage");
exports.Cr2VignettingCorr2Package = java.import("com.groupdocs.metadata.core.Cr2VignettingCorr2Package");
exports.Cr2WBInfoPackage = java.import("com.groupdocs.metadata.core.Cr2WBInfoPackage");
exports.DicomPackage = java.import("com.groupdocs.metadata.core.DicomPackage");
exports.DngPackage = java.import("com.groupdocs.metadata.core.DngPackage");
exports.DocumentProtectedException = java.import("com.groupdocs.metadata.core.DocumentProtectedException");
exports.DocumentStatistics = java.import("com.groupdocs.metadata.core.DocumentStatistics");
exports.ExifGpsPackage = java.import("com.groupdocs.metadata.core.ExifGpsPackage");
exports.ExifPackage = java.import("com.groupdocs.metadata.core.ExifPackage");
exports.GroupDocsException = java.import("com.groupdocs.metadata.core.GroupDocsException");
exports.GroupDocsMetadataException = java.import("com.groupdocs.metadata.core.GroupDocsMetadataException");
exports.ID3V1Tag = java.import("com.groupdocs.metadata.core.ID3V1Tag");
exports.ID3V2AttachedPictureFrame = java.import("com.groupdocs.metadata.core.ID3V2AttachedPictureFrame");
exports.ID3V2CommentFrame = java.import("com.groupdocs.metadata.core.ID3V2CommentFrame");
exports.ID3V2PrivateFrame = java.import("com.groupdocs.metadata.core.ID3V2PrivateFrame");
exports.ID3V2Tag = java.import("com.groupdocs.metadata.core.ID3V2Tag");
exports.ID3V2TagFrame = java.import("com.groupdocs.metadata.core.ID3V2TagFrame");
exports.ID3V2TextFrame = java.import("com.groupdocs.metadata.core.ID3V2TextFrame");
exports.ID3V2UrlLinkFrame = java.import("com.groupdocs.metadata.core.ID3V2UrlLinkFrame");
exports.ID3V2UserDefinedFrame = java.import("com.groupdocs.metadata.core.ID3V2UserDefinedFrame");
exports.ID3V2UserDefinedUrlLinkFrame = java.import("com.groupdocs.metadata.core.ID3V2UserDefinedUrlLinkFrame");
exports.InvalidFormatException = java.import("com.groupdocs.metadata.core.InvalidFormatException");
exports.IptcApplicationRecord = java.import("com.groupdocs.metadata.core.IptcApplicationRecord");
exports.IptcDataSet = java.import("com.groupdocs.metadata.core.IptcDataSet");
exports.IptcEnvelopeRecord = java.import("com.groupdocs.metadata.core.IptcEnvelopeRecord");
exports.IptcRecordSet = java.import("com.groupdocs.metadata.core.IptcRecordSet");
//exports.Lab = java.import("com.groupdocs.metadata.core.Lab");
exports.LyricsField = java.import("com.groupdocs.metadata.core.LyricsField");
exports.LyricsTag = java.import("com.groupdocs.metadata.core.LyricsTag");
exports.MpegAudioPackage = java.import("com.groupdocs.metadata.core.MpegAudioPackage");
exports.NikonMakerNotePackage = java.import("com.groupdocs.metadata.core.NikonMakerNotePackage");
//exports.Paths = java.import("com.groupdocs.metadata.core.Paths");
exports.PleaseReportException = java.import("com.groupdocs.metadata.core.PleaseReportException");
exports.PropertyValue = java.import("com.groupdocs.metadata.core.PropertyValue");
exports.RawAsciiTag = java.import("com.groupdocs.metadata.core.RawAsciiTag");
exports.RawByteTag = java.import("com.groupdocs.metadata.core.RawByteTag");
exports.RawDoubleTag = java.import("com.groupdocs.metadata.core.RawDoubleTag");
exports.RawFloatTag = java.import("com.groupdocs.metadata.core.RawFloatTag");
exports.RawLongTag = java.import("com.groupdocs.metadata.core.RawLongTag");
exports.RawRational = java.import("com.groupdocs.metadata.core.RawRational");
exports.RawRationalTag = java.import("com.groupdocs.metadata.core.RawRationalTag");
exports.RawSByteTag = java.import("com.groupdocs.metadata.core.RawSByteTag");
exports.RawShortTag = java.import("com.groupdocs.metadata.core.RawShortTag");
exports.RawSLongTag = java.import("com.groupdocs.metadata.core.RawSLongTag");
exports.RawSRational = java.import("com.groupdocs.metadata.core.RawSRational");
exports.RawSRationalTag = java.import("com.groupdocs.metadata.core.RawSRationalTag");
exports.RawSShortTag = java.import("com.groupdocs.metadata.core.RawSShortTag");
exports.RawUndefinedTag = java.import("com.groupdocs.metadata.core.RawUndefinedTag");
exports.Rectangle = java.import("com.groupdocs.metadata.core.Rectangle");
//exports.Rgb = java.import("com.groupdocs.metadata.core.Rgb");
exports.TiffAsciiTag = java.import("com.groupdocs.metadata.core.TiffAsciiTag");
exports.TiffByteTag = java.import("com.groupdocs.metadata.core.TiffByteTag");
exports.TiffDoubleTag = java.import("com.groupdocs.metadata.core.TiffDoubleTag");
exports.TiffFloatTag = java.import("com.groupdocs.metadata.core.TiffFloatTag");
exports.TiffLongTag = java.import("com.groupdocs.metadata.core.TiffLongTag");
exports.TiffRational = java.import("com.groupdocs.metadata.core.TiffRational");
exports.TiffRationalTag = java.import("com.groupdocs.metadata.core.TiffRationalTag");
exports.TiffSByteTag = java.import("com.groupdocs.metadata.core.TiffSByteTag");
exports.TiffShortTag = java.import("com.groupdocs.metadata.core.TiffShortTag");
exports.TiffSLongTag = java.import("com.groupdocs.metadata.core.TiffSLongTag");
exports.TiffSRational = java.import("com.groupdocs.metadata.core.TiffSRational");
exports.TiffSRationalTag = java.import("com.groupdocs.metadata.core.TiffSRationalTag");
exports.TiffSShortTag = java.import("com.groupdocs.metadata.core.TiffSShortTag");
exports.TiffUndefinedTag = java.import("com.groupdocs.metadata.core.TiffUndefinedTag");
exports.WavPackage = java.import("com.groupdocs.metadata.core.WavPackage");
exports.XmpArray = java.import("com.groupdocs.metadata.core.XmpArray");
exports.XmpBasicJobTicketPackage = java.import("com.groupdocs.metadata.core.XmpBasicJobTicketPackage");
exports.XmpBasicPackage = java.import("com.groupdocs.metadata.core.XmpBasicPackage");
exports.XmpBoolean = java.import("com.groupdocs.metadata.core.XmpBoolean");
exports.XmpCameraRawPackage = java.import("com.groupdocs.metadata.core.XmpCameraRawPackage");
exports.XmpColorantCmyk = java.import("com.groupdocs.metadata.core.XmpColorantCmyk");
exports.XmpColorantLab = java.import("com.groupdocs.metadata.core.XmpColorantLab");
exports.XmpColorantRgb = java.import("com.groupdocs.metadata.core.XmpColorantRgb");
exports.XmpDate = java.import("com.groupdocs.metadata.core.XmpDate");
exports.XmpDimensions = java.import("com.groupdocs.metadata.core.XmpDimensions");
exports.XmpDublinCorePackage = java.import("com.groupdocs.metadata.core.XmpDublinCorePackage");
exports.XmpDynamicMediaPackage = java.import("com.groupdocs.metadata.core.XmpDynamicMediaPackage");
exports.XmpException = java.import("com.groupdocs.metadata.core.XmpException");
exports.XmpFont = java.import("com.groupdocs.metadata.core.XmpFont");
exports.XmpGuid = java.import("com.groupdocs.metadata.core.XmpGuid");
exports.XmpHeaderPI = java.import("com.groupdocs.metadata.core.XmpHeaderPI");
exports.XmpInteger = java.import("com.groupdocs.metadata.core.XmpInteger");
exports.XmpIptcCorePackage = java.import("com.groupdocs.metadata.core.XmpIptcCorePackage");
exports.XmpIptcExtensionPackage = java.import("com.groupdocs.metadata.core.XmpIptcExtensionPackage");
exports.XmpIptcIimPackage = java.import("com.groupdocs.metadata.core.XmpIptcIimPackage");
exports.XmpJob = java.import("com.groupdocs.metadata.core.XmpJob");
exports.XmpLangAlt = java.import("com.groupdocs.metadata.core.XmpLangAlt");
exports.XmpMediaManagementPackage = java.import("com.groupdocs.metadata.core.XmpMediaManagementPackage");
exports.XmpMeta = java.import("com.groupdocs.metadata.core.XmpMeta");
exports.XmpNamespaces = java.import("com.groupdocs.metadata.core.XmpNamespaces");
exports.XmpPackage = java.import("com.groupdocs.metadata.core.XmpPackage");
exports.XmpPacketWrapper = java.import("com.groupdocs.metadata.core.XmpPacketWrapper");
exports.XmpPagedTextPackage = java.import("com.groupdocs.metadata.core.XmpPagedTextPackage");
exports.XmpPdfPackage = java.import("com.groupdocs.metadata.core.XmpPdfPackage");
exports.XmpPhotoshopPackage = java.import("com.groupdocs.metadata.core.XmpPhotoshopPackage");
exports.XmpRational = java.import("com.groupdocs.metadata.core.XmpRational");
exports.XmpReal = java.import("com.groupdocs.metadata.core.XmpReal");
exports.XmpRenditionClass = java.import("com.groupdocs.metadata.core.XmpRenditionClass");
exports.XmpResourceEvent = java.import("com.groupdocs.metadata.core.XmpResourceEvent");
exports.XmpResourceRef = java.import("com.groupdocs.metadata.core.XmpResourceRef");
exports.XmpRightsManagementPackage = java.import("com.groupdocs.metadata.core.XmpRightsManagementPackage");
exports.XmpText = java.import("com.groupdocs.metadata.core.XmpText");
exports.XmpThumbnail = java.import("com.groupdocs.metadata.core.XmpThumbnail");
exports.XmpTime = java.import("com.groupdocs.metadata.core.XmpTime");
exports.XmpTimecode = java.import("com.groupdocs.metadata.core.XmpTimecode");
exports.XmpTrailerPI = java.import("com.groupdocs.metadata.core.XmpTrailerPI");
exports.XmpVersion = java.import("com.groupdocs.metadata.core.XmpVersion");
exports.ExportManager = java.import("com.groupdocs.metadata.export.ExportManager");
exports.License = java.import("com.groupdocs.metadata.licensing.License");
exports.Metered = java.import("com.groupdocs.metadata.licensing.Metered");
exports.LoadOptions = java.import("com.groupdocs.metadata.options.LoadOptions");
exports.PreviewOptions = java.import("com.groupdocs.metadata.options.PreviewOptions");
exports.AnySpecification = java.import("com.groupdocs.metadata.search.AnySpecification");
exports.ContainsTagSpecification = java.import("com.groupdocs.metadata.search.ContainsTagSpecification");
exports.FallsIntoCategorySpecification = java.import("com.groupdocs.metadata.search.FallsIntoCategorySpecification");
exports.OfTypeSpecification = java.import("com.groupdocs.metadata.search.OfTypeSpecification");
exports.WithNameSpecification = java.import("com.groupdocs.metadata.search.WithNameSpecification");
exports.Tags = java.import("com.groupdocs.metadata.tagging.Tags");

exports.AsfCodecType = java.import("com.groupdocs.metadata.core.AsfCodecType");
exports.AsfDescriptorType = java.import("com.groupdocs.metadata.core.AsfDescriptorType");
exports.AsfExtendedStreamPropertyFlags = java.import("com.groupdocs.metadata.core.AsfExtendedStreamPropertyFlags");
exports.AsfFilePropertyFlags = java.import("com.groupdocs.metadata.core.AsfFilePropertyFlags");
exports.AsfStreamType = java.import("com.groupdocs.metadata.core.AsfStreamType");
exports.AviHeaderFlags = java.import("com.groupdocs.metadata.core.AviHeaderFlags");
exports.ByteOrder = java.import("com.groupdocs.metadata.core.ByteOrder");
exports.CadAcadVersion = java.import("com.groupdocs.metadata.core.CadAcadVersion");
exports.DiagramFormat = java.import("com.groupdocs.metadata.core.DiagramFormat");
//exports.DigestAlgorithm = java.import("com.groupdocs.metadata.core.DigestAlgorithm");
exports.ExifGpsAltitudeRef = java.import("com.groupdocs.metadata.core.ExifGpsAltitudeRef");
exports.FileFormat = java.import("com.groupdocs.metadata.core.FileFormat");
exports.FileType = java.import("com.groupdocs.metadata.core.FileType");
exports.ID3V1Genre = java.import("com.groupdocs.metadata.core.ID3V1Genre");
exports.ID3V2AttachedPictureType = java.import("com.groupdocs.metadata.core.ID3V2AttachedPictureType");
exports.ID3V2EncodingType = java.import("com.groupdocs.metadata.core.ID3V2EncodingType");
exports.ImageResourceID = java.import("com.groupdocs.metadata.core.ImageResourceID");
exports.IptcApplicationRecordDataSet = java.import("com.groupdocs.metadata.core.IptcApplicationRecordDataSet");
exports.IptcEnvelopeRecordDataSet = java.import("com.groupdocs.metadata.core.IptcEnvelopeRecordDataSet");
exports.IptcRecordType = java.import("com.groupdocs.metadata.core.IptcRecordType");
exports.MatroskaContentType = java.import("com.groupdocs.metadata.core.MatroskaContentType");
exports.MatroskaTargetTypeValue = java.import("com.groupdocs.metadata.core.MatroskaTargetTypeValue");
exports.MatroskaTrackType = java.import("com.groupdocs.metadata.core.MatroskaTrackType");
exports.MatroskaVideoDisplayUnit = java.import("com.groupdocs.metadata.core.MatroskaVideoDisplayUnit");
exports.MatroskaVideoFieldOrder = java.import("com.groupdocs.metadata.core.MatroskaVideoFieldOrder");
exports.MatroskaVideoFlagInterlaced = java.import("com.groupdocs.metadata.core.MatroskaVideoFlagInterlaced");
exports.MatroskaVideoStereoMode = java.import("com.groupdocs.metadata.core.MatroskaVideoStereoMode");
exports.MetadataPropertyType = java.import("com.groupdocs.metadata.core.MetadataPropertyType");
exports.MetadataType = java.import("com.groupdocs.metadata.core.MetadataType");
exports.MpegAudioVersion = java.import("com.groupdocs.metadata.core.MpegAudioVersion");
exports.MpegChannelMode = java.import("com.groupdocs.metadata.core.MpegChannelMode");
exports.MpegEmphasis = java.import("com.groupdocs.metadata.core.MpegEmphasis");
exports.OpenTypeDigitalSignatureFlags = java.import("com.groupdocs.metadata.core.OpenTypeDigitalSignatureFlags");
exports.OpenTypeDirectionHint = java.import("com.groupdocs.metadata.core.OpenTypeDirectionHint");
exports.OpenTypeFlags = java.import("com.groupdocs.metadata.core.OpenTypeFlags");
exports.OpenTypeIsoEncoding = java.import("com.groupdocs.metadata.core.OpenTypeIsoEncoding");
exports.OpenTypeLicensingRights = java.import("com.groupdocs.metadata.core.OpenTypeLicensingRights");
exports.OpenTypeMacintoshEncoding = java.import("com.groupdocs.metadata.core.OpenTypeMacintoshEncoding");
exports.OpenTypeMacintoshLanguage = java.import("com.groupdocs.metadata.core.OpenTypeMacintoshLanguage");
exports.OpenTypeName = java.import("com.groupdocs.metadata.core.OpenTypeName");
exports.OpenTypePlatform = java.import("com.groupdocs.metadata.core.OpenTypePlatform");
exports.OpenTypeStyles = java.import("com.groupdocs.metadata.core.OpenTypeStyles");
exports.OpenTypeUnicodeEncoding = java.import("com.groupdocs.metadata.core.OpenTypeUnicodeEncoding");
exports.OpenTypeVersion = java.import("com.groupdocs.metadata.core.OpenTypeVersion");
exports.OpenTypeWeight = java.import("com.groupdocs.metadata.core.OpenTypeWeight");
exports.OpenTypeWidth = java.import("com.groupdocs.metadata.core.OpenTypeWidth");
exports.OpenTypeWindowsEncoding = java.import("com.groupdocs.metadata.core.OpenTypeWindowsEncoding");
exports.OpenTypeWindowsLanguage = java.import("com.groupdocs.metadata.core.OpenTypeWindowsLanguage");
exports.PngCompressionMethod = java.import("com.groupdocs.metadata.core.PngCompressionMethod");
//exports.PreferredConversionType = java.import("com.groupdocs.metadata.core.PreferredConversionType");
exports.PresentationFormat = java.import("com.groupdocs.metadata.core.PresentationFormat");
exports.PropertyAccessLevels = java.import("com.groupdocs.metadata.core.PropertyAccessLevels");
exports.PsdColorMode = java.import("com.groupdocs.metadata.core.PsdColorMode");
exports.PsdCompressionMethod = java.import("com.groupdocs.metadata.core.PsdCompressionMethod");
exports.PsdLayerFlags = java.import("com.groupdocs.metadata.core.PsdLayerFlags");
exports.RawIntegerType = java.import("com.groupdocs.metadata.core.RawIntegerType");
exports.SpreadsheetFormat = java.import("com.groupdocs.metadata.core.SpreadsheetFormat");
exports.TiffTagID = java.import("com.groupdocs.metadata.core.TiffTagID");
exports.TiffTagType = java.import("com.groupdocs.metadata.core.TiffTagType");
exports.VCardContentType = java.import("com.groupdocs.metadata.core.VCardContentType");
exports.WordProcessingFormat = java.import("com.groupdocs.metadata.core.WordProcessingFormat");
exports.WordProcessingRevisionType = java.import("com.groupdocs.metadata.core.WordProcessingRevisionType");
exports.XmpArrayType = java.import("com.groupdocs.metadata.core.XmpArrayType");
exports.XmpAudioChannelType = java.import("com.groupdocs.metadata.core.XmpAudioChannelType");
exports.XmpAudioSampleType = java.import("com.groupdocs.metadata.core.XmpAudioSampleType");
exports.XmpColorantColorMode = java.import("com.groupdocs.metadata.core.XmpColorantColorMode");
exports.XmpColorType = java.import("com.groupdocs.metadata.core.XmpColorType");
exports.XmpCropUnit = java.import("com.groupdocs.metadata.core.XmpCropUnit");
exports.XmpPhotoshopColorMode = java.import("com.groupdocs.metadata.core.XmpPhotoshopColorMode");
exports.XmpTimeFormat = java.import("com.groupdocs.metadata.core.XmpTimeFormat");
exports.XmpWhiteBalance = java.import("com.groupdocs.metadata.core.XmpWhiteBalance");
exports.ZipCompressionMethod = java.import("com.groupdocs.metadata.core.ZipCompressionMethod");
exports.ExportFormat = java.import("com.groupdocs.metadata.export.ExportFormat");
//exports.PreviewFormats = java.import("com.groupdocs.metadata.options.PreviewFormats");
exports.PropertyTag = java.import("com.groupdocs.metadata.tagging.PropertyTag");


exports.StreamBuffer = class StreamBuffer {
  constructor() {
    const self = java.newInstanceSync('com.groupdocs.metadata.contracts.StreamBuffer')

    self.write = function (chunk) {
      const array = Array.from(chunk)
      const javaArray = java.newArray('byte', array)
      self.__proto__.write.call(self, javaArray, 0, javaArray.length)
    }
    return self
  }
}

/** STREAM METHODS * */
exports.License.setLicenseFromStream = function (license, licenseStream, callback) {
  const inputStreamBuffer = new exports.StreamBuffer()
  licenseStream.on('data', chunk => {
    inputStreamBuffer.write(chunk)
  })
  licenseStream.on('end', () => {
    let error
    try {
      license.setLicense(inputStreamBuffer.toInputStream())
    } catch (err) {
      error = err
    }
    callback(error)
  })
}
