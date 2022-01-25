import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  currentCategory!: Category;
  emptyCategory!:Category;

  constructor() { }

  categories: Category[] = [
    { categoryId: 1, categoryName: "Elektronik" },
    { categoryId: 2, categoryName: "Ev dekorasyon" },
    { categoryId: 3, categoryName: "Spor" }
  ]

  ngOnInit(): void {
  }

  getCurrentCategory(category: Category) {
    //console.log(category.categoryId);
    this.currentCategory = category;
    //console.log(this.currenCategory);
  }

  getCurrentCategoryClass(category: Category) {
    if (this.currentCategory == category) {
      return "active";
    } else {
      return "";
    }
  }

  getAllCategoriesClass() {
    if (!this.currentCategory) {
      return "active";
    } else {
      return "";
    }
  }

  setCurrentCategoryEmpty() {
    this.currentCategory = this.emptyCategory;
  }

}
