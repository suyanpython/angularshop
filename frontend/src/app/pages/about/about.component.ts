import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { CartComponent } from '../../components/cart/cart.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FooterComponent } from "../../shared-ui/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CartComponent, NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
@ViewChild(CartComponent) cartComponent!: CartComponent;
  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }

}
