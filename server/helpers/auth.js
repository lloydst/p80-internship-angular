// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
const credentials = {
    client: {
        id: process.env.APP_ID,
        secret: process.env.APP_PASSWORD,
    
    },
    auth: {
        tokenHost: 'https://login.microsoftonline.com',
        authorizePath: 'common/oauth2/v2.0/authorize',
        tokenPath: 'common/oauth2/v2.0/token'
    }
};
const oauth2 = require('simple-oauth2').create(credentials);
const jwt = require('jsonwebtoken');
function getConsent() {
    const returnVal = credentials.auth.tokenHost + '/common/adminconsent' + '?client_id=' + credentials.client.id +'&redirect_uri=' + process.env.REDIRECT_URI;
    return returnVal
}
function getAuthUrl() {
    const returnVal = oauth2.authorizationCode.authorizeURL({
        redirect_uri: process.env.REDIRECT_URI,
        scope: process.env.APP_SCOPES
    });
    //console.log(`Generated auth url: ${returnVal}`);
    return returnVal;
}

async function getTokenFromCode(auth_code, res) {
    let result = await oauth2.authorizationCode.getToken({
        code: auth_code,
        redirect_uri: process.env.REDIRECT_URI,
        scope: process.env.APP_SCOPES
    });

    const token = oauth2.accessToken.create(result);
    //console.log('Token created: ', token.token);

    saveValuesToCookie(token, res);

    return token.token.access_token;
}

async function getAccessToken(cookies, res) {
    // Do we have an access token cached?
    let token = cookies.graph_access_token;

    if (token) {
        // We have a token, but is it expired?
        // Expire 5 minutes early to account for clock differences
        const FIVE_MINUTES = 300000;
        const expiration = new Date(parseFloat(cookies.graph_token_expires - FIVE_MINUTES));
        if (expiration > new Date()) {
            // Token is still good, just return it
            return token;
        }
    }

    // Either no token or it's expired, do we have a 
    // refresh token?
    const refresh_token = cookies.graph_refresh_token;
    if (refresh_token) {
        const newToken = await oauth2.accessToken.create({ refresh_token: refresh_token }).refresh();
        saveValuesToCookie(newToken, res);
        return newToken.token.access_token;
    }

    // Nothing in the cookies that helps, return empty
    return null;
}

function saveValuesToCookie(token, res) {
    // Parse the identity token
    const user = jwt.decode(token.token.id_token);
    const max_age = 360000 // 1h
    const age_refresh = 1000 * 60 * 60 * 24 * 7// 1 week (s,m,h,d,w)
    // Save the access token in a cookie
    res.cookie('graph_access_token', token.token.access_token, { maxAge: max_age, httpOnly: true });
    // Save the user's name in a cookie
    res.cookie('graph_user_name', user.name, { maxAge: max_age, httpOnly: true });
    // Save the refresh token in a cookie
    res.cookie('graph_refresh_token', token.token.refresh_token, { maxAge: age_refresh, httpOnly: true });
    // Save the token expiration time in a cookie
    res.cookie('graph_token_expires', token.token.expires_at.getTime(), { maxAge: max_age, httpOnly: true });
}

function clearCookies(res) {
    // Clear cookies
    res.clearCookie('graph_access_token', { maxAge: 3600000, httpOnly: true });
    res.clearCookie('graph_user_name', { maxAge: 3600000, httpOnly: true });
    res.clearCookie('graph_refresh_token', { maxAge: 7200000, httpOnly: true });
    res.clearCookie('graph_token_expires', { maxAge: 3600000, httpOnly: true });
}

exports.getAuthUrl = getAuthUrl;
exports.getTokenFromCode = getTokenFromCode;
exports.getAccessToken = getAccessToken;
exports.clearCookies = clearCookies;
exports.getConsent = getConsent;


