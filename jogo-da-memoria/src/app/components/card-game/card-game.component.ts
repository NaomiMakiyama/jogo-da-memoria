import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {NgForOf} from '@angular/common';
import confetti from 'canvas-confetti';
import {WinningDialogComponent} from '../winning-dialog/winning-dialog.component';

@Component({
  selector: 'app-card-game',
  imports: [
    NgForOf
  ],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.scss'
})
export class CardGameComponent {
  cards: { image: string, flipped: boolean, matched: boolean }[] = [];
  flippedCards: number[] = [];
  isLocked: boolean = false;

  // Add your image paths here
  imageUrls: string[] = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg',
    'assets/images/image5.jpg',
    'assets/images/image6.jpg',
    'assets/images/image7.jpg',
    'assets/images/image8.jpg'
  ];

  constructor(private dialog: MatDialog) {
    this.initializeGame();
  }

  // Initialize the game with pairs of images
  initializeGame(): void {
    const pairs = [...this.imageUrls, ...this.imageUrls]; // Duplicate to create pairs
    this.cards = this.shuffle(pairs).map(image => ({ image, flipped: false, matched: false }));
  }

  // Shuffle the cards using Fisher-Yates algorithm
  shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Handle card click
  flipCard(index: number): void {
    if (this.isLocked || this.cards[index].flipped || this.cards[index].matched) return;

    this.cards[index].flipped = true;
    this.flippedCards.push(index);

    if (this.flippedCards.length === 2) {
      this.checkForMatch();
    }
  }

  // Check if the two flipped cards match
  checkForMatch(): void {
    this.isLocked = true;
    const [firstIndex, secondIndex] = this.flippedCards;
    const firstCard = this.cards[firstIndex];
    const secondCard = this.cards[secondIndex];

    if (firstCard.image === secondCard.image) {
      firstCard.matched = true;
      secondCard.matched = true;
      this.flippedCards = [];
      this.isLocked = false;
      // Check if all cards are matched
      if (this.cards.every(card => card.matched)) {
        this.triggerConfetti();
        this.openWinningDialog();
      }

    } else {
      setTimeout(() => {
        firstCard.flipped = false;
        secondCard.flipped = false;
        this.flippedCards = [];
        this.isLocked = false;
      }, 1000); // Wait 1 second before flipping back
    }
  }

  // Trigger confetti effect
  triggerConfetti(): void {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Open the winning dialog
  openWinningDialog(): void {
    const dialogRef = this.dialog.open(WinningDialogComponent, {
      width: '300px',
      data: { message: 'Você ganhou!' }
    });

    dialogRef.afterClosed().subscribe((retry: boolean) => {
      if (retry) {
        this.resetGame();
      }
    });
  }

  // Reset the game
  resetGame(): void {
    this.initializeGame();
  }
}
