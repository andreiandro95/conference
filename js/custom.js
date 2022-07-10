function openCloseMenu(x) {
  x.classList.toggle("change");
}
document.querySelector('.menu-btn-mobile').addEventListener('click', function(){
  if(!document.querySelector('.menu-date').classList.contains('active')){
    document.querySelector('.menu-date').classList.add('active')
  }else{
    document.querySelector('.menu-date').classList.remove('active')
  }
})

