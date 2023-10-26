class NewsPost {
    constructor(src, date, title, brief) {
      this.src = src;
      this.date = date;
      this.title = title;
      this.brief = brief;
    }
  }

const posts = 
[ new NewsPost("assets/news1.png",new Date("2023-10-12:00:00.000Z"),"Saudi Arabia announces launch of hydrogen train tests",  "Saudi Arabia has announced that it will begin testing hydrogen trains in 2024.The trains will be developed by a consortium of companies that includes Saudi Railways, Alstom, and Air Liquide. The trains will be powered by hydrogen fuel cells and will emit no greenhouse gases.")
, new NewsPost("assets/news2.jpg",new Date("2023-10-13:00:00.000Z"),"Nasa reveals 'incredible' findings from asteroid that could explain origins of life on Earth","NASA scientists have announced the discovery of organic molecules in the Ryugu asteroid, which they say could have been the building blocks of life on Earth. The discovery suggests that asteroids may have played a role in bringing life to our planet.")
, new NewsPost("assets/news3.avif",new Date("2023-10-14:00:00.000Z"),"Quantum batteries offer revolution in energy storage","Researchers at the University of Sydney have developed a new type of battery that uses quantum mechanics to store energy. The battery has the potential to store much more energy than traditional batteries, and it could also be much faster to charge.")
, new NewsPost("assets/news4.jpg",new Date("2023-10-15:00:00.000Z"),"Supposed hidden planet in our solar system could be something weirder","Astronomers have found evidence of a possible ninth planet in our solar system, but they say it could also be something else, such as a cluster of small objects. The object, which has been nicknamed Planet Nine, is thought to be located in the outer solar system, beyond the orbit of Neptune.")
]


  const createPostElement = (post) => {
    const div = document.createElement("div");
    div.classList.add("news");
    const content = document.createElement("div");
    content.classList.add("Brief1Content");
    const img = document.createElement("img");
    const title = document.createElement("h5");
    const brief = document.createElement("p");

    img.alt = "Sample Image";
    img.src = post.src;
  
    title.innerText = post.title;
    brief.innerText = post.brief;
  
    content.appendChild(brief);
    div.appendChild(title);
    div.appendChild(content);
    div.appendChild(img);
  
    return div;
  };

  const postElements = posts.map((post) => createPostElement(post));
  
    const postsContainer = document.querySelector("#posts");
    postElements.reduce((container, element) => {
        container.appendChild(element);
        return container;
    }, postsContainer);