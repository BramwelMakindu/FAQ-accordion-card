const questionEls = document.querySelectorAll('.accordion');


questionEls.forEach((questionEl) => {
    questionEl.addEventListener('click', ()=>{
        questionEl.classList.toggle('active');
    })
});