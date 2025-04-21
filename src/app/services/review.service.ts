import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviews: Review[] = [
    {
      id: 1,
      productId: 1,
      userName: "Sophie Martin",
      rating: 5,
      comment: "Excellente expérience d'achat ! Le canapé est magnifique et exactement comme sur les photos. La livraison a été rapide et le service client très professionnel. Je recommande vivement.",
      date: new Date('2025-04-15')
    },
    {
      id: 2,
      productId: 1,
      userName: "Pierre Dubois",
      rating: 4,
      comment: "Très bon rapport qualité-prix. Le canapé est confortable et le tissu semble durable. Seul petit bémol : le délai de livraison était un peu plus long que prévu. Mais le produit en vaut la peine.",
      date: new Date('2025-04-10')
    },
    {
      id: 3,
      productId: 1,
      userName: "Marie Lambert",
      rating: 5,
      comment: "Service impeccable ! Le canapé est superbe et très confortable. La livraison a été effectuée avec soin et les livreurs étaient très professionnels. Je n'hésite pas à recommander cette boutique.",
      date: new Date('2025-04-05')
    },
    {
      id: 4,
      productId: 1,
      userName: "Lucas Bernard",
      rating: 3,
      comment: "Le canapé est de bonne qualité mais les coussins sont un peu plus fermes que ce que j'espérais. Le service client a été très réactif à mes questions. Dans l'ensemble, une expérience correcte.",
      date: new Date('2025-04-01')
    },
    {
      id: 5,
      productId: 1,
      userName: "Emma Petit",
      rating: 5,
      comment: "Absolument ravie de mon achat ! Le canapé est non seulement magnifique mais aussi très confortable. La qualité est au rendez-vous et le prix est justifié. Un grand merci à toute l'équipe !",
      date: new Date('2025-03-28')
    },
    {
      id: 6,
      productId: 1,
      userName: "Thomas Moreau",
      rating: 4,
      comment: "Très satisfait de mon achat. Le canapé correspond parfaitement à la description. Installation facile et design moderne. Seule suggestion : proposer plus de coloris.",
      date: new Date('2025-03-25')
    },
    {
      id: 7,
      productId: 1,
      userName: "Julie Rousseau",
      rating: 5,
      comment: "Une expérience d'achat parfaite du début à la fin ! Communication claire, livraison ponctuelle et produit de grande qualité. Je recommande sans hésitation.",
      date: new Date('2025-03-20')
    },
    {
      id: 8,
      productId: 1,
      userName: "Antoine Lefevre",
      rating: 2,
      comment: "Déçu par les délais de livraison qui étaient beaucoup plus longs qu'annoncés. Le produit est correct mais ne vaut pas vraiment son prix. Le service client pourrait être plus réactif.",
      date: new Date('2025-03-15')
    },
    {
      id: 9,
      productId: 1,
      userName: "Clara Dumont",
      rating: 4,
      comment: "Belle qualité de fabrication, les finitions sont soignées. Le confort est au rendez-vous. Le seul point négatif est le temps d'attente pour la livraison, mais le résultat en vaut la peine.",
      date: new Date('2025-03-10')
    },
    {
      id: 10,
      productId: 1,
      userName: "Hugo Mercier",
      rating: 5,
      comment: "Excellent rapport qualité-prix ! Le canapé est robuste et très esthétique. La livraison s'est déroulée sans accroc et les livreurs étaient très professionnels.",
      date: new Date('2025-03-05')
    },
    {
      id: 11,
      productId: 1,
      userName: "Léa Girard",
      rating: 3,
      comment: "Produit moyen. Les photos donnaient l'impression d'une meilleure qualité. Le service client est réactif, mais les délais de livraison sont trop longs.",
      date: new Date('2025-03-01')
    },
    {
      id: 12,
      productId: 1,
      userName: "Gabriel Roux",
      rating: 5,
      comment: "Super expérience ! Le canapé est encore plus beau en vrai que sur les photos. Livraison rapide et service client au top. Je recommande vivement !",
      date: new Date('2025-02-25')
    }
  ];

  constructor() { }

  getReviewsByProductId(productId: number): Review[] {
    return this.reviews.filter(review => review.productId === productId);
  }

  addReview(review: Omit<Review, 'id'>): Review {
    const newReview: Review = {
      ...review,
      id: Math.max(...this.reviews.map(r => r.id)) + 1
    };
    this.reviews.push(newReview);
    return newReview;
  }
}
