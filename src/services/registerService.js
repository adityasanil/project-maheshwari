import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/registerUsers";

export function register(data) {
  return http.post(apiEndPoint, {
    firstName: data.firstName,
    middleName: data.middleName,
    lastName: data.lastName,
    email: data.email,
    contact: data.contact,
    programmeApplied: data.programmeApplied,
    dob: data.dob,
    lifeMembershipNumber: data.lifeMembershipNumber,
    landlineNumber: data.landlineNumber,
    residentialAddress: data.residentialAddress,
    residentialLandline: data.residentialLandline,
    companyName: data.companyName,
    product: data.product,
    comapanyWebsite: data.comapanyWebsite,
    businessIncorporationDate: data.businessIncorporationDate,
    facebookLink: data.facebookLink,
    linkedinLink: data.linkedinLink,
    instagramLink: data.instagramLink,
    twitterLink: data.twitterLink,
    area: data.area,
    married: data.married,
    bloodgroup: data.bloodgroup
  });
}
