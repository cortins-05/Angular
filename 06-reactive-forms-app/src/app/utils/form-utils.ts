import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils{

  //Errores regulares
  static getTextError(errors:ValidationErrors){
    for(const key of Object.keys(errors)){
      switch (key){
        case 'required':
          return "Este campo es requerido"
        case "minlength":
          return `Minimo de ${errors['minlength'].requiredLength} caracteres`
        case 'min':
          return `Valor minimo de ${errors['min'].min}`
      }
    }
    return null
  }

  static isValidField(form:FormGroup,fieldname:string):boolean|null{
    return !!form.controls[fieldname].errors&&form.controls[fieldname].touched;
  }

  static getFieldError(form:FormGroup, fieldname:string):string|null{
    if(!form.controls[fieldname])return null;
    const errors = form.controls[fieldname].errors ?? {};
    return FormUtils.getTextError(errors);
  }

  static isValidFieldInArray(formArray:FormArray, index:number){
    return(
      formArray.controls[index].errors && formArray.controls[index].touched
    )
  }

  static getFieldErrorInArray(form:FormArray, index:number):string|null{
    if(form.controls.length==0)return null;
    const errors = form.controls[index].errors ?? {};
    return FormUtils.getTextError(errors);
  }

}
