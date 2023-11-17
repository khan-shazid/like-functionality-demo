import { cleanup } from '@testing-library/react';
import { urls } from 'app/constants';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { addLike, fetchTotalLikeCount, fetchUserLikeStatus, removeLike } from './like-service';

const url = 'http://localhost:3000';

jest.mock('app/constants', () => ({
    BASE_URL: url,
    urls: {
        addLike: `${url}/api/v1/like/add`,
        removeLike: `${url}/api/v1/like/remove`,
        getTotalLikeCount: (likeId) => `${url}/api/v1/like/${likeId}/count`,
        getUserLikeStatus: (likeId, userId) => `${url}/api/v1/like/${likeId}/user/${userId}`
    }
}));

const mock = new MockAdapter(axios);

const totalLikeResponse = {
    data: 144
};

const userLikeStatusResponse = {
    data: true
};

const addLikeResponse = {};
const removeLikeResponse = {};


afterEach(() => {
    mock.reset();
    cleanup();
});

describe('Like Service Test', () => {
    it('Test 01 - fetch method test for total like count service', async () => {
        mock.onGet(urls.getTotalLikeCount(100)).reply(200, totalLikeResponse);
        const result = await fetchTotalLikeCount(100);
        expect(result).toMatchObject({
            success: true,
            data: 144
        })
    });

    it('Test 02 - fetch method test for user like status service', async () => {
        mock.onGet(urls.getUserLikeStatus(100, 'shazid')).reply(200, userLikeStatusResponse);
        const result = await fetchUserLikeStatus(100, 'shazid');
        expect(result).toMatchObject({
            success: true,
            data: true
        })
    });

    it('Test 03 - testing add like service', async () => {
        const data = {userId: 'a', likeId: 100};
        mock.onPost(urls.addLike, data).reply(200, addLikeResponse);
        const result = await addLike(data);
        expect(result).toMatchObject({
            success: true
        })
    });

    it('Test 04 - testing remove like service', async () => {
        const data = {userId: 'a', likeId: 100};
        mock.onPost(urls.removeLike, data).reply(200, removeLikeResponse);
        const result = await removeLike(data);
        expect(result).toMatchObject({
            success: true
        })
    });
});
