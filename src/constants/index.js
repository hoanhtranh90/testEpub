export const primaryColor = '#0f2439';
export const elevatedBG = '#F7F8FB';
export const contrastColor = '#000000';

export const translateUrl = (sl, tl, q) =>
	`https://translate.google.com/#view=home&op=translate&sl=${sl}&tl=${tl}&text=${encodeURIComponent(
		q
	)}`;

export const languages = [
	{ label: 'Afrikaans', value: 'af' },
	{ label: 'Albanian', value: 'sq' },
	{ label: 'Amharic', value: 'am' },
	{ label: 'Arabic', value: 'ar' },
	{ label: 'Armenian', value: 'hy' },
	{ label: 'Azerbaijani', value: 'az' },
	{ label: 'Basque', value: 'eu' },
	{ label: 'Belarusian', value: 'be' },
	{ label: 'Bengali', value: 'bn' },
	{ label: 'Bosnian', value: 'bs' },
	{ label: 'Bulgarian', value: 'bg' },
	{ label: 'Catalan', value: 'ca' },
	{ label: 'Cebuano', value: 'ceb' },
	{ label: 'Chinese', value: 'zh-CN', bcp: 'zh-CN' },
	{ label: 'Chinese (Taiwan)', value: 'zh-TW', bcp: 'zh-TW' },
	{ label: 'Corsican', value: 'co' },
	{ label: 'Croatian', value: 'hr' },
	{ label: 'Czech', value: 'cs', bcp: 'cs-CZ' },
	{ label: 'Danish', value: 'da', bcp: 'da-DK' },
	{ label: 'Dutch', value: 'nl', bcp: 'nl-NL' },
	{ label: 'English', value: 'en', bcp: 'en-US' },
	{ label: 'Esperanto', value: 'eo' },
	{ label: 'Estonian', value: 'et', bcp: 'et-EE' },
	{ label: 'Finnish', value: 'fi', bcp: 'fi-FI' },
	{ label: 'French', value: 'fr', bcp: 'fr-FR' },
	{ label: 'Frisian', value: 'fy' },
	{ label: 'Galician', value: 'gl' },
	{ label: 'Georgian', value: 'ka' },
	{ label: 'German', value: 'de', bcp: 'de-DE' },
	{ label: 'Greek', value: 'el', bcp: 'el-GR' },
	{ label: 'Gujarati', value: 'gu' },
	{ label: 'Haitian Creole', value: 'ht' },
	{ label: 'Hausa', value: 'ha' },
	{ label: 'Hawaiian', value: 'haw' },
	{ label: 'Hebrew', value: 'iw' },
	{ label: 'Hindi', value: 'hi', bcp: 'hi-IN' },
	{ label: 'Hmong', value: 'hmn' },
	{ label: 'Hungarian', value: 'hu', bcp: 'hu-HU' },
	{ label: 'Icelandic', value: 'is' },
	{ label: 'Igbo', value: 'ig' },
	{ label: 'Indonesian', value: 'id', bcp: 'id-ID' },
	{ label: 'Irish', value: 'ga' },
	{ label: 'Italian', value: 'it', bcp: 'it-IT' },
	{ label: 'Japanese', value: 'ja', bcp: 'ja-JP' },
	{ label: 'Javanese', value: 'jv' },
	{ label: 'Kannada', value: 'kn' },
	{ label: 'Kazakh', value: 'kk' },
	{ label: 'Khmer', value: 'km' },
	{ label: 'Kinyarwanda', value: 'rw' },
	{ label: 'Korean', value: 'ko', bcp: 'ko-KR' },
	{ label: 'Kurdish', value: 'ku' },
	{ label: 'Kyrgyz', value: 'ky' },
	{ label: 'Lao', value: 'lo' },
	{ label: 'Latin', value: 'la' },
	{ label: 'Latvian', value: 'lv' },
	{ label: 'Lithuanian', value: 'lt' },
	{ label: 'Luxembourgish', value: 'lb' },
	{ label: 'Macedonian', value: 'mk' },
	{ label: 'Malagasy', value: 'mg' },
	{ label: 'Malay', value: 'ms' },
	{ label: 'Malayalam', value: 'ml' },
	{ label: 'Maltese', value: 'mt' },
	{ label: 'Maori', value: 'mi' },
	{ label: 'Marathi', value: 'mr' },
	{ label: 'Mongolian', value: 'mn' },
	{ label: 'Myanmar (Burmese)', value: 'my' },
	{ label: 'Nepali', value: 'ne' },
	{ label: 'Norwegian', value: 'no', bcp: 'no-NO' },
	{ label: 'Odia (Oriya)', value: 'or' },
	{ label: 'Pashto', value: 'ps' },
	{ label: 'Persian', value: 'fa' },
	{ label: 'Polish', value: 'pl', bcp: 'pl-PL' },
	{ label: 'Portuguese', value: 'pt', bcp: 'pt-PT' },
	{ label: 'Punjabi', value: 'pa' },
	{ label: 'Romanian', value: 'ro', bcp: 'ro-RO' },
	{ label: 'Russian', value: 'ru', bcp: 'ru-RU' },
	{ label: 'Samoan', value: 'sm' },
	{ label: 'Scots Gaelic', value: 'gd' },
	{ label: 'Serbian', value: 'sr' },
	{ label: 'Sesotho', value: 'st' },
	{ label: 'Shona', value: 'sn' },
	{ label: 'Sindhi', value: 'sd' },
	{ label: 'Sinhalese', value: 'si' },
	{ label: 'Slovak', value: 'sk', bcp: 'sk-SK' },
	{ label: 'Slovenian', value: 'sl' },
	{ label: 'Somali', value: 'so' },
	{ label: 'Spanish', value: 'es', bcp: 'es-ES' },
	{ label: 'Sundanese', value: 'su' },
	{ label: 'Swahili', value: 'sw' },
	{ label: 'Swedish', value: 'sv', bcp: 'sv-SE' },
	{ label: 'Tagalog', value: 'tl' },
	{ label: 'Tajik', value: 'tg' },
	{ label: 'Tamil', value: 'ta' },
	{ label: 'Tatar', value: 'tt' },
	{ label: 'Telugu', value: 'te' },
	{ label: 'Thai', value: 'th', bcp: 'th-TH' },
	{ label: 'Turkish', value: 'tr', bcp: 'tr-TR' },
	{ label: 'Turkmen', value: 'tk' },
	{ label: 'Ukrainian', value: 'uk', bcp: 'uk-UA' },
	{ label: 'Urdu', value: 'ur' },
	{ label: 'Uyghur', value: 'ug' },
	{ label: 'Uzbek', value: 'uz' },
	{ label: 'Vietnamese', value: 'vi', bcp: 'vi-VN' },
	{ label: 'Welsh', value: 'cy' },
	{ label: 'Xhosa', value: 'xh' },
	{ label: 'Yiddish', value: 'yi' },
	{ label: 'Yoruba', value: 'yo' },
	{ label: 'Zulu', value: 'zu' }
];

