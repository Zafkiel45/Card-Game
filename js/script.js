let img = document.getElementById('user');

function confirma() {
    let name = document.getElementById('name');
    let sexo = document.getElementsByName('sex');
    let years = document.getElementById('idade');
    let res_name = document.getElementById('res-name');
    let res_sex = document.getElementById('res-sex');
    let res_idade = document.getElementById('res-idade');

    if(name.value.length == 0 || name.value.length < 2 ) {
        window.alert('ERRO, Verifique os dados e tente novamente')
    } else {
        res_name.innerHTML = `- ${name.value}`
    }
}