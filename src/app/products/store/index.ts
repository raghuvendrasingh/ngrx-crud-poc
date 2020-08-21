import {
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  State,
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { Product } from "../models/product";
import * as ProductActions from "./product.actions";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export const productStateFeatureKey = "productState";

export interface ProductState extends EntityState<Product> {
  error: any;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
  error: undefined,
});

export const reducers = createReducer(
  initialState,
  on(ProductActions.updateProduct, (state, action) => {
    return adapter.updateOne(action.product, state);
  }),
  on(ProductActions.deleteProductSuccess, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),
  on(ProductActions.deleteProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductActions.addProductSuccess, (state, action) => {
    return adapter.addOne(action.product, state);
  }),
  on(ProductActions.addProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductActions.loadProductSuccess, (state, action) => {
    return {
      ...state,
      selectedProduct: action.selectedProduct,
    };
  }),
  on(ProductActions.loadProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return adapter.addAll(action.products, state);
  }),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      error: action.error,
    };
  })
);

export const selectProductsFeature = createFeatureSelector<ProductState>(
  productStateFeatureKey
);

export const selectProducts = createSelector(
  selectProductsFeature,
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.error
);
export const metaReducers: MetaReducer<ProductState>[] = !environment.production
  ? []
  : [];
export const { selectAll, selectIds } = adapter.getSelectors();
