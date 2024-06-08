import React from "react";


function Pessoas(){
    let pessoas = [
        { nome: 'João', sobrenome: 'Silva', idade: 25, profissao: 'Engenheiro' },
        { nome: 'Maria', sobrenome: 'Santos', idade: 30, profissao: 'Professor' },
        { nome: 'Pedro', sobrenome: 'Oliveira', idade: 40, profissao: 'Médico' },
        { nome: 'Ana', sobrenome: 'Ferreira', idade: 35, profissao: 'Advogado' },
        { nome: 'Lucas', sobrenome: 'Costa', idade: 28, profissao: 'Designer' },
        { nome: 'Carla', sobrenome: 'Souza', idade: 22, profissao: 'Estudante' },
        { nome: 'Marcos', sobrenome: 'Almeida', idade: 38, profissao: 'Programador' },
        { nome: 'Juliana', sobrenome: 'Ribeiro', idade: 32, profissao: 'Psicóloga' },
        { nome: 'Rafael', sobrenome: 'Pereira', idade: 45, profissao: 'Empresário' },
        { nome: 'Camila', sobrenome: 'Gomes', idade: 27, profissao: 'Enfermeira' }
    ];

    return (
        pessoas.map((element, index) =>{
            return (<ul>
                <li key={index}>Nome: {element['nome']}</li>
                <li>Sobrenome: {element['sobrenome']}</li>
                <li>Idade: {element['idade']}</li>
                <li>Profissão: {element['profissao']}</li>

            </ul>)
        })
    )

}

export default Pessoas