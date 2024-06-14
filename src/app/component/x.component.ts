import {OnInit} from "@angular/core";
import {Category} from "../data/category";
import {CategoryService} from "../services/category.service";

export class XComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}