import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { ProductState } from "../../store";
import { Store } from "@ngrx/store";
import { addProduct, addProductSuccess } from "../../store/product.actions";
@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"],
})
export class ProductAddComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private store: Store<ProductState>
  ) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.store.dispatch(addProduct({ product: f.value }));
  }
}
