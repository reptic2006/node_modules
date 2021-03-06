import _parse from './parse';
import _Search from './search';
import _Local from './local';
import _Playlist from './playlist';
import _Artist from './artist';
import _Album from './album';
import _Track from './track';
import _User from './user';
import _SpotifyUri from './spotify-uri';
declare function parseSpotifyUri(uri: string | _SpotifyUri): parseSpotifyUri.ParsedSpotifyUri;
declare namespace parseSpotifyUri {
    type SpotifyUri = _SpotifyUri;
    const SpotifyUri: typeof _SpotifyUri;
    type Local = _Local;
    const Local: typeof _Local;
    type Search = _Search;
    const Search: typeof _Search;
    type Playlist = _Playlist;
    const Playlist: typeof _Playlist;
    type Artist = _Artist;
    const Artist: typeof _Artist;
    type Album = _Album;
    const Album: typeof _Album;
    type Track = _Track;
    const Track: typeof _Track;
    type User = _User;
    const User: typeof _User;
    type ParsedSpotifyUri = Search | Local | Playlist | Track | Artist | Album | User;
    const parse: typeof _parse;
    function formatURI(input: string | SpotifyUri): string;
    function formatEmbedURL(input: string | SpotifyUri): string;
    function formatOpenURL(input: string | SpotifyUri): string;
    function formatPlayURL(input: string | SpotifyUri): string;
}
export = parseSpotifyUri;
