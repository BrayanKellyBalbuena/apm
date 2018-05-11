import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductResolver implements Resolve<IProduct>{

    constructor(private productService: ProductService,
                private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct>{
        let id = route.params['id'];
        if(isNaN(id)){
            console.error(`Product id was not a number: ${id}`);
            this.router.navigate(['/products']);
            return Observable.of(null);
        }
        return this.productService.getProduct(+id)
                    .map(p => {
                        if(p){
                            console.info(`Product was not found: ${id}`);
                            return p;
                        }
                        console.info(`Product was not found: ${id}`);
                        this.router.navigate(['/products']);
                        return null;
                    })
                    .catch(error => {
                        console.error(`Retrieval error: ${error}`);
                        this.router.navigate(['/products']);
                        return Observable.of(null);
                    });
       
    }
}