import { urls } from "app/constants";
import axios from "axios";

type GetTotalLikeCountResponse = {
    success: boolean;
    data?: number;
}

type GetUserLikeStatusResponse = {
    success: boolean;
    data?: boolean;
}

type AddRemoveLikeResponse = {
    success: boolean;
}


export async function fetchTotalLikeCount(likeId: number): Promise<GetTotalLikeCountResponse> {
    try {
        const result = await axios.get(urls.getTotalLikeCount(likeId));
        return ({
            success: true,
            data: result.data.data
        });
    } catch (e) {
        return ({
            success: false
        })
    }
}

export async function fetchUserLikeStatus(likeId: number, userId: string): Promise<GetUserLikeStatusResponse> {
    try {
        const result = await axios.get(urls.getUserLikeStatus(likeId, userId));
        return ({
            success: true,
            data: result.data.data
        });
    } catch (e) {
        return ({
            success: false
        })
    }
}

export async function addLike(data: {userId: string, likeId: number}): Promise<AddRemoveLikeResponse> {
    try {
        await axios.post(urls.addLike, data);
        return ({
            success: true,
        });
    } catch (e) {
        return ({
            success: false
        })
    }
}

export async function removeLike(data: {userId: string, likeId: number}): Promise<AddRemoveLikeResponse> {
    try {
        await axios.post(urls.removeLike, data);
        return ({
            success: true,
        });
    } catch (e) {
        return ({
            success: false
        })
    }
}