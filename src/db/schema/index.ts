// Barrel File - Um arquivo que reexporta todos os arquivos que tem aqui dentro

import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
  rooms,
  questions,
}