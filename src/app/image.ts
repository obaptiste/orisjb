export interface Image {
  id: number;
  title: string;
  link: string;
  media: string;
  description: number;

  // it is optional because I know it
  // doesn't exist in the API that we will
  // consume in the next exercise :)
  tag?: string;
}
