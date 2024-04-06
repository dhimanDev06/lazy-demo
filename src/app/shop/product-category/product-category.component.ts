import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent {

  productList:any;

  headerConfig: any[] = [
		{ headerName: 'ID', field: 'id' },
		{ headerName: 'Title', field: 'title' },
		{ headerName: 'Price', field: 'price' }
	];
  constructor(
    private commService: CommonService, // DI
  ) { 

    localStorage.getItem('userModuleData') ? localStorage.getItem('userModuleData') : '';
    console.log("stringSubject ",this.commService.stringSubject);
    this.callProduct()
  }
  callProduct() {
    this.commService.getProduct().subscribe((res:any)=>{
      console.log('res',res);
      this.productList = res.products
    })
  }

  data:any;
  loadAPI(){
    // this.commService.getApi()
    this.commService.getApi().subscribe(res =>{
      console.log("Res", res);
      if(res){
        this.data = res
      }
    })
  }
  passData:any

  counter: number = 1;
  transferData(){
    this.counter = this.counter + 1;
    this.passData = "Dhiman prodect "+this.counter
    this.commService.passValue(this.passData)
  }





	// rowData = [
	// 	{ make: 'Toyota', model: 'Celica', price: 35000 },
	// 	{ make: 'Ford', model: 'Mondeo', price: 32000 },
	// 	{ make: 'Porsche', model: 'Boxster', price: 72000 }
	// ];
}