export const settings = [
	{
		id: 'bg',
		text: 'Theme',
		title: 'Choose theme',
		items: [
			{ label: 'Light', value: '#fafafa' },
			{ label: 'Dark', value: '#121212' },
			{ label: 'Classic', value: '#f8f1e3' },
			{ label: 'Silver', value: '#bebebe' },
			{ label: 'Grey', value: '#5a5a5c' }
		]
	},
	// {
	// 	id: 'sLang',
	// 	text: 'Source Language',
	// 	title: 'Choose source language',
	// 	items: languages
	// },
	// {
	// 	id: 'tLang',
	// 	text: 'Target Language',
	// 	title: 'Choose target language',
	// 	items: languages
	// },
	{
		id: 'size',
		text: 'Font Size',
		title: 'Choose font size',
		items: [
			{ label: '15', value: '15px' },
			{ label: '16', value: '16px' },
			{ label: '17', value: '17px' },
			{ label: '18', value: '18px' },
			{ label: '19', value: '19px' },
			{ label: '20', value: '20px' },
			{ label: '21', value: '21px' },
			{ label: '22', value: '22px' },
			{ label: '23', value: '23px' },
			{ label: '24', value: '24px' }
		]
	},
	{
		id: 'height',
		text: 'Line Height',
		title: 'Choose line height',
		items: [
			{ label: '1.4', value: 1.4 },
			{ label: '1.6', value: 1.6 },
			{ label: '1.8', value: 1.8 },
			{ label: '2.0', value: 2.0 },
			{ label: '2.2', value: 2.2 },
			{ label: '2.4', value: 2.4 }
		]
	}
];
