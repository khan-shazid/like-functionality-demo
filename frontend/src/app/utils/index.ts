export const formatLikeCount = (num: number): string => {
    if (num > 999) {
        return `${(num/1000).toFixed(1)}k`
    }
    return `${num}`;
}