const body = document.getElementById('body')

let index = 0

let pages = []

document.getElementById('btnAdmin').addEventListener('click', modeAdd)

//function createPost(){}

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
  
  const addImg = document.createElement('input')
  addImg.type = 'text'
  addImg.id = 'addImg'
  addImg.required = this

  const addImgLb = document.createElement('label')
  addImgLb.htmlFor = 'addImg'
  addImgLb.innerHTML = 'Adicionar Link da Imagem'

  const addTitle = document.createElement('input')
  addTitle.type = 'text'
  addTitle.id = 'addTitle'
  addTitle.required = this

  const addTitleLb = document.createElement('label')
  addTitleLb.htmlFor = 'addTitle'
  addTitleLb.innerHTML = 'Titulo da Postagem'

  const addText = document.createElement('textarea')
  // addText.type = 'text'
  addText.id = 'addText'
  addText.required = this

  const addTextLb = document.createElement('label')
  addTextLb.htmlFor = 'addText'
  addTextLb.innerHTML = 'Corpo da Postagem'

  const btnSubmit = document.createElement('button')
  btnSubmit.type = 'submit'
  btnSubmit.id = 'btnSubmit'
  btnSubmit.innerHTML = 'Postar'
  
  sectionEdit.appendChild(blockEdit)
  blockEdit.append(formAdd,title,addTitleLb,addTitle,addImgLb,addImg,addTextLb,addText,btnSubmit)
  


  btnSubmit.addEventListener('click', function (){
    let post = {
      title: document.getElementById('addTitle').value,      
      text: document.getElementById('addText').value,
      image: document.getElementById('addImg').value
    }    

    post.title = document.getElementById('addTitle').value
    post.text = document.getElementById('addText').value
    
    document.getElementById('addTitle').value = ''
    document.getElementById('addImg').value = ''
    document.getElementById('addText').value = ''
  
    const section = document.getElementById('section')
    const edit = document.getElementById('blockEdit')
  
    section.removeChild(edit)
  
    const page = document.createElement('div')
    page.className = 'page'
    page.id = 'page-' + index
    
    const titlePost = document.createElement('h2')
    titlePost.className = 'titlePost'
    titlePost.innerHTML = post.title


    const imgPost = document.createElement('img')
    imgPost.className = 'imgPost'
    imgPost.src = post.image

    const textPost = document.createElement('p')
    textPost.className = 'textPost'
    textPost.innerHTML = post.text

    section.appendChild(page)
    page.append(titlePost, imgPost, textPost)

    pages.push(document.getElementById('page-' + index))
    
    index++
  })
}
