const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function () {
  for (let p in library.playlists){
    let pl = library.playlists[p];
    console.log(`${p}: ${pl.name} - ${pl.tracks.length} tracks`);
  }
}

// printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (let t in library.tracks) {
    let tr = library.tracks[t];
    console.log(`${t}: ${tr.name} by ${tr.artist} (${tr.album})`);
  }
}

// printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function(playlistId) {
  for (let p1 in library.playlists) {
    let pl = library.playlists[p1];

    if (pl.id === playlistId) {
      console.log(`${pl.id}: ${pl.name} - ${pl.tracks.length} tracks`);
    }

    for (let p2 in library.tracks){
      let t = library.tracks[p2];

      if (pl.tracks.includes(t.id)) {
        console.log(`${t.id}: ${t.name} by ${t.artist} (${t.album})`)
      }
    }
    break;
  }
}

printPlaylist("p01");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  for (let p1 in library.playlists) {
    let pl = library.playlists[p1];
    if (pl.id === playlistId) {
        //printPlaylist(pl.id);

        //adds track to playlist if it's not there
        if (!pl.tracks.includes(trackId)) {
            pl.tracks.push(trackId);
            //printPlaylist(pl.id);
        }

        break; // exist playlists loop if required playlist was found
    }
}
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}