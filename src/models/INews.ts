export type INews = {
    id: string;
    image: string;
    title: string;
    description: string;
}

export type NewsFormProps = {
    submit: (news: INews) => void
}

export type NewsListProps = {
    news: INews;
    key: string;
    nextFibonacciNumber: number;
}
