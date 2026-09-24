declare namespace App {
  interface Locals {
    /** Interface language, from the optional /vi path prefix. */
    lang: 'en' | 'vi';
    /** Request path without the /vi prefix. */
    basePath: string;
  }
}
