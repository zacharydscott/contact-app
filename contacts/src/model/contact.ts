export default class Contact {
  public name: string;
  public bio: string;
  public email: string;
  public phone: string;

  constructor(name: string, bio: string, email: string, phone: string) {
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.phone = phone;
  }
}
