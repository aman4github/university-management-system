import React from 'react'
import '../../style/error404.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function ErrorResultView() {
    // useEffect(() => {
    //     localStorage.clear();
    // }, [])

    return (
        <>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center">404</h1>
                                </div>
                                <div className="content_box_404">
                                    <h3 className="h2">Looks Like Result not yet uploaded</h3>
                                    <p>The page you are looking for not available</p>
                                    <Link to="/studentPanel" style={{ borderRadius: "10px" }}>Go Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
