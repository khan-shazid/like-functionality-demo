export type UserLikeControllerState = {
    userId: string;
    likeId: number;
    totalLikeCount: number;
    hasUserLiked: boolean;
}

export type UserLikeControllerAction = 
    { type: 'add-like' } | 
    { type: 'remove-like' } | 
    { type: 'set-total-like-count', payload: number } | 
    { type: 'set-user-like-status', payload: boolean } |
    { type: 'update-user', payload: string }