const downloadBtn = document.getElementById('download'); //find the button

//add event listener
downloadBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    //go to another page for downloading picture
    window.location.href = '/pugpic'
})