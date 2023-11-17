export const BASE_URL = process.env.REACT_APP_BE_URL;

export const urls = {
    addLike: `${BASE_URL}/api/v1/like/add`,
    removeLike: `${BASE_URL}/api/v1/like/remove`,
    getTotalLikeCount: (likeId) => `${BASE_URL}/api/v1/like/${likeId}/count`,
    getUserLikeStatus: (likeId, userId) => `${BASE_URL}/api/v1/like/${likeId}/user/${userId}`
}