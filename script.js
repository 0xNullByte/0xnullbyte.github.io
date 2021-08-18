window.addEventListener('load',function(){

    var aboutMe = this.document.getElementById('TypeForMe');
    let paragraph = `Petroleum engineering student, Programer, and CTF player.
    You can see my projects on my github
    and my writeups for CTF challenges on my `;    

        for (let i=0;i<paragraph.length;i++) { TypeForMe(i); }
  
    function TypeForMe(i) { setTimeout(function() {
            if (i === 57){
                aboutMe.innerHTML += '<br>'
            } else if (i === 99){
                aboutMe.innerHTML += '<a class="white" href="https://www.github.com/0xNullByte">Account.</a><br>'
            } else if (i === 143){
                aboutMe.innerHTML += ` <a class="white" href="javascript:alert('Soon!')">Blog.</a><br>`    
                document.getElementById('social-1').innerHTML = '<img class="social" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>'
                document.getElementById('social-2').innerHTML = '<img class="social" src="https://icons-for-free.com/iconfiles/png/512/instagram+logo+media+network+new+social+icon-1320192913744755946.png"/>'
                } aboutMe.innerHTML += paragraph[i] } , 50 * i)}

})
