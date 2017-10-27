import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  public filters: any = {
    by: null,
    tags: {},
    query: '',
  };
  public currentItem: any;
  private _items: any[] = [
    {
      id: 1,
      name: 'iPhone X',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      price: 100000,
      weight: 230,
      tags: [
        'apple',
        'iPhone',
        'iPhone X',
      ],
      img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=532x710:format=jpg/path/sb768e2aa78310c6b/image/i0f8c2dc15cce3dec/version/1507707393/image.jpg',
    },
    {
      id: 2,
      name: 'iPhone 4',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      price: 20000,
      weight: 250,
      tags: [
        'apple',
        'iPhone',
        'iPhone 4',
      ],
      img: 'http://img.bfmtv.com/c/1256/708/f07/9840ced41bdbcb56a55920cd1d6eb.jpg',
    }
  ];

  constructor() {
    for (const item of this._items) {
      for (const tag of item.tags) {
        this.filters.tags[tag] = true;
      }
    }
  }

  public get items(): any[] {
    const clonned = this._items.slice(0).filter(i => {
      if (this.filters.query) {
        const re = new RegExp(this.filters.query, 'i');

        if (!re.test(i.name + i.desc)) {
          return false;
        }
      }

      for (const tag in this.filters.tags) {
        if (this.filters.tags.hasOwnProperty(tag) && this.filters.tags[tag] === true && i.tags.indexOf(tag) !== -1) {
          return true;
        }
      }

      return false;
    });

    if (this.filters.by) {
      clonned.sort((a, b) => a[this.filters.by] - b[this.filters.by]);
    }

    return clonned;
  }

  public setCurrentItem(itemId: string|number): boolean {
    if ('string' === typeof itemId) {
      itemId = Number(itemId);
    }

    for (const item of this.items) {
      if (item.id === itemId) {
        this.currentItem = item;

        return true;
      }
    }

    return false;
  }
}
