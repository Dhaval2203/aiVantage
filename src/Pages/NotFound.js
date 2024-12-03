import React from "react";

export default function NotFound() {
    return (
        <div className="container text-center">
            <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="col-12 col-md-6">
                    <div className="alert alert-danger" role="alert">
                        <h1 className="display-1">404</h1>
                        <h3 className="mb-4">Page Not Found</h3>
                        <p>Sorry, the page you are looking for doesn't exist.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}