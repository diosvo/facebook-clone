import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  postForm: FormGroup

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this._fb.group({
      textPost: ['']
    })

    this.onSubmit()
  }

  onSubmit() {
    console.log(this.textPost.value)
  }

  get textPost() {
    return this.postForm.get('textPost')
  }

}
