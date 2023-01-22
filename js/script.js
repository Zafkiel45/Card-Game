let img = document.getElementById('user');

function confirma() {
    let name = document.getElementById('name');
    let sexo = document.getElementsByName('sex');
    let years = document.getElementById('idade').value;
    let res_name = document.getElementById('res-name');
    let res_sex = document.getElementById('res-sex');
    let res_idade = document.getElementById('res-idade');
    let gen = ''

    if(name.value.length == 0 || name.value.length < 2 ) {
        window.alert('ERRO, Verifique os dados e tente novamente')
    } else {
        res_name.innerHTML = `- ${name.value}`
    } 

    if(sexo[0].checked){
        gen = 'Masculino'
        res_sex.innerHTML = `${gen}`
        img.src = '../img/user-female.svg'

    } else {
        gen = 'Feminino'
        res_sex.innerHTML = `${gen}`
        img.src = '../img/user-men.svg'
    }

    res_idade.innerHTML = `${years}`
}
