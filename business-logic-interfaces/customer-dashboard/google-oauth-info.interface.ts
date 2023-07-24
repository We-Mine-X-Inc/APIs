export enum GoogleOAuthServiceType {
  UNKNOWN = 0,
  GMAIL = 1,
}

export type GoogleOAuthInfo = {
  serviceType: GoogleOAuthServiceType;
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
  scopes: string[];
};
