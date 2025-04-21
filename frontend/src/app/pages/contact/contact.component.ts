import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { CartComponent } from '../../components/cart/cart.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FooterComponent } from "../../shared-ui/footer/footer.component";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CartComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild(CartComponent) cartComponent!: CartComponent;
  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }

}
