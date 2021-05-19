/* eslint-disable no-unused-vars */
interface IMovie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type: string;
}
type Trating = {
    Source: string;
    Value: string;
}

interface IFullMovie extends IMovie{
    Ratings: Array<Trating>;
    Genre: string;
}

type TAppReducer = {
    movies: Array<IMovie>,
    searchInput: string,
    selectedMovie: IFullMovie,
    currentPage: number,
    favoriteMovies: Array<IFullMovie>
}

interface IReducers {
    app: TAppReducer;
}

type KeyValueInput = {
    key: String;
    value: String;
}

type TMovieListProps = {
    movies: Array<IMovie>
}

interface IServerResponseList {
    data: {
        Search: Array<IMovie>
    }
}

interface IReducerAction {
    payload?: any;
    type: string;
}
