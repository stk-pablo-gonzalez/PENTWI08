import { Component } from "@angular/core";

@Component({
    selector: "main",
    styles: [
        "input.ng-touched.ng-invalid { border: 2px solid red; margin: 5px; }",
        "input + span { display: none; }",
        "input.ng-invalid + span { display: inline; }",
    ],
    template: `
        <form>
            <fieldset ngModelGroup="someGroup">
                <div>
                    <label for="make-required">Make Required:</label>
                    <input type="checkbox" id="make-required" [(ngModel)]="makeRequired" name="makeRequiredInput"
                        required>
                    <span>Make required is required.</span>
                </div>
                <div>
                    <label for="message-input">Message:</label>
                    <input type="text" id="message-input" name="messageInput" [(ngModel)]="message"
                        [required]="makeRequired">
                    <span>Message is required.</span>
                </div>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public message: string = "";

}
