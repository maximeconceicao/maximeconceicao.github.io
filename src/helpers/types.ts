export type Project = {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  mediaUrl: string;
  mediaType: "video" | "image";
  tags?: string[];
  links: {
    name: string;
    url: string;
  }[];
};
