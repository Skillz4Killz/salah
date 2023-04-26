export interface Chapter {
    name: string;
    subheading: string;
    sections: ChapterSection[];
}

export interface ChapterSection {
    name: string;
    content: ChapterSectionContent[];
}

export interface ChapterSectionContent {
    name: string;
    text: string[]
}