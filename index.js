const body = document.getElementById('body')

let index = 0

let post = {
  title: "",      
  text: [] ,
  image: [] 
}    

let pages = []

let indexImgs = 0
let indexTexts = 0

document.getElementById('btnAdmin').addEventListener('click', modeAdd)




//Adiciona areas de adição de img na edição
function addEditImg() {  
  indexImgs++
  const addPostImg = document.createElement('input')
  addPostImg.type = 'text'
  addPostImg.class = 'addImg'
  addPostImg.id = 'addPostImg' + indexImgs
  addPostImg.required = this

  const addPostImgLb = document.createElement('label')
  addPostImgLb.htmlFor = 'addPostImg' + indexImgs
  addPostImgLb.innerHTML = 'Adicionar Link da Imagem ' + indexImgs
  blockEdit.append(addPostImgLb, addPostImg)
}

//Adiciona areas de adição de texto na edição
function addEditText() {
  indexTexts++
  const addText = document.createElement('textarea')
  // addText.type = 'text'
  addText.id = 'addText' + indexTexts
  addText.required = this

  const addTextLb = document.createElement('label')
  addTextLb.htmlFor = 'addText' + indexTexts
  addTextLb.innerHTML = 'Paragrafo ' + indexTexts
  blockEdit.append(addTextLb,addText)
}

function modeAdd(){    

  const sectionEdit = document.getElementById('section')

  if(document.getElementsByClassName('page').length != 0){
    sectionEdit.removeChild(document.querySelector('section > .page'))
  }

  const blockEdit = document.createElement('div')
  blockEdit.className = 'page'
  blockEdit.id = 'blockEdit'

  const formAdd = document.createElement('form')
  
  const title = document.createElement('h4')
  title.innerHTML = "Adição de Postagem"

  const addTitle = document.createElement('input')
  addTitle.type = 'text'
  addTitle.id = 'addTitle'
  addTitle.required = this

  const addTitleLb = document.createElement('label')
  addTitleLb.htmlFor = 'addTitle'
  addTitleLb.innerHTML = 'Titulo da Postagem'
  
  const btnAddImg = document.createElement('button')
  btnAddImg.innerHTML = "Adicionar imagem"
  btnAddImg.id = "btnAddImg"

  const btnAddText = document.createElement('button')
  btnAddText.innerHTML = "Adicionar Texto"
  btnAddText.id = "btnAddText"

  const btnSubmit = document.createElement('button')
  btnSubmit.type = 'submit'
  btnSubmit.id = 'btnSubmit'
  btnSubmit.innerHTML = 'Postar'
  
  sectionEdit.appendChild(blockEdit)
  blockEdit.append(formAdd,title,addTitleLb,addTitle,btnAddImg,btnAddText,btnSubmit)

  btnAddImg.addEventListener('click', addEditImg)
  btnAddText.addEventListener('click', addEditText)

  //botão submit salva o post
  btnSubmit.addEventListener('click', createPost)
}

//função cria a postagem e faz salvamento dos itens  
function createPost(){
  post.title = document.getElementById('addTitle').value

 
  
  // document.getElementById('addTitle').value = ''
  // document.getElementById('addImg').value = ''
  // document.getElementById('addText').value = ''

  const section = document.getElementById('section')
  const edit = document.getElementById('blockEdit')

  section.removeChild(edit)

  const page = document.createElement('div')
  page.className = 'page'
  page.id = 'page-' + index
  
  const titlePost = document.createElement('h2')
  titlePost.className = 'titlePost'
  titlePost.innerHTML = post.title


  // const imgPost = document.createElement('img')
  // imgPost.className = 'imgPost'
  // imgPost.src = post.image

  // const textPost = document.createElement('p')
  // textPost.className = 'textPost'
  // textPost.innerHTML = post.text

  section.appendChild(page)
  page.append(titlePost)

  pages.push(document.getElementById('page-' + index))
  
  indexImgs = 0
  indexTexts = 0
  index++
}
