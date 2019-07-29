import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template : `<p>This is warning message!!!!!!!!!!!!!</p>`,
    styles : [`p {
        color: red;
        background-color: lightcoral;
        border: 1px solid red;
        padding: 20px;
    }`]
})
export class WarningAlertComponent {

}
