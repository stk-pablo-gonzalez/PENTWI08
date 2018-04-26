import { Component, ViewChild, ViewChildren, AfterViewInit, QueryList } from "@angular/core";
import { NgForm, NgModel, NgModelGroup } from "@angular/forms";

@Component({
    selector: "main",
    template: `
        <form id="contact-form" novalidate>
            <div>Submitted: {{contactForm.submitted}}</div>
            <fieldset #addressGroup="ngModelGroup" ngModelGroup="address">
                <div>Address Group valid: {{addressGroup.valid}}</div>
                <div>
                    <label for="street-input">Street:</label>
                    <input id="street-input" type="text" #streetInput="ngModel" [(ngModel)]="street" 
                        name="streetInput" required>
                    <span *ngIf="streetInput.invalid && streetInput.touched">
                        Street is required.
                    </span>
                    {{street}}
                </div>
                <div>
                    <label for="city-input">City:</label>
                    <input type="text" #cityInput="ngModel" [(ngModel)]="city" name="cityInput" required>
                    <span *ngIf="cityInput.invalid && cityInput.touched">
                        City is required.
                    </span>
                    {{street}}
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `,
})
export class AppComponent implements AfterViewInit {
    public street: string = "";
    public city: string = "";

    @ViewChild(NgForm)
    public contactForm: NgForm;

    @ViewChildren(NgModel)
    public contactControls: QueryList<NgModel>;

    public ngAfterViewInit(): void {
        console.log(this.contactForm);
        console.log(this.contactControls);

        console.log(this.contactControls["streetInput"]);
    }
}
