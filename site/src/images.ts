export type SiteImage = {
  src: string;
  width: number;
  height: number;
};

export type SocialImage = SiteImage & {
  type: "image/jpeg";
};

export type PublicationDecorationKey =
  | "caesarSlicing"
  | "paperHighlyIncremental"
  | "paperInfrastructure"
  | "paperLatticedKInduction"
  | "paperPric3"
  | "paperQif"
  | "paperSlicing";

export type SiteImages = {
  profilePicture: SiteImage;
  socialPreview: SocialImage;
  publicationDecorations: Record<PublicationDecorationKey, SiteImage>;
};

const basePath = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const generatedImagePath = `${basePath}generated-images`;
const image = (filename: string, width: number, height: number): SiteImage => ({
  src: `${generatedImagePath}/${filename}`,
  width,
  height,
});

export const siteImages: SiteImages = {
  profilePicture: image("profile-picture.webp", 1176, 977),
  socialPreview: {
    ...image("profile-picture-social.jpg", 900, 748),
    type: "image/jpeg",
  },
  publicationDecorations: {
    caesarSlicing: image("caesar-slicing-fragment.webp", 700, 230),
    paperHighlyIncremental: image(
      "paper-highly-incremental-preview.webp",
      820,
      980,
    ),
    paperInfrastructure: image("paper-infrastructure-preview.webp", 1000, 1180),
    paperLatticedKInduction: image(
      "paper-latticed-k-induction-preview.webp",
      820,
      980,
    ),
    paperPric3: image("paper-pric3-preview.webp", 820, 980),
    paperQif: image("paper-qif-preview.webp", 820, 980),
    paperSlicing: image("paper-slicing-preview.webp", 820, 980),
  },
};
