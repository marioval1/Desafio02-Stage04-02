const students = [
  {
    name: 'Mario',
    nota1: 8,
    nota2: 5,
  },

  {
    name: 'Andres',
    nota1: 4,
    nota2: 5,
  },

  {
    name: 'Danielle',
    nota1: 9,
    nota2: 8,
  },

  {
    name: 'João',
    nota1: 2,
    nota2: 5,    
  },

  {
    name: 'Walter',
    nota1: 8,
    nota2: 3,    
  }
]



function printAverage(student){
  let media = ((student.nota1 + student.nota2) / 2).toFixed(2) 
  
  if (media >= 7){
    alert(`A media do(a) aluno(a) ${student.name} é: ${media}\n 
    Parabens, ${student.name}! Você foi aprovado(a) no concurso!`)
  }
  else {    
    alert(`A media do(a) aluno(a) ${student.name} é: ${media}\n
    Não foi dessa vez, ${student.name}! Tente novamente`)
  }
}

for (let student of students){
  printAverage(student)
}










