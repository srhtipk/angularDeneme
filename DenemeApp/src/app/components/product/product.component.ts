import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  productExample:Product[]=[
    { productId: 1, productName: "kanepe", categoryId: 2, unitPrice: 5, unitsInStock: 15 },
    { productId: 2, productName: "halı", categoryId: 2, unitPrice: 50, unitsInStock: 15 },
    { productId: 3, productName: "laptop", categoryId: 1, unitPrice: 5, unitsInStock: 15 },
    { productId: 4, productName: "klavye", categoryId: 1, unitPrice: 55, unitsInStock: 15 },
    { productId: 5, productName: "krampon", categoryId: 3, unitPrice: 25, unitsInStock: 15 },
    { productId: 6, productName: "top", categoryId: 3, unitPrice: 15, unitsInStock: 15 },]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      } else {
        this.getAllProducts()
      }
    })
  }

  getAllProducts() {
    this.products =this.productExample;
  }

  getProductsByCategory(catId: number) {
      this.products = this.productExample.filter((p:Product)=>p.categoryId==catId);
  }

}
