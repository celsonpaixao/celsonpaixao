// spotifyApi.ts
import getToken from "./spotityAuth"

interface SpotifyImage {
    url: string;
    height: number;
    width: number;
}

interface SpotifyArtist {
    name: string;
}

interface SpotifyTrack {
    name: string;
    artists: SpotifyArtist[];
    album: {
        images: SpotifyImage[];
    };
}

interface SpotifyPlaylistTrack {
    track: SpotifyTrack;
}

async function fetchWebApi(endpoint: string, method: string, body?: any): Promise<any> {
    const token = await getToken();
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body: body ? JSON.stringify(body) : undefined,
    });
    return await res.json();
}

async function getPlaylistTracks(playlistId: string): Promise<SpotifyPlaylistTrack[]> {
    const endpoint = `v1/playlists/${playlistId}/tracks`;
    const data = await fetchWebApi(endpoint, 'GET');
    return data.items;
}

function getRandomTrack(tracks: SpotifyPlaylistTrack[]): SpotifyPlaylistTrack {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    return tracks[randomIndex];
}

export async function getRandomTrackFromPlaylist(playlistId: string): Promise<{ title: string; artist: string; image: string | undefined }> {
    const tracks = await getPlaylistTracks(playlistId);
    const randomTrack = getRandomTrack(tracks);
    return {
        title: randomTrack.track.name,
        artist: randomTrack.track.artists.map(artist => artist.name).join(', '),
        image: randomTrack.track.album.images[0]?.url,
    };
}
