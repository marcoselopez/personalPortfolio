const toggle = document.querySelector('.navToggle')
const items = document.querySelectorAll('.navItem')

function toggleMenu(){
  let checkItem;
  items.forEach(item => {
    if(item.className.indexOf("active") > -1){
      checkItem = true;
    } else {
      checkItem = false;
    }
  })

  if(checkItem){    
    items.forEach(item => item.classList.remove("active"))
    toggle.querySelector("div").innerHTML = "<span class='material-icons'>menu</span>"
  } else {
    items.forEach(item => item.classList.add("active"));
    toggle.querySelector("div").innerHTML = "<span class='material-icons'>close</span>"
  }
}

toggle.addEventListener('click', toggleMenu, false);