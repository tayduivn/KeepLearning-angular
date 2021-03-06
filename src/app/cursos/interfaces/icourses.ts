export interface Icourses {
    _id?: string,
    title: string,
    creator?: any,
    description: string,
    topics?: Itopic[],
    image?: string
}

export interface Itopic {
    _id?: string,
    title: string,
    description: string,
    paragraphs: Iparagraph[],
    messages?: Imessage[],
    order?: number,
    extra?: {
        _id?: string,
        title: string,
        file: string
    }[]
}

export interface Iparagraph {
    _id?: string,
    title: string,
    video: string,
    messages?: Imessage[],
    visits?: number,
    order?: number
}

export interface Imessage {
    _id?: string,
    subject: string,
    text: string,
    creator: any,
    responses: Imessage[]
}
