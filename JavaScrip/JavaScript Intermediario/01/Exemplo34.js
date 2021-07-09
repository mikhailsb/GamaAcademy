function calculaMedia(nota1, nota2, nota3){
    let media = (nota1+nota2+nota3)/3;

    if(media>=7){
        return "Aprovado!";
    }else if(media>=5 && media < 7){
        return "Recuperação!";
    }else{
        return "Reprovado!";
    }
}

console.log(calculaMedia(4,6,9));

