export interface INews {
    id: string;
    image: string;
    title: string;
    description: string;
}

export interface NewsFormProps {
    submit: (news: INews) => void
}

export interface NewsListProps {
    news: INews;
    key: string;
    nextFibonacciNumber: number;
}
