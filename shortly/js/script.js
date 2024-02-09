const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')
const footerItems = document.getElementById('footer-items')
const itemHeads = document.querySelectorAll('.item-head')
const navIcon = document.getElementById('nav-icon')

linkForm.addEventListener('submit', formSubmit)

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
}

// Submit Form
function formSubmit(e) {
    e.preventDefault()
  
    if (input.value === '') {
      errMsg.innerHTML = 'Please enter something'
      input.classList.add('border-red')
    } else if (!validURL(input.value)) {
      errMsg.innerHTML = 'Please enter a valid URL'
      input.classList.add('border-red')
    } else {
      errMsg.innerHTML = ''
      input.classList.remove('border-red')
      alert('Success')
    }
}

// Expand footer
itemHeads.forEach(itemHead => {
    itemHead.addEventListener('click', () => {
      const listId = itemHead.dataset.list;
      const itemList = document.getElementById(listId);
      itemList.classList.toggle('is-open');
    });
});

// CHANGE HAMBURGER MENU
navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open')
})