import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ERROR_COLLECTOR_TOKEN } from "@angular/compiler";

@Component({
    selector: "main",
    template: `
        <form [formGroup]="contactForm" novalidate>
            <div>Submitted: {{contactForm.submitted}}</div>
            <fieldset formGroupName="addressGroup">
                <legend>Address</legend>
                <details *ngIf="addressGroup.invalid">
                    <summary>
                        Address is invalid
                        <small>(open for more details)</small>
                    </summary>
                    <ul>
                        <ng-template ngFor let-error [ngForOf]="getGroupErrors()">
                            <li *ngIf="error == 'streetInput:required'">Street is a required field.</li>
                            <li *ngIf="error == 'cityInput:required'">City is a required field.</li>
                        </ng-template>
                    </ul>
                </details>
                <section>
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
                </section>
            </fieldset>
            <button type="submit" *ngIf="!addressGroup.invalid && addressGroup.touched">Submit</button>
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

    public getGroupErrors() {
        const groupErrors = [].concat(Object.keys(this.addressGroup.controls)
            .filter((controlKey) => this.addressGroup.controls[controlKey].errors)
            .map((controlKey) => [controlKey, Object.keys(this.addressGroup.controls[controlKey].errors)])
            .map(([ controlKey, errorKeys ]: [string, string[] ]) =>
                errorKeys.map((errorKey) => controlKey + ":" + errorKey)));

        console.debug(groupErrors);
        return groupErrors;
    }
}
