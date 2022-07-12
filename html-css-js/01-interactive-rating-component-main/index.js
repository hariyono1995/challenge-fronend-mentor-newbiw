const btnSubmit = document.querySelector('#submit');
const ratings = document.querySelectorAll('.feedback li');
let setActiveNav;


ratings.forEach(entry => entry.addEventListener('click', e => {
  if(!entry.classList.contains('active')) {
      document.querySelector('.feedback li.active').classList.remove('active');
      entry.classList.add('active');    
    }

    setActiveNav = entry.innerHTML;
    console.log(entry);
    console.log(setActiveNav);
    e.preventDefault();
    localStorage.setItem("rate", setActiveNav);
}));

document.getElementById('select-rate').innerHTML = `
You selected ${localStorage.getItem('rate')}  out of 5`;