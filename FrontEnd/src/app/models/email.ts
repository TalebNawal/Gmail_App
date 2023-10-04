export class Email {
    id: string;
    // files: File[];
    to: string;
    cc: string[];
    subject: string;
    body: string;
    date: string;
    star: boolean;
    color: string;
  
    constructor(
      id: string,
      to: string,
      cc: string[],
      subject: string,
      body: string,
      date: string,
      star: boolean,
      color: string
    ) {
      this.id = id;
      this.to = to;
      this.cc = cc;
      this.subject = subject;
      this.body = body;
      this.date = date;
      this.star = star;
      this.color=color;
    }
  }
  