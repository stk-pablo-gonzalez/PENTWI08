import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "main",
    template: `
        <form [formGroup]="contactForm" novalidate>
            <div>Submitted: {{contactForm.submitted}}</div>
            <fieldset formGroupName="addressGroup">
                <div>Address Group valid: {{addressGroup.valid}}</div>
                <div>
                    <label for="street-input">Street:</label>
                    <input id="street-input" type="text" name="streetInput" formControlName="streetInput">
                    <span *ngIf="addressGroup.controls.streetInput.invalid
                        && addressGroup.controls.streetInput.touched">
                        Street is required.
                    </span>
                    {{street}}
                </div>
                <div>
                    <label for="city-input">City:</label>
                    <input id="city-input" type="text" name="cityInput" formControlName="cityInput">
                    <span *ngIf="addressGroup.controls.cityInput.invalid
                        && addressGroup.controls.cityInput.touched">
                        City is required.
                    </span>
                    {{city}}
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `,
})
export class AppComponent implements OnInit {
    public addressGroup = new FormGroup({
        streetInput: new FormControl("", [Validators.required]),
        cityInput: new FormControl("", [Validators.required]),
    });

    public contactForm = new FormGroup({
        addressGroup: this.addressGroup,
    });

    public ngOnInit(): void {
        console.log(this.contactForm);
    }
}
