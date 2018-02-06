import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from  '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  formErrors = {

    ' firstname': '',
    'lastname': '',
    'telnum': '',
    'email':''
  };
  validationMessages = {
    'firstname': {
      'required': 'first Name is required',
      'minlength': 'First Name must be at least 2 characters long ',
      'maxlength': 'First Name cannot be more 25 characters long'
    },
    'lastname': {
      'required': 'last Name is required',
      'minlength': 'Last Name must be at least 2 characters long ',
      'maxlength': 'Last Name cannot be more 25 characters long'
    },
    'telnum':{
      'required':'tel. Num is required',
      'pattern': ' tel. number must contains only number '

    },
'email':{

  'required':'email is required',
  'email': 'Email no in valid format'
}

  };

  constructor( private fb: FormBuilder) {

    this.createForm();
   }

  ngOnInit() {
  }

createForm(){
this.feedbackForm = this.fb.group({
firtsname:[ '', [Validators.required,Validators.minLength(2), Validators.maxLength(25)]],
lastname: [ '', [Validators.required,Validators.minLength(2), Validators.maxLength(25)]],
telnum: [ 0, [Validators.required, Validators.pattern]],
email: [ '', [Validators.required, Validators.email]],
agree: false,
contacttype: 'None',
message: '',
});

this.feedbackForm.valueChanges
  .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(''); // reset form validations messages
}
onValueChanged(data: any){

if (!this.feedbackForm) {return;}
const form = this.feedbackForm;
for (const field in this.formErrors){

  this.formErrors[field] = '';
  const control = form.get(field);
  if (control && control.dirty && !control.valid ){

    const messages = this.validationMessages[field];
    for (const key in control.errors){

      this.formErrors[field] += messages[key] + ' ';
    }
  }
}

}

onSubmit() {
  this.feedback = this.feedbackForm.value;
  console.log(this.feedback);
  this.feedbackForm.reset({
    firstname:'',
    lastname:'',
    telnum:'',
    email:'',
    agree:false,
    contacttype:'None',
    message:''
    
  });
}


}
