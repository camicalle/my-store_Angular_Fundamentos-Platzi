import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store'
  name = 'Camiliño';
  age = 18;
  img = 'https://img.freepik.com/vector-gratis/conjunto-logotipos_53876-120502.jpg'

  btnDisabled = true;
  person = {
    name: 'Camiliño',
    age: 18,
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
  }

  //Event click
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseage() {
    this.person.age += 1;
  }

  //Event scroll
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  //Event keyup
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
