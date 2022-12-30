const SiteData = {
	disclosures: {
		termsOfUse: (siteName) => `By using ${siteName}, creating, or accessing your ${siteName} account, including by signing in with a third-party service or partner (such as Google, Yahoo, ADP or RBC), or by otherwise using the Services we offer, you are agreeing to be bound by the Agreement without any modification or qualification. IF YOU ARE DISSATISFIED WITH THE AGREEMENT, OUR RULES, POLICIES, GUIDELINES OR PRACTICES, OR OUR OPERATION OF THE ${siteName.toUpperCase()} WEBSITE OR THE SERVICES, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE ${siteName.toUpperCase()} WEBSITE AND/OR OUR SERVICES, UNLESS ANOTHER REMEDY IS EXPRESSLY SET OUT IN THIS AGREEMENT. If for any reason you are unable to meet all the conditions set forth in this Agreement or if you breach this Agreement, your permission to access or use our Services, any materials downloaded or printed by you, and ${siteName.toUpperCase()} immediately lapses.\n\n
		We offer a number of additional services (collectively, the “Additional Services” each with their own additional terms of service (“Specific Additional Service Terms”) in addition to this Agreement. When you use an Additional Service, you will also be subject to the Specific Additional Service Terms. Note that if this Agreement is inconsistent with the Specific Additional Service Terms, those Specific Additional Service Terms will control.\n\n
		This Agreement, including any applicable Specific Additional Service Terms, is the entire agreement between you and us, and supersede all previous communications, representations, or agreements, either oral or written between you and us with respect to this subject matter.\n\n
		We reserve the right to modify or change the Agreement at any time by posting a new or revised Agreement to the Site. Your use of ${siteName} or the creation or access to your ${siteName} account is subject to the most current Agreement posted on the Site. The most current version of the Agreement can be reviewed by clicking the “Terms of Use” hyperlink at the bottom of our Site. You may not modify or amend this Agreement in whole or in part without the written consent of one of our authorized representatives`,
		privacy: (businessName) => `This privacy policy sets out how ${businessName} uses and protects any information that you give ${businessName} when you use this website. ${businessName} is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. ${businessName} may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 1/1/2021. We may collect the following information: name and job title contact information including email address demographic information such as postcode, preferences and interests other information relevant to customer surveys and/or offers What we do with the information we gather We require this information to understand your needs and provide you with a better service, and in particular for the following reasons: Internal record keeping. We may use the information to improve our products and services. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests. Security We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online. How we use cookies A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and`,
	},
	modalIDs: {
		displayFile: "displayFile",
		displayImage: "displayImage",
		spreadInfo: "spreadInfo",
		metalssettings: "metalssettings",
		imageUploadCrop: "imageUploadCrop"
	},
	editMessages: {
		onEdit: 'Make your changes now',
		onChange: "Click 'Save update' to save changes",
		onDelete: "Are you sure you want to delete this item?",
		onSave: `Saving changes...`,
		onCancel: 'Canceling...'
	},
	pageGroupsContent: [
		{
			_id: 'Resources',
			title: 'Resource Libraries',
			icon: 'book-reader',
			description: 'Organized access to saved online resources, calculators and tools',
			resourceTypes: [
				{ _id: 'article', label: 'Article' },
				{ _id: 'webpage', label: 'Webpage' },
				{ _id: 'app', label: 'Application' },
				{ _id: 'book', label: 'Book' }
			]
		}
	],
	icons: {
		social: [
			{
				id: 'facebook',
				name: 'Facebook',
				color: "#4267B2",
				lib: 'fab',
				icon: 'facebook',
				baseLink: "https://www.facebook.com/"
			},
			{
				id: 'linkedin',
				name: 'LinkedIn',
				color: "#0077b5",
				lib: 'fab',
				icon: 'linkedin',
				baseLink: "https://www.linkedin.com/in/"
			},
			{
				id: 'twitter',
				name: 'Twitter',
				color: "#1DA1F2",
				lib: 'fab',
				icon: 'twitter',
				baseLink: "https://twitter.com/"
			},
			{
				id: 'google',
				name: 'Google',
				color: "#DB4437",
				lib: 'fab',
				icon: 'google',
				baseLink: "https://google.com/"
			},
			{
				id: 'github',
				name: 'GitHub',
				color: "#333",
				lib: 'fab',
				icon: 'github',
				baseLink: "https://github.com/"
			},
			{
				id: 'instagram',
				name: 'Instagram',
				color: "#c9510c",
				lib: 'fab',
				icon: 'instagram-square',
				baseLink: "https://www.instagram.com/"
			},
			{
				id: 'pinterest',
				name: 'Pinterest',
				color: "#E60023",
				lib: 'fab',
				icon: 'pinterest-square',
				baseLink: "https://www.pinterest.com/"
			}
		],
		alerts: [
			{
				type: 'error',
				lib: 'fas',
				icon: 'exclamation-triangle',
				className: 'danger'
			},
			{
				type: 'warning',
				lib: 'fas',
				icon: 'exclamation-triangle',
				className: 'warning'
			},
			{
				type: 'notice',
				lib: 'fas',
				icon: 'exclamation-circle',
				className: 'info'
			},
			{
				type: 'check',
				lib: 'fas',
				icon: 'check-circle',
				className: 'primary'
			},
			{
				type: 'success',
				lib: 'fas',
				icon: 'check-circle',
				className: 'success'
			},
			{
				type: 'alert',
				lib: 'far',
				icon: 'bell',
				className: 'primary'
			},
			{
				type: 'info',
				lib: 'fas',
				icon: 'info-circle',
				className: 'info'
			}
		]
	},
	socialMedia: [
		{
			id: 'facebook',
			name: 'Facebook',
			color: "#4267B2",
			lib: 'fab',
			icon: 'facebook',
			baseLink: "https://www.facebook.com/",
			prob: 0.7
		},
		{
			id: 'linkedin',
			name: 'LinkedIn',
			color: "#0077b5",
			lib: 'fab',
			icon: 'linkedin',
			baseLink: "https://www.linkedin.com/in/",
			prob: 0.7
		},
		{
			id: 'twitter',
			name: 'Twitter',
			color: "#1DA1F2",
			lib: 'fab',
			icon: 'twitter',
			baseLink: "https://twitter.com/",
			prob: 0.5
		},
		{
			id: 'google',
			name: 'Google',
			color: "#DB4437",
			lib: 'fab',
			icon: 'google',
			baseLink: "https://google.com/",
			prob: 0.1
		},
		{
			id: 'github',
			name: 'GitHub',
			color: "#333",
			lib: 'fab',
			icon: 'github',
			baseLink: "https://github.com/",
			prob: 0.3
		},
		{
			id: 'instagram',
			name: 'Instagram',
			color: "#E1306C",
			lib: 'fab',
			icon: 'instagram-square',
			baseLink: "https://www.instagram.com/",
			prob: 0.4
		},
		{
			id: 'pinterest',
			name: 'Pinterest',
			color: "#E60023",
			lib: 'fab',
			icon: 'pinterest-square',
			baseLink: "https://www.pinterest.com/",
			prob: 0.2
		}
	]
};

export default SiteData;
