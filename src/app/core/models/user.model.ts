interface UserProfile {
  name: string;
  profile: string;
  picture: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  username: string;
  name: string;
  createdAt: string;
  lastLoginAt: string;
  status: string;
  permissions: [string]
  hasDeleteAccess: boolean;
  role: string;
  logo: string;
  banner: string;

  logoKey: string;
  bannerKey: string;

  profilePicture: string;
  facebook: boolean;
  google: boolean;
  countryName: string;
  deliveryLocation: DeliveryLocation[];
  contactPerson: ContactPerson[];
  media: Media[];
  locationPoint: Array<[]>;
  zohoContactId: string;
}

interface DeliveryLocation {
  name: string;
}
interface ContactPerson {
  fullName: string;
  email: string;
  mobileCode: string;
  mobileNumber: string;
  title: string;
}
interface Media {
  id: number;
  fileName: string;
  fileType: string;
  filePath: string;
}