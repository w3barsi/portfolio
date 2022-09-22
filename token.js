const SPOTIFY_REFRESH_TOKEN =
'AQCFVZM9I63abVsUVMmB4bgczESlg7nAGloDQxZ3ZxEOHo1NDWQp8OwpXsSCvdMNXM_EKJxfK_itAms6nMA9Cmkr3iORCi_k5zIZ-UcjwIrBRN1Snx6Sn0fwwBepHQUK0heocWkYCEzPzf1kXZ-VhFMwv45fRywjLvvRk6OctbnmCgikXTTjOIvtIbmLNUyRZlXQdbxf3LRHIBAfnlAl-XAW64xXAEZY4E0YpZwsHVMzAFRbs5GS2Ea7CCzGlUc-op0sCX94qgzkcpcaoyjpdVyOyEUOwSEwk243tfArZ6NGLY4moLQNGcOUubvobinxrSd8rsb3tc_oLm6YJppnJCDWw-kFFkkrfdxj4esUoS5Qc4xlFu90zNLN8hVw-UIJSXQww9dlraV2LmpD_8bcOVDERJim7F2OaoE1jJyR1xWULLF1lJfEPL42FfI5nJVXROpSEWUFOUeNGlydsHL-gASXuln3yOxG61Ymr8iVngDjAabZcBsHwXTwswl-fBatNOhHowDg1Q1AmE2kDRUetC1lmjSphC9YB9yOwfkSEN2T7rq02m6KVcU4AhDx3NORZAgp_QB3xj0smmGSoM4b2PRJtXBUgVJQkA6g-GgrtlfoCRVnnPxvxgPt44PggGsWAzf4rkIUTmrGyiBWcHc3-O9hvqAXKOwS9lA0oCwr8Ehrim3Bx7gi6OLQo0b8LOZGLR_--9XAdrCNR4pz'
const SPOTIFY_CLIENT_ID = 'cbd517a2fb3043b997c184c482b70c5e';
const SPOTIFY_CLIENT_SECRET = 'e9729eb35fe24bd5b4090c0141d92d4a';
const SPOTIFY_REDIRECT_URI = 'https://localhost:3000';
const SPOTIFY_SCOPES =
  'ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-follow-modify user-follow-read user-read-playback-position user-top-read user-read-recently-played user-library-modify user-library-read user-read-email user-read-private';


console.log(`curl -d client_id=${SPOTIFY_CLIENT_ID} \\
    -d client_secret=${SPOTIFY_CLIENT_SECRET} \\
    -d grant_type=authorization_code \\
    -d code=${SPOTIFY_REFRESH_TOKEN} \\
    -d redirect_uri=https://localhost:8888 \\
    https://accounts.spotify.com/api/token
`);

console.log(`
https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${SPOTIFY_SCOPES}&redirect_uri=https://localhost:8888`);

//https://accounts.spotify.com/authorize?response_type=code&client_id=cbd517a2fb3043b997c184c482b70c5e&scope=ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-follow-modify user-follow-read user-read-playback-position user-top-read user-read-recently-played user-library-modify user-library-read user-read-email user-read-private&redirect_uri=https://localhost:8888


