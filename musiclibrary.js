const library = {
  tracks:{ t01: { id: "t01",
                  name: "Atomic Dog",
                  artist: "George Clinton",
                  album: "Computer Games"},
           t02: { id: "t02",
                  name: "Chase",
                  artist: "Giorgio Moroder",
                  album: "Midnight Express"},
           t03: { id: "t03",
                  name: "Clear",
                  artist: "Cybotron",
                  album: "Enter"}
        },

  playlists: { p01: { id: "p01",
                      name: "Hypnotic Music",
                      tracks: ["t01", "t02", "t03"]
                    },
               p02: { id: "p02",
                      name: "Old Skool Tracks",
                      tracks: ["t01", "t03"]
                    },
             }
};

//Print the following:
// p01: Hypnotic Music - 3 tracks
// p02: Old Skool Tracks - 2 tracks

const printPlaylists = function() {
  for (let p in library.playlists) {
    let pl = library.playlists[p];
    console.log(`${p}: ${pl.name} - ${pl.tracks.length} tracks`);
  }
};

// printPlaylist();

//Print the following:
// t01: Atomic Dog by George Clinton (Computer Games)
// t02: Chase by Giorgio Moroder (Midnight Express)
// t03: Clear by Cybotron (Enter)

const printTracks = function() {
  for (let t in library.tracks) {
    let tr = library.tracks[t];
    console.log(`${t}: ${tr.name} by ${tr.artist} (${tr.album})`);
  }
}

printTracks();
