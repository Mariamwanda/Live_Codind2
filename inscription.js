

function inscrisFunc(){
    let userN = localStorage.setItem("username");
    let userP = localStorage.setItem("password");
    let inpU = localStorage.setItem('user').value;
    let inpP = localStorage.setItem('pass').value;


 if(inpU == userN && inpP == userP){
    Window.Location.assign("PROJET FEVRIER/index.html")
 }
 else{
    document.getElementById('error').style.display='block';
    document.getElementById('error').innerHTML="Incorrect Incorrect";
 }
}


let btnsoumis = document.querySelector('.btnsoumis');
btnsoumis.addEventListener('click', (e)=>{
    e.preventDefault()
    let rNom= document.querySelector('#UserR').value;
    let rEmail= document.querySelector('#emailR').value;
    let rPass= document.querySelector('#passR').value;
    let rRepass= document.querySelector('#re-passR').value;
    
    localStorage.setItem("username",rNom);
    localStorage.setItem("email",rEmail);
    localStorage.setItem("password",rPass);
    localStorage.setItem("confirmer password",rRepass);


    let A =localStorage.getItem("Username");
    let B =localStorage.getItem("email");
    let C =localStorage.getItem("password");
    let D =localStorage.getItem("confirmer password");


    if( rNom == null  && rEmail == null &&  rPass == null &&  rRepass == null){
        document.querySelector('error').style.display='block';
        document.querySelector('error').innerHTML="Incorrect Incorrect";
    }
    else{
       document.location.href="./connecter.html";
        
    }
});
