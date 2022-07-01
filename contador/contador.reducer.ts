import { Action } from "../ngrxFake/ngrx";

export function contadorReducer(state = 10, action: Action) {
  if (action.type === "INCREMENTAR") {
    return state + 1;
  }

  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "DECREMENTAR":
      return state - action.payload;
    case "MULTIPLICAR":
      return state * action.payload;
    case "DIVIDIR":
      return state / action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }

  return state;
}
