import { Dispatch, useCallback, useEffect, useReducer } from "react";

import { UserLikeControllerAction, UserLikeControllerState } from "app/types/user-like-controller-reducer";
import { addLike, fetchTotalLikeCount, fetchUserLikeStatus, removeLike } from "app/services/like-service";

export type UserLikeControllerType = {
    state: UserLikeControllerState;
    dispatch: Dispatch<UserLikeControllerAction>;
    toggle: () => void;
    updateUser: (user: string) => void;
}

const ADD_LIKE = 'add-like';
const REMOVE_LIKE = 'remove-like';
const SET_TOTAL_LIKE_COUNT = 'set-total-like-count';
const SET_USER_LIKE_STATUS = 'set-user-like-status';
const UPDATE_USER = 'update-user';

const INITIAL_STATE: UserLikeControllerState = { userId: 'test', likeId: 133, totalLikeCount: 0, hasUserLiked: false };

function reducer(state: UserLikeControllerState, action: UserLikeControllerAction) {
    switch (action.type) {
        case ADD_LIKE: {
            return {
                ...state,
                totalLikeCount: state.totalLikeCount + 1,
                hasUserLiked: true,
            };
        }
        case REMOVE_LIKE: {
            return {
                ...state,
                totalLikeCount: state.totalLikeCount - 1,
                hasUserLiked: false,
            };
        }
        case SET_TOTAL_LIKE_COUNT: {
            return {
                ...state,
                totalLikeCount: action.payload,
            };
        }
        case SET_USER_LIKE_STATUS: {
            return {
                ...state,
                hasUserLiked: action.payload,
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                userId: action.payload
            }
        }
    }
}

export default function useUserLikeController(): UserLikeControllerType {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const {likeId, userId, hasUserLiked} = state;

    useEffect(() => {
        if (likeId) handleTotalLikeCount();
        if (likeId && userId) handleHasUserLiked()
    }, [likeId, userId]);

    const handleTotalLikeCount = async() => {
        const result = await fetchTotalLikeCount(likeId);
        if (result.success) dispatch({ type: SET_TOTAL_LIKE_COUNT, payload: result.data });
    }

    const handleHasUserLiked = async() => {
        const result = await fetchUserLikeStatus(likeId, userId);
        if (result.success) dispatch({ type: SET_USER_LIKE_STATUS, payload: result.data });
    }

    const toggle = useCallback(() => {
        if (hasUserLiked) {
            removeLike({likeId, userId});
            dispatch({type: REMOVE_LIKE})
        }
        else {
            addLike({likeId, userId});
            dispatch({type: ADD_LIKE})

        }
    }, [hasUserLiked, dispatch]);

    const updateUser = useCallback((user) => {
        dispatch({type: UPDATE_USER, payload: user})
    }, [dispatch])

    return {state, dispatch, toggle, updateUser};
}