import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ZBClient } from 'zeebe-node';
@Component({
  
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
    name = 'Angular';
}
const zbc = new ZBClient("https://ont-1.operate.camunda.io/fbba6b47-d14a-4657-96a2-80a95bd5e1b1/");
zbc.topology()
  .catch(console.error)
  .then(res => console.log(JSON.stringify(res, null, 2)))
bootstrapApplication(App);
