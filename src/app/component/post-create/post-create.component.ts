import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../data/post';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm!: FormGroup; // Note: Use '!' to tell TypeScript that this property will be initialized in ngOnInit
  categories: string[] = [];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      category: ['', Validators.required],
      content: ['', [Validators.required, Validators.maxLength(2500)]]
    });

    this.categoryService.getCategories().subscribe(
      (categories: string[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Failed to fetch categories', error);
        // Handle error if necessary
      }
    );
  }

  onSubmit(): void {
    if (this.postForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please review your post',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    } else {
      const newPost: Post = this.postForm.value;
      this.postService.createPost(newPost).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Post Submitted Successfully',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          }).then(() => {
            this.router.navigate(['/']);
          });
        },
        (error) => {
          console.error('Failed to create post', error);
          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'There was an error submitting your post. Please try again.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          });
        }
      );
    }
  }
}
