import { PostService } from './../../services/post.service';
import { Post } from './../../post';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  posts$: Observable<Post[]> = this.postService
    .getPosts()
    .pipe(map(data => data));
  posts: Post[];
  dataSource = this.posts$;
  sub = new Subscription();
  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(10)]],
    content: ['', [Validators.required, Validators.maxLength(40)]],
    category: [''],
  });
  constructor(private postService: PostService, private fb: FormBuilder) {}
  // constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.sub = this.posts$.subscribe((data) => (this.posts = data));
  }

  get titleControl() {
    return this.form.get('title') as FormControl;
  }
  get contentControl() {
    return this.form.get('content') as FormControl;
  }


  create(form: FormGroupDirective): void {
    const formData = this.form.value;
    console.log(formData);
    const authorId = 100;
    this.postService.createPost(formData, authorId).subscribe((data) => {
      console.log(data);
      // this.products.push(data);
    },
    (err) => {
      console.log(err);
    });
    form.resetForm();
  }
}
