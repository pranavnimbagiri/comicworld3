AFRAME.registerComponent("info-banner", { 
    schema: {
    itemId: { default: "", type: "string" },
 }, 
    update: function () {
      this.createBanner();
     },
    createBanner: function () { 
        postersInfo = { 
            "superman": {
                banner_url: "./assets/posters/superman-banner.jpg", 
                title: "Superman", 
                released_year: "1983", 
                description: "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939." },
            "spiderman": { 
                banner_url: "./assets/posters/spiderman-banner.png", 
                title: "Spiderman", 
                released_year: "1962", 
                description: "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books." },
            "captain-aero": {
                banner_url: "./assets/posters/captain-aero-banner.jpg", 
                title: "Captain Aero", 
                released_year: "1942", 
                description: "Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Issue was published in December 1941, and it ran through issue (August 1946)." }, 
            "outer-space": { 
                banner_url: "./assets/posters/outer-space-banner.jpg", 
                title: "Outer Space", 
                released_year: "1952", 
                description: "This is the most vital subject of our times! Every American Man... and Woman... Child... owes it to his country and himself, to read this issue!!" },
             };
            },
             