class Blog {
    constructor(title, detail) {
      this.title = title
      this.detail = detail
      this.addImage()
      this.addTitle()
      this.addDescription()
    }
    addImage() {
      var image = document.createElement('img')
      image.src = './assets/javascript.png'
      document.getElementById('flashcard').appendChild(image)
      var pic=document.getElementById("card-text");
      pic.insertBefore(image,pic[0]);
    }
    addTitle(){
    console.log('Title' + title)
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
    }

    addDescription(){
    var detail_card = document.createElement('p');
    detail_card.setAttribute("id","blog-description");
    console.log(detail_card);
    document.getElementById('card-text').appendChild(detail_card);
    detail_card.innerHTML += this.detail;
    }
}
var addpost = document.getElementById('addBlog')
addpost.addEventListener('click', function () {
  document.getElementById('popupContact').style.display = 'block'
})
var post = document.getElementById('post')
post.addEventListener('click', function () {
  document.getElementById('popupContact').style.display = 'none'
  let title = document.getElementById('title').value
  let detail = document.getElementById('detail').value
  let blog1 = new Blog(title, detail)
})
