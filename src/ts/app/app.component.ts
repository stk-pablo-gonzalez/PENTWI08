import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: "main",
    template: `
        <div>
            <label for="message-input">Message:</label>
            <input type="text" id="message-input" [formControl]="messageControl">
            <span *ngIf="messageControl.invalid && messageControl.touched">
                Please enter a message.
            </span>
        </div>
    `,
})
export class AppComponent {

    public message: string = "";
    public messageControl: FormControl = new FormControl("", Validators.required);

}
