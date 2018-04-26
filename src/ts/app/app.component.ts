import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
        <form #contactForm="ngForm" id="contact-form" novalidate>
            <div>Submitted: {{contactForm.submitted}}</div>
            <fieldset #addressGroup="ngModelGroup" ngModelGroup="address">
                <div>Address Group valid: {{addressGroup.valid}}</div>
                <div>
                    <input type="text" #streetInput="ngModel" [(ngModel)]="street" name="streetInput" required>
                    <span *ngIf="streetInput.invalid && streetInput.touched">
                        Street is required.
                    </span>
                    {{street}}
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `,
})
export class AppComponent {
    public street: string = "";
}
