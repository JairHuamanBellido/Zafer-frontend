import { Reducer } from 'react';
import { ProductActions } from '../actions/product.action';

export interface ProductState {
  products: string[];
}

const productState: ProductState = {
  products: [],
};

type State = ProductState;
type Action = ProductActions;

export const productReducer: Reducer<State, Action> = (
  state = productState,
  action,
) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};
