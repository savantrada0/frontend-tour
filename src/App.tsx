import { FormEvent, useState } from "react";
import "./App.css";
import {
    useGetAlbumsQuery,
    useCreateAlbumMutation,
    useUpdateAlbumMutation,
} from "./slices/example";

function App() {
    const [page, setPage] = useState(1);
    const [title, setTitle] = useState("");
    const {
        data: albums = [],
        isError,
        isLoading,
        isFetching,
        error,
    } = useGetAlbumsQuery(page);
    const [createAlbum] = useCreateAlbumMutation();
    const [updateAlbum] = useUpdateAlbumMutation();

    if (isLoading || isFetching) {
        return <div>loading...</div>;
    }

    if (isError) {
        console.log({ error });
        return <div>hello</div>;
    }

    function submitAlbum(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createAlbum(title);
        updateAlbum({ id: 21, title: "hello" });
    }

    return (
        <>
            <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
            <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            {isLoading ? "loading..." : albums.length}
            <form onSubmit={(e) => submitAlbum(e)}>
                <h3>New Album</h3>
                <div>
                    <label htmlFor="title">Title:</label>{" "}
                    <input
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        id="title"
                    />
                </div>

                <br />

                <div>
                    <input
                        type="submit"
                        value="Add New Album"
                        disabled={isLoading}
                    />
                </div>
            </form>
        </>
    );
}

export default App;
