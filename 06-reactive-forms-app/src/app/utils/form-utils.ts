import { AbstractControl, FormArray, FormGroup, ValidationErrors } from "@angular/forms";


function sleep(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(true);
    },2500)
  })
}

export class FormUtils{

  //Expresiones regulares
  static namePattern = "([a-zA-Z]+) ([a-zA-Z]+)";
  static emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  static notOnlySpacesPattern = "^[a-zA-Z0-9]+$";

  //Errores regulares
  static getTextError(errors:ValidationErrors){
    console.log(errors);

    for(const key of Object.keys(errors)){
      switch (key){
        case 'required':
          return "Este campo es requerido"
        case "minlength":
          return `Minimo de ${errors['minlength'].requiredLength} caracteres`
        case 'min':
          return `Valor minimo de ${errors['min'].min}`
        case "email":
          return "El valor ingresado no es un correo electronico";
        case "emailTaken":
          return "El correo electronico esta usado por otro usuario";
        case "pattern":
          if(errors['pattern'].requiredPattern==FormUtils.emailPattern){
            return "El correo electronico no es permitido"
          }
          if(errors['pattern'].requiredPattern==FormUtils.namePattern){
            return "El nombre no esta permitido"
          }
          if(errors['pattern'].requiredPattern.includes(FormUtils.notOnlySpacesPattern)){
            return "Not only spaces pattern";
          }
          return "Error de patron contra expresion regular"
        default:
          return `Error de validacion no controlado ${key}`;
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

  static isFieldOneEqualFieldTwo(field1:string,field2:string){
    return (formGroup:AbstractControl) =>{
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;
      return field1Value === field2Value ? null : {passwordsNotEqual:true} ;
    }
  }

  static async checkingServerResponse(control:AbstractControl):Promise<ValidationErrors|null>{

    await sleep();

    const formValue = control.value;

    if(formValue=="hola@mundo.com"){
      return{
        emailTaken:true
      }
    }

    return null;
  }

}
