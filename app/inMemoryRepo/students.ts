export interface IStudent {
  id: number;
  nome: string;
  turma: string;
  pontuacao: number;
  imgUrl?: string;
}

export const sortStudents = (students: IStudent[]): IStudent[] => {
  students.sort((a: IStudent, b: IStudent) => {
    return b.pontuacao - a.pontuacao;
  });

  return students;
};

const students: IStudent[] = [
  {
    id: 1,
    nome: "Rafael Emanuel",
    turma: "M2A",
    pontuacao: 99,
    imgUrl:
      "https://img.freepik.com/fotos-premium/estudante-cansado-de-cachorro-bonito-lendo-um-livro-para-ensinar-licoes-adormece_231786-3468.jpg",
  },
  {
    id: 2,
    nome: "Clingeam Martins",
    turma: "T2A",
    pontuacao: 98,
    imgUrl:
      "https://img.freepik.com/fotos-premium/estudante-cansado-de-cachorro-bonito-lendo-um-livro-para-ensinar-licoes-adormece_231786-3468.jpg",
  },
  {
    id: 3,
    nome: "Ster Leal",
    turma: "E2A",
    pontuacao: 90,
    imgUrl:
      "https://img.freepik.com/fotos-premium/estudante-cansado-de-cachorro-bonito-lendo-um-livro-para-ensinar-licoes-adormece_231786-3468.jpg",
  },
  {
    id: 4,
    nome: "Ibson Emmanuel",
    turma: "I2A",
    pontuacao: 120,
    imgUrl:
      "https://img.freepik.com/fotos-premium/estudante-cansado-de-cachorro-bonito-lendo-um-livro-para-ensinar-licoes-adormece_231786-3468.jpg",
  },
];
export default students;
