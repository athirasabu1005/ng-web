import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products={
    id:'',
    pname:'',
    price:'',
    quantity:''
  }
  constructor(private serv:ProductService){}
  ngOnInit(): void {
    
  }
  add(){
    console.log(this.products);
    this.serv.addproducts(this.products).subscribe((data=>{
      alert(`The data is posted successfully at id ${data.id}`)
    }))
  }

}
