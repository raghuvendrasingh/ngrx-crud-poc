import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductState } from "../../store";
import { Store } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { updateProduct } from "../../store/product.actions";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"],
})
export class ProductEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private store: Store<ProductState>
  ) {}
  model: any = {};

  ngOnInit() {
    this.service
      .getProduct(this.route.snapshot.paramMap.get("id"))
      .subscribe((product) => (this.model = product));
  }

  onSubmit() {
    const update: Update<Product> = {
      id: this.model.id,
      changes: this.model,
    };
    this.store.dispatch(updateProduct({ product: update }));
  }
}
