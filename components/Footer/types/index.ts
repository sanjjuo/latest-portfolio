interface Link {
  id: number;
  name?: string;
  href: string;
  label?: string;
  value?: string;
}

interface OtherLinks {
  title: string;
  links: Link[];
}

export type FooterLinksType = OtherLinks[];
