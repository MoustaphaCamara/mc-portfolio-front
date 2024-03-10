export enum Queries {
    ABOUT = "*[_type == 'about']",
    EXPERIENCES = "*[_type == 'experiences'] | order(year desc)",
    HOBBIES = "*[_type == 'hobbies']",
    PORTFOLIO = "*[_type == 'works'] | order(releaseDate desc)",
    SKILLS = "*[_type == 'skills']",
}