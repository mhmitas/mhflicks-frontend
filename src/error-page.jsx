import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate()
    const error = useRouteError();
    console.error(error);

    return (
        <section id="error-page">
            <div className="flex min-h-screen flex-col justify-center items-center">
                <h1 className="text-xl">Oops!</h1>
                <p className="text-xl">Sorry, an unexpected error has occurred.</p>
                <p className="text-3xl font-bold mb-4">
                    <i>{error.statusText || error.message}</i>
                </p>
                <button onClick={() => navigate(-1)} className="btn btn-xs btn-primary">Go Back</button>
            </div>
        </section>
    );
}