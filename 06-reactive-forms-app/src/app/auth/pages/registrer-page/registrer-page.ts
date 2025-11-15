import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-registrer-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './registrer-page.html',
})
export class RegistrerPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;
  myForm = this.fb.group({
    name:['',[Validators.required, Validators.pattern(FormUtils.namePattern)]],
    email:['',[Validators.required,Validators.email, Validators.pattern(FormUtils.emailPattern)],[FormUtils.checkingServerResponse]],
    username: ['',[Validators.required, Validators.minLength(6), Validators.pattern(FormUtils.notOnlySpacesPattern)]],
    password: ['',[Validators.required,Validators.minLength(6)]],
    confirmPassword: ['',Validators.required]
  },{
    validators: [
      FormUtils.isFieldOneEqualFieldTwo('password','confirmPassword')
    ]
  })

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
