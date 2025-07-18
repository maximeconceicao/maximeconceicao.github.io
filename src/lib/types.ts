export type Project = {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  period: string;
  tags?: string[];
  links: {
    name: string;
    url: string;
  }[];
};
