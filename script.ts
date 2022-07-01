import {
  multiplicarAction,
  resetAction,
  incrementadorAction,
  decrementadorAction,
} from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrxFake/ngrx";

class Store<T> {
  private state: T;
  constructor(private reducer: Reducer<T>, state: T) {
    this.state = state;
  }

  getState(): T {
    return this.state;
  }

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store<number>(contadorReducer, 10);

console.log("NUM: ", store.getState());

store.dispatch(incrementadorAction);
store.dispatch(multiplicarAction);
store.dispatch(decrementadorAction);

console.log("NUM: ", store.getState());

//Usando el reducer

// const num1 = reducer(10, multiplicarAction);
// console.log({ num1 });

// const num2 = reducer(10, { type: "DIVIDIR", payload: 5 });
// console.log({ num2 });

// const num3 = reducer(10, resetAction);
// console.log({ num3 });
