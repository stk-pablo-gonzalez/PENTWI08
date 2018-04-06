import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
        <div>{{message}}</div>
        <div>
            <label for="message-input">Message:</label>
            <input type="text" id="message-input" name="messageInput" [(ngModel)]="message">
        </div>
    `,
})
export class AppComponent {

    public message: string = "Hello World!";

}
