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
                    <label for="message-input">Message:</label>
                    <input type="text" id="message-input" name="messageInput" [(ngModel)]="message"
                        minlength="5" maxlength="10" required>
                    <span>Message has to be at least 5 chars long.</span>
                </div>
            </fieldset>
        </form>
    `,
})
export class AppComponent {

    public message: string = "";

}
