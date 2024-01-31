let btnIniciarSesion = document.getElementById('btnIniciarSesion')
let divForm = document.getElementById('divForm')

function autenticatorUser() {
    let emailLogin= document.getElementById('emailLogin').value;
    let passwordLogin = document.getElementById('passwordLogin').value;
    let InfoIncorrecta = document.getElementById('InfoIncorrecta')

    fetch('http://localhost:3000/users')
        .then (response => response.json())
        .then (data => {
            filtro = data.filter (function(dataUser){
                return (dataUser.email == emailLogin && dataUser.password == passwordLogin)
            })
            if (filtro.length > 0) {
                localStorage.setItem('id',`${filtro[0].id}`)
                window.location.href = 'perfil.html'
                
            }
            else {
                divForm.classList.remove('h-50')
                InfoIncorrecta.innerHTML = 'Usuario y/o contraseña incorrectos'
            }
        })
    }

btnIniciarSesion.onclick = autenticatorUser
















