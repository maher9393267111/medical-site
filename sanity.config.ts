import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import { iconPicker } from "sanity-plugin-icon-picker";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import {  mediaAssetSource } from 'sanity-plugin-media'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
 import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'



export default defineConfig({
  name: 'default',
  title: 'Admin dashboard',
  basePath: '/studio',

   projectId,
  dataset ,

  
  plugins: [


  

    // iconPicker(),
     inlineSvgInput(),
    vercelDeployTool(),
    deskTool(), visionTool() ,  media()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar
    }
  },
  theme: myTheme
,

  form: {
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource.title !== mediaAssetSource.title);
      },
    },
  },


})
