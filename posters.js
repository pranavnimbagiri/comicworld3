AFRAME.registerComponent("comics-posters", {
     init: function() {
          this.postersContainer = this.el; this.posters(); 
        },
         posters: function() {
              const postersRef = [ {
                   id: "superman",
                   url: "./assets/posters/superman-poster.jpg" 
                }, 
                {
                    id: "hulk", 
                    url: "./assets/hulk.jpg" 
                }, 
                { 
                    id: "ironman", 
                    url: "./assets/ironman.jpg" 
                }, 
                { 
                    id: "aquaman", 
                    url: "./assets/aquaman.jpg" 
                } ];
                 let prevoiusXPosition = -60; 
                 for (var item of postersRef) { 
                     const posX = prevoiusXPosition + 25; 
                     const posY = 10; 
                     const posZ = -40; 
                     const position = { x: posX, y: posY, z: posZ }; 
                     prevoiusXPosition = posX; 
                     //Border Element 
                     const borderEl = this.createBorder(position, item.id); 
                     // Poster Element 
                     const poster = this.createPoster(item); 
                     borderEl.appendChild(poster); 
                     this.postersContainer.appendChild(borderEl); 
                    } },
                     createBorder: function(position, id) { 
                         const entityEl = document.createElement("a-entity"); 
                         entityEl.setAttribute("id", id); 
                         entityEl.setAttribute("visible", true); 
                         entityEl.setAttribute("geometry", { 
                             primitive: "plane", width: 22, height: 40 }); 
                             entityEl.setAttribute("position", position); 
                             entityEl.setAttribute("material", { color: "#fff" }); 
                             return entityEl; 
                            },
                             createPoster: function(item) {
                                  const entityEl = document.createElement("a-entity"); 
                                  entityEl.setAttribute("visible", true); 
                                  entityEl.setAttribute("geometry", { 
                                    primitive: "plane", width: 20, height: 28 }); 
                                    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 }); 
                                    entityEl.setAttribute("material", { src: item.url }); 
                                    return entityEl; 
                                },
                                createTitleEl: function (position, item) {
                                    const entityEl = document.createElement("a-entity");
                                    entityEl.setAttribute("text", {
                                      font: "exo2bold",
                                      align: "center",
                                      width: 70,
                                      color: "#e65100",
                                      value: item.title,
                                    });
                                    const elPosition = position;
                                    elPosition.y = -20;
                                    entityEl.setAttribute("position", elPosition);
                                    entityEl.setAttribute("visible", true);
                                    return entityEl;
                                  }, 
                            });