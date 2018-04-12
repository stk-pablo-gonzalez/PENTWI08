import { Component } from "@angular/core";

@Component({
    selector: "main",
    styles: [
        "input.ng-touched.ng-invalid { border: 2px solid red; margin: 5px; }",
        "input + span { display: none; }",
        "input.ng-invalid.ng-touched + span { display: inline; }",
    ],
    template: `
        <form novalidate>
            <fieldset ngModelGroup="someGroup">
                <input type="text" id="message-input" name="messageInput" [(ngModel)]="message" required>
                <span>Message is required.</span>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public message: string = "Hello World!";

}
