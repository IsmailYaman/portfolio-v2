// types.ts
export interface Project {
    links: any;
    id: number;
    title: string;
    description: { body1: string; body2: string }[];
    tools: { label: string; image: string }[];
    image: string;
}

export interface ProgrammingLanguage {
    id: number;
    label: string;
    image: string;
}

export interface FrameworkLibrary {
    id: number;
    label: string;
    image: string;
}

export interface Ecommerce {
    id: number;
    label: string;
    image: string;
}

export interface Design {
    id: number;
    label: string;
    image: string;
}

export interface GameDevelopment {
    id: number;
    label: string;
    image: string;
}

export interface Other {
    id: number;
    label: string;
    image: string;
}

export interface ExperiencesData {
    programmingLanguages: ProgrammingLanguage[];
    frameworksLibraries: FrameworkLibrary[];
    ecommerce: Ecommerce[];
    design: Design[];
    gameDevelopment: GameDevelopment[];
    other: Other[];
}
