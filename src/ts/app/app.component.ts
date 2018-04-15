import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
    selector: "main",
    template: `
        <div [formGroup]="formGroup">
            <label for="message-input">Message:</label>
            <input type="text" id="message-input" [formControl]="formGroup.controls.messageControl">
            <span *ngIf="formGroup.controls.messageControl.invalid && formGroup.controls.messageControl.touched">
                Please enter a message.
            </span>
        </div>
    `,
})
export class AppComponent {

    public message: string = "";

    public formGroup: FormGroup = new FormGroup({
        messageControl: new FormControl("", Validators.required),
    });
}
