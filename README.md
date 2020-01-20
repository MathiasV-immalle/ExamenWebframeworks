# ExamenWebframeworks

## Vraag 1:
> Download bijgevoegd project, en voer 'npm install' uit (als dit niet werkt vanaf de eerste keer, voer het dan opnieuw uit).

> Pas de ProductService klasse aan zodat 'getAllProducts' twee hard-coded producten teruggeeft. Zet enkel 'product.service.ts' op github.
```js
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  url = "http://localhost:3000/";

   constructor() {}

   getAllProducts(){
      let product1 = { name: "NikeShoe", brand: "Nike", description: "shoe", price: 50.99}
      let product2 = { name: "AdidasShoe", brand: "Adidas", description: "shoe", price: 50.99}
      let productLijst = [product1, product2];
      return productLijst;
    }
}
```

## Vraag 2:
[Zie screenshots](https://github.com/MathiasV-immalle/ExamenWebframeworks/tree/master/afb). Code staat ook in dit project.
