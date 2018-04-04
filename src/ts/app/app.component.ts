import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from "@angular/forms";

@Component({
    selector: "main",
    template: `
    <form [formGroup]="profileForm">
    <h1>Profile</h1>
        <div>
            <label for="first-name-input">First Name:</label>
            <input type="text" id="first-name-input" formControlName="firstNameInput">
            <br>Value: {{profileForm.controls['firstNameInput'].value}}
        </div>
        <div>
            <label for="last-name-input">Last Name:</label>
            <input type="text" id="last-name-input" formControlName="lastNameInput">
            <br>Value: {{profileForm.controls['lastNameInput'].value}}
        </div>
        <div formArrayName="addressGroups">
            <fieldset *ngFor="let addressGroup of profileForm.controls['addressGroups'].controls" [formGroup]="addressGroup">
                <h3>Address</h3>
                <div>
                    <label for="street-input">Street:</label>
                    <input type="text" id="street-input" formControlName="streetInput">
                    <br>Value: {{addressGroup.controls['streetInput'].value}}
                </div>
                <div>
                    <label for="city-input">city:</label>
                    <input type="text" id="city-input" formControlName="cityInput">
                    <br>Value: {{addressGroup.controls['cityInput'].value}}
                </div>
                <div>
                    <label for="state-input">state:</label>
                    <input type="text" id="state-input" formControlName="stateInput">
                    <br>Value: {{addressGroup.controls['stateInput'].value}}
                </div>
                <div>
                    <label for="zip-code-input">zipCode:</label>
                    <input type="text" id="zip-code-input" formControlName="zipCodeInput">
                    <br>Value: {{addressGroup.controls['zipCodeInput'].value}}
                </div>
            </fieldset>
        </div>
        <button type="button" (click)="addAddressGroup()">Add Address</button>
    </form>
    `,
})
export class AppComponent {
    public profileForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.profileForm = this.formBuilder.group({
            firstNameInput: [""],
            lastNameInput: [""],
            addressGroups: this.formBuilder.array([
                this.formBuilder.group({
                    streetInput: [""],
                    cityInput: [""],
                    stateInput: [""],
                    zipCodeInput: [""],
                })
            ])
        });
    }

    public addAddressGroup() {
        const fa = this.profileForm.controls["addressGroups"] as FormArray;

        fa.push(this.newAddressGroup());
    }

    private newAddressGroup() {
        return new FormGroup({
            streetInput: new FormControl(""),
            cityInput: new FormControl(""),
            stateInput: new FormControl(""),
            zipCodeInput: new FormControl(""),
        });
    }
}
