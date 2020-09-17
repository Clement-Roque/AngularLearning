export class Movie {
  id: string;
  fullTitle: string;
  image: string;
  plot: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}