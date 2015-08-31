  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
 	returnURL: 'https://skwantoso-saml-test.cloudapp.net/auth/openid/return',
 	// MS STS
	// identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', 
	// AAD B2C 
	identityMetadata: 'https://login.microsoftonline.com/skwantosob2ctest.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_DefaultSignIn',
 	clientID: 'cc7d475b-0c4b-43c3-b9c8-5ee08928aadf',
 	clientSecret: 'CEzV4w0uW7uzjVXDPoA2ugp',
 	skipUserProfile: true, // for OpenID only flows this should be set to true
 	responseType: 'id_token', // for login only flows
 	responseMode: 'form_post', // As per the OAuth 2.0 standard.
 	//scope: ['email', 'profile'] // additional scopes you may wish to pass

 };
