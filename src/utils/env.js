import { Platform} from "react-native";

const liveHost = "https://us-central1-mealstogo-5c7fe.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-5c7fe/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;