const preciousMetals = {
    quality: {
        gold: [
            {
                _id: '10K',
                label: '10K',
				display: '10K',
                alloy: 10
            },
            {
                _id: '14K',
                label: '14K',
				display: '14K',
                alloy: 14
            },
            {
                _id: '18K',
                label: '18K',
				display: '18K',
                alloy: 18
            },
            {
                _id: '21K',
                label: '21K',
				display: '21K',
                alloy: 21
            },
            {
                _id: '22K',
                label: '22K',
				display: '22K',
                alloy: 22
            },
            {
                _id: '23K',
                label: '23K',
				display: '23K',
                alloy: 23
            },
            {
                _id: '24K',
                label: '24K',
				display: '24K',
                alloy: 24
            }
        ],
        silver: [
            {
                _id: 'fine',
                label: `Fine (.999%)`,
				display: 'Fine',
                alloy: 1000
            },
            {
                _id: 'sterling',
                label: `Sterling (.925%)`,
				display: 'Sterling',
                alloy: 925
            }
        ],
        platinum: [
            {
                _id: 'plat100',
                label: `Pure Platinum`,
				display: 'Pure',
                alloy: 1000
            },
            {
                _id: 'plat90',
                label: `90% Platinum`,
				display: '90% Pt',
                alloy: 900
            }
        ]
    }
}

export default preciousMetals;
