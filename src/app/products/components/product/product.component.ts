import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
import { ProductService } from "../../services/product.service";

import { Product } from "../../models/product";
import { Store, select } from "@ngrx/store";
import * as fromActions from "../../store/product.actions";
import { Observable } from "rxjs";
import { ProductState } from "../../store";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private store: Store<ProductState>
  ) {}

  ngOnInit() {
    this.product$ = this.service.getProduct(
      this.route.snapshot.paramMap.get("id")
    );
  }

  deleteProduct(id: string) {
    // const productsObserver = {
    //   next: () => {
    //     console.log("Product Deleted");
    //     this.router.navigate(["/product/list"]);
    //   },
    //   error: (err) => console.error(err),
    // };
    // this.service.deleteProduct(id.toString()).subscribe(productsObserver);
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }
}
