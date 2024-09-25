import { type Page } from '@playwright/test';
import { Header } from './section/header';

export class BasePage {
  protected url!: string;
  public header!: Header;

  constructor(protected readonly page: Page) {
    this.header = new Header(page);
  }

}
