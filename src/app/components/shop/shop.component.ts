import {Component, OnInit} from '@angular/core';

import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/category';
import { Router } from '@angular/router';
import {Product} from '../../models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories: Category [];

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onCategoryClick(category) {
    let link = ['/category', category.id];
    this.router.navigate(link);
  }

}
