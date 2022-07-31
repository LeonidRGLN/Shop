import {Component} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ProductService} from "../../services/product.service";

@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss'],
  providers: []
})

export class AdminComponent {

  myForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private httpService: ProductService) {
    this.myForm = formBuilder.group({
      'productType': ['', [Validators.required]],
      'productTitle': ['', [Validators.required]],
      'productPrice': ['', [Validators.required]],
      'productImg': ['', [Validators.required]]
    })
  }

  addProduct({value: {productType, productTitle, productPrice, productImg}}: any) {
    this.httpService.createProduct({productType, productTitle, productPrice, productImg})
    this.myForm.reset()
    alert("продукт отправлен")
  }

}
