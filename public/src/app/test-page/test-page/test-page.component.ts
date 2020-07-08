import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // products$: Observable<Products[]> = this.crudService
  //   .getProducts()
  //   .pipe(map((data) => data.reverse()));
  // products: Products[];
  // dataSource = this.products$;
  // sub = new Subscription();
  // form = this.fb.group({
  //   p_id: ['', [Validators.required, Validators.maxLength(10)]],
  //   p_name: ['', [Validators.required, Validators.maxLength(40)]],
  //   p_description: ['', [Validators.required, Validators.maxLength(100)]],
  //   p_price: ['', [Validators.required, Validators.maxLength(40)]],
  // });
  // constructor(private crudService: CrudService, private fb: FormBuilder) {}
  constructor() {}

  ngOnInit(): void {
    // this.sub = this.products$.subscribe((data) => (this.products = data));
  }

  // get idControl() {
  //   return this.form.get('p_id') as FormControl;
  // }
  // get nameControl() {
  //   return this.form.get('p_name') as FormControl;
  // }
  // get descriptionControl() {
  //   return this.form.get('p_description') as FormControl;
  // }
  // get priceControl() {
  //   return this.form.get('p_price') as FormControl;
  // }

  submit(): void {
    // const formData = this.form.value;
    // console.log(formData);
    // this.crudService.createProduct(formData).subscribe((data) => {
    //   console.log(data);
    //   // this.products.push(data);
    // });
    console.log('登録');
  }
}
