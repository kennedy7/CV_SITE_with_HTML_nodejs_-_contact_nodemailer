const contactForm = document.querySelector('.contact-form');
 let Fullname = document.getElementById('Fullname')
 let emailAddress = document.getElementById('emailAddress')
 let subject = document.getElementById('subject')
 let message = document.getElementById('message')

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let formData = {
        Fullname : Fullname.value,
        emailAddress: emailAddress.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            Fullname.value = '',
            emailAddress.value ='',
            subject.value ='',
            message.value =''
        }
        else{
            alert('something went wrong!')
        }
    }
    xhr.send(JSON.stringify(formData))
})
