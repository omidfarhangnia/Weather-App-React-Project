import spinner from "../public/spinner-loader.gif"


export default function SearchLoader() {
    return(
        <>
            <img src={spinner} alt="loading.." className="spinner__loader"/>
        </>
    );
}