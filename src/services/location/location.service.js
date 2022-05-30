import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchItem) => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchItem];
        if (!locationMock) {
            reject("not found");
        }
        resolve(locationMock);
    });
};

export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results [0];
    const { lat, lng } = geometry.location;

    return { lat, lng };
};