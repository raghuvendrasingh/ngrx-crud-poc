import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, productStateFeatureKey, selectAll } from "./index";
export const selectProductState = createFeatureSelector<ProductState>(
  productStateFeatureKey
);
export const selectProducts = createSelector(selectProductState, selectAll);
export const selectedProduct = createSelector(
  selectProductState,
  (state: ProductState) => state.selectedProduct
);
