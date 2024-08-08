// spotifyAuth.ts
const clientId = '1243ddfd16c24a82a2ea7713bef38b05';
const clientSecret = '223537d691da416a8ab8b14b73753b4f';
let token: string | null = null;
let tokenExpiration: number | null = null;

async function getToken(): Promise<string> {
    if (token && tokenExpiration && Date.now() < tokenExpiration) {
        return token;
    }

    const authResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
        },
        body: 'grant_type=client_credentials'
    });

    const authData = await authResponse.json();
    token = authData.access_token;
    tokenExpiration = Date.now() + authData.expires_in * 1000;

    return token;
}

export default getToken;
