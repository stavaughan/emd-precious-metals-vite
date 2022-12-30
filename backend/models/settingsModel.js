import mongoose from 'mongoose'
import socialSchema from './socialModel.js'

const settingsSchema = new mongoose.Schema(
    {
        siteName: String,
        copyRight: {
            link: {
                type: String,
                set: (val) => val.toLowerCase()
            },
            label: String
        },
        siteBranding: {
            brand: String,
            mark: {
                type: String,
                enum: ['registered', 'trademark'],
            },
            logo: String
        },
        social: [socialSchema],
        developer: {
            name: String,
            subName: String,
            url: {
                type: String,
                set: (val) => val.toLowerCase()
            }
        },
        siteData: Object
    },
    {
        timestamps: true
    }
)

const Settings = mongoose.model('Setting', settingsSchema, 'app-settings')

export default Settings
