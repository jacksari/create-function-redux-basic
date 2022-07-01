import { Action } from "../ngrxFake/ngrx";

export const incrementadorAction: Action = {
  type: "INCREMENTAR",
};

export const decrementadorAction: Action = {
  type: "DECREMENTAR",
  payload: 5,
};

export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};

export const resetAction: Action = {
    type: "RESET",
  };
