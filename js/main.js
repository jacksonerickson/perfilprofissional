
//document.ready
$(function(){
    var mixer = mixitup('#mix-container');
});

function Enviar(){
    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    var telefone = document.getElementById("telid");
    var mc = document.getElementById("mcid");
    if(nome.value && email.value && telefone.value && mc.value != ""){
        alert('Obrigado' + nome.value + 'entrarei em contato em breve');
    }
}