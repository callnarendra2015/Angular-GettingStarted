import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../pruductModel';


@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = "Product Detail"
  product: Iproduct;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');

    this.title += `:${id}`;
    this.product =
    {
      "productId": id,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2018",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }

  }
  onBack() {
    this.router.navigate(['/products'])
  }


}
