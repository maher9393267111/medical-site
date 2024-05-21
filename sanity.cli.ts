import {defineCliConfig} from 'sanity/cli'
const projectId = "hekqjt0e";
const dataset = "production";
const apiVersion = "2022-11-15";

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
