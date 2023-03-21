import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';
import { Book } from 'src/app/models/interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  displayValue: string = '';

  books: Book[] = [
    {
      imageUrl: '../../../../assets/images/books/moneyPower.png',
      title: 'Money Power',
      author: 'Name Surname',
      year: '1998',
      category: Categories.general,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim dicta assumenda sapiente quam, dolorum eum ipsa voluptatem sed, consequatur eligendi perspiciatis, non soluta? Eum sequi, ab cupiditate omnis, animi doloremque amet modi natus rem, aperiam tempore laborum ipsa voluptatum?',
    },
    {
      imageUrl: '../../../assets/images/books/myFirstLover.png',
      title: 'My First Love',
      author: 'Name Surname',
      year: '2000',
      category: Categories.general,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim dicta assumenda sapiente quam, dolorum eum ipsa voluptatem sed, consequatur eligendi perspiciatis, non soluta? Eum sequi, ab cupiditate omnis, animi doloremque amet modi natus rem, aperiam tempore laborum ipsa voluptatum?',
    },
    {
      imageUrl: '../../../assets/images/books/myLittleLife.png',
      title: 'My Little Life',
      author: 'Name Surname',
      year: '2005',
      category: Categories.general,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim dicta assumenda sapiente quam, dolorum eum ipsa voluptatem sed, consequatur eligendi perspiciatis, non soluta? Eum sequi, ab cupiditate omnis, animi doloremque amet modi natus rem, aperiam tempore laborum ipsa voluptatum?',
    },
    {
      imageUrl: '../../../assets/images/books/theLastTrip.png',
      title: 'The Lost Trip',
      author: 'Name Surname',
      year: '2008',
      category: Categories.fantasy,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim dicta assumenda sapiente quam, dolorum eum ipsa voluptatem sed, consequatur eligendi perspiciatis, non soluta? Eum sequi, ab cupiditate omnis, animi doloremque amet modi natus rem, aperiam tempore laborum ipsa voluptatum.',
    },
    {
      imageUrl: '../../../assets/images/books/dark.png',
      title: 'Dark',
      author: 'Name Surname',
      year: '2018',
      category: Categories.fantasy,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim dicta assumenda sapiente quam, dolorum eum ipsa voluptatem sed, consequatur eligendi perspiciatis, non soluta? Eum sequi, ab cupiditate omnis, animi doloremque amet modi natus rem, aperiam tempore laborum ipsa voluptatum.',
    },
    {
      imageUrl: '../../../assets/images/books/findMe.png',
      title: 'Find Me',
      author: 'Name Surname',
      year: '2021',
      category: Categories.general,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim dicta assumenda sapiente quam, dolorum eum ipsa voluptatem sed, consequatur eligendi perspiciatis, non soluta? Eum sequi, ab cupiditate omnis, animi doloremque amet modi natus rem, aperiam tempore laborum ipsa voluptatum.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showValue(event: string) {
    this.displayValue = event;
  }
}
