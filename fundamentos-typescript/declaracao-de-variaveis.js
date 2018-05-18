///var, let e const
// var
function iniciarTime(iniciarJogo) {
    var nome = 'Messi e amigos';
    var cidade = 'em Ourinhos';
    if (iniciarJogo) {
        cidade = 'em Uberlândia';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
