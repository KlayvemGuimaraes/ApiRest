// Define uma interface para a entidade User
export default interface User {
  id?: number; // Campo opcional
  nome: string; // Campo obrigatório
  email: string; // Campo obrigatório
  senha?: string; // Campo opcional
}