import { Component } from "@angular/core";

interface ContactData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

@Component({
    selector: "main",
    template: `
    <form>
        <div>
            <label for="first-name-input">First Name:</label>
            <input type="text" id="first-name-input" name="firstNameInput" [(ngModel)]="contact.firstName">
        </div>
        <div>
            <label for="last-name-input">Last Name:</label>
            <input type="text" id="last-name-input" name="lastNameInput" [(ngModel)]="contact.lastName">
        </div>
        <fieldset ngModelGroup="methodsOfContact">
            <legend>Methods of Contact</legend>
            <div>
                <label for="phone-input">Phone:</label>
                <input type="text" id="phone-input" name="phoneInput" [(ngModel)]="contact.phone">
            </div>
            <div>
                <label for="email-input">Email:</label>
                <input type="text" id="email-input" name="emailInput" [(ngModel)]="contact.email">
            </div>
        </fieldset>
    </form>
    `,
})
export class AppComponent {

    public contact: ContactData = {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""   
    };

}
