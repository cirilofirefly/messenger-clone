export interface IThread {
    id: number;
    group_name?: string;
    group_photo?: string;
    participants: IParticipants[];
    messages?: IMessage[];
    latest_message: string;
    type: EThreadType;
}

export interface IParticipants {
    user_id: number;
    profile_picture: string;
}

export interface IMessage {
    thread_id: number;
    user_id: number;
    message: any;
    type: EMessageType;
}

export enum EMessageType {
    PLAIN_TEXT = 'plain-text',
    MEDIA = 'media'
}

export enum EThreadType {
    END_TO_END = 'end-to-end',
    GROUP = 'group'
}
