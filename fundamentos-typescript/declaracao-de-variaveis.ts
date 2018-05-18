///var, let e const

// var
function iniciarTime(iniciarJogo: boolean){
    let nome = 'Messi e amigos';
    let cidade = 'em Ourinhos';

    if(iniciarJogo){
        cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(false);