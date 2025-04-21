import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../models/review.model';
import { ReviewService } from '../../services/review.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() productId!: number;
  reviews: Review[] = [];
  sortOption: string = 'newest';

  // constructor(private reviewService: ReviewService) {}

  constructor(private reviewService: ReviewService) {
    // Use the service to fetch the reviews
    this.reviews = this.reviewService.getReviewsByProductId(this.productId);
  }

  ngOnInit() {
    this.loadReviews();
  }

  loadReviews() {
    this.reviews = this.reviewService.getReviewsByProductId(this.productId);
    this.sortReviews();
  }

  sortReviews() {
    switch (this.sortOption) {
      case 'newest':
        this.reviews.sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case 'oldest':
        this.reviews.sort((a, b) => a.date.getTime() - b.date.getTime());
        break;
      case 'highest':
        this.reviews.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        this.reviews.sort((a, b) => a.rating - b.rating);
        break;
    }
  }

  onSortChange() {
    this.sortReviews();
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
