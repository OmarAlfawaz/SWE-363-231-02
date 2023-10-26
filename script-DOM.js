const posts = 
[
    {
        src:"assets/news1.png",
        date:new Date("2023-10-12:00:00.000Z"),
        title:"Saudi Arabia announces launch of hydrogen train tests",
        brief:"Saudi Arabia has announced that it will begin testing hydrogen trains in 2024.The trains will be developed by a consortium of companies that includes Saudi Railways, Alstom, and Air Liquide. The trains will be powered by hydrogen fuel cells and will emit no greenhouse gases."
       
    },
    {
        src:"assets/news2.jpg",
        date:new Date("2023-10-13:00:00.000Z"),
        title:"Nasa reveals 'incredible' findings from asteroid that could explain origins of life on Earth",
        brief:"NASA scientists have announced the discovery of organic molecules in the Ryugu asteroid, which they say could have been the building blocks of life on Earth. The discovery suggests that asteroids may have played a role in bringing life to our planet."
       
    },
    {
        src:"assets/news3.avif",
        date:new Date("2023-10-14:00:00.000Z"),
        title:"Quantum batteries offer revolution in energy storage",
        brief:"Researchers at the University of Sydney have developed a new type of battery that uses quantum mechanics to store energy. The battery has the potential to store much more energy than traditional batteries, and it could also be much faster to charge."
       
    },
    {
        src:"assets/news4.jpg",
        date:new Date("2023-10-15:00:00.000Z"),
        title:"Supposed hidden planet in our solar system could be something weirder",
        brief:"Astronomers have found evidence of a possible ninth planet in our solar system, but they say it could also be something else, such as a cluster of small objects. The object, which has been nicknamed Planet Nine, is thought to be located in the outer solar system, beyond the orbit of Neptune."
       
    }
]
class NewsPost {
    constructor(src, date, title, brief) {
      this.src = src;
      this.date = date;
      this.title = title;
      this.brief = brief;
    }
  }

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
  
  const appendPostsToPage = (posts) => {
    const postsContainer = document.querySelector("#posts");
    posts.forEach((post) => {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    });
  };
  
  appendPostsToPage(posts);
