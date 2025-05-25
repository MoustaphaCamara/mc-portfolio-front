export enum Queries {
  Experiences = "*[_type == 'experiences'] | order(year desc)",
  Hobbies = "*[_type == 'hobbies']",
  Portfolio = "*[_type == 'works'] | order(releaseDate desc)",
  Skills = "*[_type == 'skills']",
}
