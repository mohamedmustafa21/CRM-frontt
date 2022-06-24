


const myForm= document.getElementById('myForm');

myForm.addEventListener('submit',function(e){
    e.preventDefault();


    const formData = new FormData(this);

    fetch('http://127.0.0.1:8000/api/customers', {
        method: 'post',
        body : formData
    }) .then(function (response){
        return response.text();
    }).then(function(text){
        console.log(text)
    }).catch(function(error){
        console.log(error)
    })
    
})