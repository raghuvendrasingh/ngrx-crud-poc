import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product";
import { Observable } from "rxjs";
import { Update } from "@ngrx/entity";

export const loadProducts = createAction(
  "[Product List Component] Load Products"
);

export const loadProductsSuccess = createAction(
  "[Product Effect] Load Products Success",
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  "[Product Effect] Load Products Failure",
  props<{ error: any }>()
);
//Load Individual Product
export const loadProduct = createAction(
  "[Product Component] Load Product",
  props<{ id: string }>()
);

export const loadProductSuccess = createAction(
  "[Product Effect] Load Product Success",
  props<{ selectedProduct: Product }>()
);

export const loadProductFailure = createAction(
  "[Product Effect] Load Product Failure",
  props<{ error: any }>()
);
//Add Product Actions
export const addProduct = createAction(
  "[Product Add Component] Add Product",
  props<{ product: Observable<Product> }>()
);
export const addProductSuccess = createAction(
  "[Product Add Effect] Add Product Success",
  props<{ product: Product }>()
);
export const addProductFailure = createAction(
  "[Product Add Effect] Add Product Failure",
  props<{ error: any }>()
);
//Edit Component
export const updateProduct = createAction(
  "[Product Edit Component] Update Product",
  props<{ product: Update<Product> }>()
);
//Delete Component

export const deleteProduct = createAction(
  "[Product Components] Delete Product",
  props<{ id: string }>()
);
export const deleteProductSuccess = createAction(
  "[Product Delete Effect] Delete Product",
  props<{ id: string }>()
);
export const deleteProductFailure = createAction(
  "[Product Delte Effect] Delete Product",
  props<{ error: any }>()
);
