import { Directive } from '@angular/core';
import {NG_VALIDATORS, AbstractControl, Validator} from '@angular/forms';

@Directive({
  selector: '[inputVal]',
  providers: [{provide: NG_VALIDATORS, useExisting: InputValDirective, multi: true}]
})
export class InputValDirective implements Validator{

  emailpattern = /^([A-Za-z0-9_\-\.])+\@(?!(?:[A-Za-z0-9_\-\.]+\.)?([A-Za-z]{2,4})\.\2)([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null  {
    if(this.emailpattern.test(control.value)) {
      return null;
    }
    else return {pattern: true};
  }





}
