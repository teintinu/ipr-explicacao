import type { Persona } from "./personas";
import { byId } from "./personas";

/** Formatos de post que o feed precisa saber desenhar. */
export type PostKind = "video" | "photo" | "text" | "opinion" | "news" | "question" | "note";

/** Proporção da mídia. O vídeo/frame é recortado nessa proporção. */
export type Ratio = "1:1" | "3:4" | "16:9" | "9:16";

export interface FeedComment {
  authorId: string;
  text: string;
  likes: number;
  /**
   * Quem comentou marcou isto como alerta. Só alerta de conta em que o leitor
   * confia sobe para o topo; comentário comum fica comum, venha de quem vier.
   */
  alerta?: boolean;
}

export interface FeedPost {
  id: string;
  authorId: string;
  kind: PostKind;
  text: string;
  /** Presente em photo e video. */
  media?: {
    /** Caminho do vídeo (quando há vídeo) ou da imagem. */
    src: string;
    /** Quadro de capa, mostrado antes do play. */
    poster: string;
    ratio: Ratio;
    duration?: number;
  };
  likes: number;
  comments: FeedComment[];
  time: string;
}

export const ratioClass: Record<Ratio, string> = {
  "1:1": "aspect-square",
  "3:4": "aspect-[3/4]",
  "16:9": "aspect-video",
  "9:16": "aspect-[9/16]",
};

export function author(post: FeedPost): Persona {
  return byId(post.authorId);
}
