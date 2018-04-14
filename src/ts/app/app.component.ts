import { Component } from "@angular/core";

@Component({
    selector: "main",
    styles: [
        "input.ng-touched.ng-invalid { border: 2px solid red; margin: 5px; }",
        "input + span { display: none; }",
        "input.ng-invalid.ng-touched + span { display: inline; }",
    ],
    template: `
        <form #f="ngForm">
            <span *ngIf="f.valid">The Form is valid</span>
            <fieldset #g="ngModelGroup" ngModelGroup="someGroup">
                <span *ngIf="g.valid">The model group is valid</span>
                <input #c="ngModel" type="text" id="message-input" name="messageInput" [(ngModel)]="message" required>
                <span>Message is required.</span>
                <span *ngIf="c.valid">Message is valid.</span>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public message: string = "";

}
