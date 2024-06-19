import LibContentfulEnvVars, {
  LibContentfulEnvVarsInterface,
} from "./variables"
import LibContentfulSdk, { LibContentfulSdkInterface } from "./sdk"

export interface LibContentfulInterface {
  LibContentfulEnvVars: LibContentfulEnvVarsInterface
  LibContentfulSdk: LibContentfulSdkInterface
}

const LibContentful: LibContentfulInterface = {
  LibContentfulEnvVars,
  LibContentfulSdk,
}

export default LibContentful
