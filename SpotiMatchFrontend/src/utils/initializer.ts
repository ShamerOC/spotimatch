import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080/auth',
          realm: 'spotimatch',
          clientId: 'spotimatch-front-client',
        },
        bearerExcludedUrls: ['/assets', '/clients/public'],
        initOptions:{
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
          window.location.origin + 'assets/silent-check-sso.html'
        }
      });
}
