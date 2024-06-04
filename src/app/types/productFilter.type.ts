export type productFilterType = {
    search?: string;
    minRating?: number;
    maxRating?: number;
    minPrice?: number;
    maxPrice?: number;
    isAvailable?: boolean;
    orderBy?: string;
    sort?: string;
}