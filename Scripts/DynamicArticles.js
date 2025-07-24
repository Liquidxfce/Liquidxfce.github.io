const articles = [
  {
    title: "First Article",
    image: "image/placeholder600x400.png",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, minus in eligendi itaque modi incidunt tempore magni? Dolorem eligendi provident maxime dolorum, quas qui. Soluta ipsum, reiciendis perferendis vel laborum perspiciatis quam ad, dolorem rem aliquid, quaerat obcaecati. Doloremque error, consectetur voluptatem tempora obcaecati sint adipisci architecto itaque illo labore corporis perferendis omnis id ullam. At exercitationem est, pariatur explicabo unde commodi earum nisi illo saepe corrupti necessitatibus vel quasi laboriosam hic repellendus voluptates quod ipsam corporis assumenda eius natus atque aut! Reiciendis esse itaque excepturi totam quisquam, dolores, maxime cupiditate nemo obcaecati nostrum fugiat facilis ratione eius ipsum quam!"
  },
  {
    title: "Second Article",
    image: "image/placeholder600x400.png",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, minus in eligendi itaque modi incidunt tempore magni? Dolorem eligendi provident maxime dolorum, quas qui. Soluta ipsum, reiciendis perferendis vel laborum perspiciatis quam ad, dolorem rem aliquid, quaerat obcaecati. Doloremque error, consectetur voluptatem tempora obcaecati sint adipisci architecto itaque illo labore corporis perferendis omnis id ullam. At exercitationem est, pariatur explicabo unde commodi earum nisi illo saepe corrupti necessitatibus vel quasi laboriosam hic repellendus voluptates quod ipsam corporis assumenda eius natus atque aut! Reiciendis esse itaque excepturi totam quisquam, dolores, maxime cupiditate nemo obcaecati nostrum fugiat facilis ratione eius ipsum quam!"
  },
  {
    title: "Third Article",
    image: "image/placeholder600x400.png",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, minus in eligendi itaque modi incidunt tempore magni? Dolorem eligendi provident maxime dolorum, quas qui. Soluta ipsum, reiciendis perferendis vel laborum perspiciatis quam ad, dolorem rem aliquid, quaerat obcaecati. Doloremque error, consectetur voluptatem tempora obcaecati sint adipisci architecto itaque illo labore corporis perferendis omnis id ullam. At exercitationem est, pariatur explicabo unde commodi earum nisi illo saepe corrupti necessitatibus vel quasi laboriosam hic repellendus voluptates quod ipsam corporis assumenda eius natus atque aut! Reiciendis esse itaque excepturi totam quisquam, dolores, maxime cupiditate nemo obcaecati nostrum fugiat facilis ratione eius ipsum quam!"
  }
];

const container = document.getElementById("articles-container");

articles.forEach(article => {
  const articleEl = document.createElement("div");
  articleEl.className = "article";

  articleEl.innerHTML = `
    <h2>${article.title}</h2>
    <img src="${article.image}" alt="${article.title}">
    <p>${article.text}</p>
  `;

  container.appendChild(articleEl);
});