export default {
	expo: {
		name: "YouFace",
		slug: "YouFace",
		scheme: "youface",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/images/icon.png",
		userInterfaceStyle: "automatic",
		experiments: {
			typedRoutes: true,
		},
		splash: {
			image: "./assets/images/splash.png",
			resizeMode: "contain",
			backgroundColor: "#44a359",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
			bundleIdentifier: "ng.mychange.youface",
			config: {
				usesNonExemptEncryption: false,
			},
			infoPlist: {
				NSLocationWhenInUseUsageDescription: "This app uses your location to show relevant content.",
				NSCameraUsageDescription: "Allow $(PRODUCT_NAME) to access camera.",
				NSPhotoLibraryUsageDescription: "Allow $(PRODUCT_NAME) to access your photo library.",
				NSMicrophoneUsageDescription: "Allow $(PRODUCT_NAME) to access your microphone",
				NSUserNotificationsUsageDescription: "Allow this app to send you notifications.",
			},
		},
		android: {
			package: "ng.mychange.youface",
			adaptiveIcon: {
				foregroundImage: "./assets/images/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
			permissions: ["android.permission.CAMERA", "android.permission.RECORD_AUDIO"],
			config: {
				googleMaps: {
					apiKey: process.env.GOOGLE_MAPS_API_KEY,
				},
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		updates: {
		},
		extra: {
			router: {
				origin: false,
			},
			eas: {
			},
		},
		runtimeVersion: {
			policy: "sdkVersion",
		},
		plugins: [
			"expo-router",
			[
				"expo-camera",
				{
					cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
					microphonePermission: "Allow $(PRODUCT_NAME) to access your microphone",
					recordAudioAndroid: true,
				},
			],
			[
				"expo-barcode-scanner",
				{
					cameraPermission: "Allow $(PRODUCT_NAME) to access camera.",
				},
			],
			[
				"expo-image-picker",
				{
					photosPermission: "The app accesses your photos to use for ID verification.",
					cameraPermission: "The app accesses your camera to take a photo for ID verification.",
				},
			],
			[
				"expo-font",
				{
					fonts: [
						"./assets/fonts/PPMori-Regular.otf",
						"./assets/fonts/PPMori-SemiBold.otf",
						"./assets/fonts/BasisGrotesqueArabicPro-Medium.ttf",
						"./assets/fonts/BasisGrotesqueArabicPro-Regular.ttf",
					],
				},
			],
			"expo-secure-store",
			[
				"react-native-vision-camera",
				{
					cameraPermissionText: "$(PRODUCT_NAME) needs access to your Camera.",
				},
			],
			[
				"expo-build-properties",
				{
					android: {
						minSdkVersion: 26,
					},
					ios: {
						deploymentTarget: "15.1",
					},
				},
			],
		],
	},
}
