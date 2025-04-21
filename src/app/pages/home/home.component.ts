import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CartComponent } from '../../components/cart/cart.component';
import { Product } from '../../models/product.model';
import { FooterComponent } from "../../shared-ui/footer/footer.component";

interface CarouselSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @ViewChild(CartComponent) cartComponent!: CartComponent;

  products: Product[] = []; // ✅ Declared only once
  filteredProducts: Product[] = [];
  currentPage = 1;
  itemsPerPage = 9;
  currentSlide = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  carouselSlides: CarouselSlide[] = [
    {
      title: 'Discover Inspired Living',
      subtitle: 'Explore Elevated Living',
      description: 'Discover elevated living at its finest with ExampleBoutique Shop. Our curated collection combines timeless elegance with modern flair, offering furnishings that redefine style and comfort.',
      image: 'assets/images/placeholders/living-room-1.jpg',
      alt: 'Modern living room setup'
    },
    {
      title: 'Premium Comfort',
      subtitle: 'Experience Luxury',
      description: 'Indulge in the perfect blend of comfort and style with our premium furniture collection. Each piece is carefully selected to bring both functionality and elegance to your living space.',
      image: 'assets/images/placeholders/living-room-2.jpg',
      alt: 'Luxury furniture showcase'
    }
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  
    // ✅ Direct assignment since `getProducts()` returns a static array
    this.products = this.productService.getProducts();
    this.getFilteredProducts();
  }

  getFilteredProducts(): void {
    this.filteredProducts = this.products.filter(product => product.id >= 3 && product.id <= 8);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.carouselSlides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getPartialStar(rating: number): number {
    return rating % 1;
  }

  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product.id);
  }
}