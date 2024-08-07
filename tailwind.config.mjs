/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				gotham: ['Gotham SSm A', 'sans-serif'],
			},
			letterSpacing: {
				'custom-10px': '10px',
			},
			lineHeight: {
				'custom-1.3em': '1.3em',
			},
			gridTemplateColumns: {
				'custom-2x130px': 'repeat(2, 130px)',
			},
			gridTemplateRows: {
				'custom-40px': '40px',
			},
			animation: {
				showContent: 'showContent 0.5s linear forwards',
				showImage: 'showImage 0.5s linear forwards',
				showThumbnail: 'showThumbnail 0.5s linear forwards',
				effectNext: 'effectNext 0.5s linear forwards',
				runningTime: 'runningTime 3s linear forwards',
				contentOut: 'contentOut 1.5s linear forwards',
				outFrame: 'outFrame 0.5s linear forwards',
			},
			keyframes: {
				showContent: {
					to: {
						transform: 'translateY(0px)',
						filter: 'blur(0px)',
						opacity: '1',
					},
				},
				showImage: {
					to: {
						bottom: '0',
						left: '0',
						width: '100%',
						height: '100%',
						borderRadius: '0',
					},
				},
				showThumbnail: {
					from: {
						width: '0',
						opacity: '0',
					},
				},
				effectNext: {
					from: {
						transform: 'translateX(150px)',
					},
				},
				runningTime: {
					from: {
						width: '100%',
					},
					to: {
						width: '0',
					},
				},
				contentOut: {
					to: {
						transform: 'translateY(-150px)',
						filter: 'blur(20px)',
						opacity: '0',
					},
				},
				outFrame: {
					to: {
						width: '150px',
						height: '220px',
						bottom: '50px',
						left: '50%',
						borderRadius: '20px',
					},
				},
			},
		},
	},
	plugins: [],
}
