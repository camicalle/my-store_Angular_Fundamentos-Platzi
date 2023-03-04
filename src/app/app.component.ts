import { Component } from '@angular/core';
import { Product } from './product.model';

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

  names: String[] = ['Nico', 'Juli', 'Santi'] //Array names
  newName = '';
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }

  //Array of Object products
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
      category: 'all',
    }
  ]

  widthImage = 10;
}
