export interface LinkItem {
    title: string;
    path: string;
}

export interface HeroContent {
    header: string;
    description: string;
    pageTitle?: string; 
}

export interface Statistics {
    stat: string;
    description: string;
    id: number;
}

export interface ImageInformation {
    src: string;
    alt: string;
    unoptimized?: boolean;
    height?: number;
}

export interface PostCardContent {
    src: string;
    alt: string;
    postTitle: string;
    postDescription: string;
    timestamp: string;
    link: string;
    id: number;
    author: string;
}