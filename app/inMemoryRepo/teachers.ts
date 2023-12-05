export interface ITeacher {
  id: number;
  nome: string;
  turmas: string[];
  imgUrl: string;
  emailpessoal?: string;
  emailinstitucional?: string;
  materiaslecionadas?: string[];
  formacao?: string;
  nivelsuperior?: string;
}

const teachers: ITeacher[] = [
  {
    id: 1,
    nome: "Sérgio Roberto",
    turmas: ["I2A", "I2B", "I2C"],
    imgUrl:
      "https://img.freepik.com/premium-photo/cat-teacher-white-shirt-vest-poses-against-background-dark-school-board_115318-8015.jpg",
    emailpessoal: "sergioroberto@gmail.com",
    emailinstitucional: "sergio@fmm.org.br",
    materiaslecionadas: ["LTP", "API", "PDS"],
    formacao: "Analise e Desenvolvimento de Sistemas",
    nivelsuperior: "Mestre",
  },
  {
    id: 2,
    nome: "Allan Santos",
    turmas: ["I2A", "I2B", "I2C"],
    imgUrl:
      "https://img.freepik.com/premium-photo/cat-teacher-white-shirt-vest-poses-against-background-dark-school-board_115318-8015.jpg",
  },
  {
    id: 3,
    nome: "Rodrigo Lopes",
    turmas: ["I2A", "I2B", "I2C"],
    imgUrl:
      "https://img.freepik.com/premium-photo/cat-teacher-white-shirt-vest-poses-against-background-dark-school-board_115318-8015.jpg",
  },
  {
    id: 4,
    nome: "Stone Mamed",
    turmas: ["I2A", "I2B", "I2C"],
    imgUrl:
      "https://img.freepik.com/premium-photo/cat-teacher-white-shirt-vest-poses-against-background-dark-school-board_115318-8015.jpg",
  },
  {
    id: 5,
    nome: "Raissa Almeida",
    turmas: ["I2A", "I2B", "I2C"],
    imgUrl:
      "https://img.freepik.com/premium-photo/cat-teacher-white-shirt-vest-poses-against-background-dark-school-board_115318-8015.jpg",
  },
];

export default teachers;
